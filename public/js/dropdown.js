$(document).ready(function () {
    // Get all "drop" buttons
    const $buttons = $('.drop-button');

    $buttons.each(function() {
        const $button = $(this);
        
        $button.on('click', function(event) {
        const $dropdown = $button.next('.dropdown');
        
        $('.dropdown').not($dropdown).addClass('hidden');

        $dropdown.toggleClass('hidden');
        event.stopPropagation();
        });
    });

    // Close dropdowns if clicked outside
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.drop-button').length) {
        $('.dropdown').addClass('hidden');
        }
    });
    
});
