function rightPanel(targetClass) {
    if ($(".right-panel").hasClass("hidden")) {
        $(".right-panel").show();
        $(".right-panel button.button-active, .right-panel input.input-active").removeClass("inactive");
        $(".button-active,.input-active").prop('disabled', true);
        $(`.${targetClass} .button-active,.${targetClass} .input-active`).prop('disabled', false);
        $('.right-panel button.button-active, .right-panel input.input-active').not(`.${targetClass} button.button-active, .${targetClass} input.input-active`).each(function() {
            $(this).addClass("inactive");
        });
        $(`.${targetClass}`).get(0).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}
function hideRightPanel(){
    $(".right-panel").hide();
}