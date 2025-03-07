$(document).ready(function () {
    // Toggle dropdown visibility when the upload button is clicked
    $('#upload-button').on('click', function (event) {
        event.stopPropagation(); // Prevent the click event from propagating
        var $dropdown = $('#upload-dropdown-menu'); // Get the associated dropdown menu
        $dropdown.toggleClass('hidden'); // Toggle the 'hidden' class on the dropdown
    });

    // Close the dropdown when clicking outside of it
    $(document).on('click', function (event) {
        if (!$(event.target).closest('#upload-button').length) {
            $('#upload-dropdown-menu').addClass('hidden'); // Close the dropdown if clicked outside
        }
    });

    // Handle selection from the dropdown
    $('#upload-dropdown-menu a').on('click', function (event) {
        event.preventDefault(); // Prevent the default anchor click behavior
        var selectedType = $(this).text(); // Get the selected text
        console.log('Selected Type:', selectedType); // You can process the selection here

        // Close the dropdown after selection
        $('#upload-dropdown-menu').addClass('hidden'); // Hide the dropdown
    });
});
