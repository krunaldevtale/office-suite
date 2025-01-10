$(document).ready(function () {

    $('.color-box').on('click', function () {
        var selectedColor = $(this).data('color'); // Get the color from data attribute
        $('#text').css('color', selectedColor); // Apply the color to the text
    });

    // Change text color when the custom color is selected
    $('#custom-color').on('button', function () {
        var selectedColor = $(this).val(); // Get the custom color value
        $('#text').css('color', selectedColor); // Apply the color to the text
    });

    $('#open-color-picker').on('click', function () {
        $('#custom-color').trigger('click'); // Trigger click on the hidden color input
    });

})