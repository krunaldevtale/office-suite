$(document).ready(function () {
    $('#main-content').on('mousemove', function (e) {
        var topEdge = $(this).offset().top;
        var hoverThreshold = 10; 
        var ribbonHeight = $('.ribbon').outerHeight();

        if ($('#pin-button i').hasClass('ri-eye-off-line')) {
            if (e.pageY - topEdge <= hoverThreshold) {
                $('.ribbon').show();
                $('.file-section').css('max-height', 'calc(100vh - 19rem)');
            } else if (e.pageY > (topEdge + ribbonHeight)) {
                $('.ribbon').hide();
                $('.file-section').css('max-height', 'calc(100vh - 11rem)');
            }
        }
    });

    $('#pin-button').click(function () {
        var ribbon = $('.ribbon');
        var icon = $('#pin-button i');
        var tooltip = $('.tooltip');

        if (icon.hasClass('ri-eye-line')) {
            ribbon.hide(); 
            icon.removeClass('ri-eye-line').addClass('ri-eye-off-line'); 
            $('.file-section').css('max-height', 'calc(100vh - 11rem)');
            tooltip.text('Pin');
        } else if (icon.hasClass('ri-eye-off-line')) {
            ribbon.show(); 
            icon.removeClass('ri-eye-off-line').addClass('ri-eye-line');
            $('.file-section').css('max-height', 'calc(100vh - 19rem)');
            tooltip.text('Unpin');
        }
    });
});
