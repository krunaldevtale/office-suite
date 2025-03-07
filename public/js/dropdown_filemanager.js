$(document).ready(function () {
    // Toggle dropdown visibility when any button with class .dropdown-button is clicked
    $('.dropdown-button').on('click', function (event) {
        event.stopPropagation(); // Prevent the click event from propagating
        var $dropdown = $(this).next('.dropdown-menu'); // Get the associated dropdown menu
        $dropdown.toggleClass('hidden'); // Toggle the 'hidden' class on the dropdown
    });

    // Close the dropdown when clicking outside of it
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.dropdown-button').length) {
            $('.dropdown-menu').addClass('hidden'); // Close all dropdowns if clicked outside
        }
    });

    // Handle selection from the dropdown
    $('.dropdown-menu a').on('click', function (event) {
        event.preventDefault(); // Prevent the default anchor click behavior
        var selectedType = $(this).text(); // Get the selected text
        console.log('Selected Type:', selectedType); // You can process the selection here

        // Close the dropdown after selection
        $(this).closest('.dropdown-menu').addClass('hidden'); // Hide the dropdown that the link belongs to
    });
});
