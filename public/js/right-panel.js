// Function to show and manage right panel content
function rightPanel(title, subTitle, targetClass) {
    // Check if the right panel is hidden
    if ($(".right-panel").hasClass("hidden")) {
        // Show the right panel
        $(".right-panel").show();
        
        // Enable and disable certain input and button elements
        $(".button-active, .input-active").removeClass("inactive");
        $(".button-active,.input-active").prop('disabled', true);

        // Hide all child elements of the right panel
        $('.right-panel').children().hide(); 
        
        // Show the specific content based on the title
        $(`.${title}`).show();

        // Check the subTitle and toggle visibility of the file details or open file views
        if(subTitle == "file-detail") {
            $(`.${title} .file-detail`).show();
            $(`.${title} .file-open`).hide();
        } else if(subTitle == "file-open") {
            $(`.${title} .file-open`).show();
            $(`.${title} .file-detail`).hide();
        }

        // Enable buttons and inputs in the target class
        $(`.${targetClass} .button-active, .${targetClass} .input-active`).prop('disabled', false);

        // Add 'inactive' class to all buttons and inputs except those in the target class
        $('.button-active, .input-active').not(`.${targetClass} .button-active, .${targetClass} .input-active`).each(function() {
            $(this).addClass("inactive");
        });

        // Scroll the target class into view smoothly
        $(`.${targetClass}`).get(0).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

// Function to hide the right panel
function hideRightPanel() {
    $(".right-panel").hide();
}

// Function to simulate PDF export with a loader
function exportPDF() {
    // Show the loader animation inside the box
    $('.box .loader').css('display', 'flex');
    
    // Hide the loader after 5 seconds (simulating PDF export time)
    setTimeout(function() {
        $('.box .loader').css('display', 'none');
    }, 5000);
}
