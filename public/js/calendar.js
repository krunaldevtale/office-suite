$(document).ready(function () {
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    function generateMonthYearDropdown() {
        let monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let startYear = currentYear - 50;
        let endYear = currentYear + 10;
        let options = "";

        for (let y = startYear; y <= endYear; y++) {
            for (let m = 0; m < 12; m++) {
                options += `<div class="px-3 py-2 hover:bg-gray-200 cursor-pointer" data-month="${m}" data-year="${y}">
                    ${monthNames[m]} ${y}
                </div>`;
            }
        }

        $('#dropdownContent').html(options);
        updateMonthYearLabel();
    }

    function updateMonthYearLabel() {
        let monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        $('#monthYearLabel').text(`${monthNames[currentMonth]} ${currentYear}`);
    }

    function renderCalendar(month, year) {
        $('#calendarDays').empty();
        
        let firstDay = new Date(year, month, 1).getDay();
        let daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            $('#calendarDays').append('<div></div>');
        }

        for (let day = 1; day <= daysInMonth; day++) {
            let dateStr = `${year}-${month + 1}-${day}`;
            let isToday = (day === today.getDate() && month === today.getMonth() && year === today.getFullYear());
            let classNames = `cursor-pointer h-10 w-10 p-2 rounded-full ${isToday ? 'bg-royal-blue text-white' : 'hover:border hover:border-royal-blue hover:text-royal-blue'}`;
            
            $('#calendarDays').append(`<div class="${classNames}" data-date="${dateStr}">${day}</div>`);
        }

        updateMonthYearLabel();
    }

    $(document).on('click', '#calendarDays div', function () {
        let selected = $(this).attr('data-date');
        $('#selectedDate').text(`Selected Date: ${selected}`);
        $('#calendarDays div').removeClass('bg-blue-500 text-white');
        $(this).addClass('bg-blue-500 text-white');
    });

    $('#prevMonth').click(function () {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    $('#nextMonth').click(function () {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        renderCalendar(currentMonth, currentYear);
    });

    $('#monthYearDropdown').click(function () {
        $('#dropdownContent').toggle();
    });

    $(document).on('click', '#dropdownContent div', function () {
        currentMonth = $(this).data('month');
        currentYear = $(this).data('year');
        $('#dropdownContent').hide();
        renderCalendar(currentMonth, currentYear);
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('#monthYearDropdown').length) {
            $('#dropdownContent').hide();
        }
    });

    generateMonthYearDropdown();
    renderCalendar(currentMonth, currentYear);
    function formatDate(date) {
        return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    }

    $("#dateDisplay").text(formatDate(new Date()));
    
});