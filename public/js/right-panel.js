function rightPanel(title, subTitle, targetClass) {
    // Check if the right panel is currently hidden
    if ($(".right-panel").hasClass("hidden")) {
        // Show the right panel
        $(".right-panel").show();
        
        // Hide all child elements of the right panel
        $('.right-panel').children().hide(); 
        
        // Show the section corresponding to the given `title`
        $(`.${title}`).show();

        // Handle visibility of `file-detail` and `file-open` based on the `subTitle` parameter
        if (subTitle == "file-detail") {
            $(`.${title} .file-detail`).show();
            $(`.${title} .file-open`).hide();
        } else if (subTitle == "file-open") {
            $(`.${title} .file-open`).show();
            $(`.${title} .file-detail`).hide();
        }

        // Disable and add `inactive` class to all elements with the `button-active` and `input-active` classes
        $(".button-active, .input-active").removeClass("inactive").prop('disabled', true);
        
        // Enable the active buttons and inputs only for the specific `targetClass`
        $('.button-active, .input-active').not(`.${targetClass} .button-active, .${targetClass} .input-active`).each(function() {
            $(this).addClass("inactive");
        });
        $(`.${targetClass} .button-active`).addClass("inactive").prop('disabled', false);
        $(`.${targetClass} .input-active`).prop('disabled', false);

        // Add a keyup listener to handle activation of buttons based on input value
        $(`.${targetClass} .input-active`).on('keyup', function() {
            const inputValue = $(this).val();
            if (inputValue.trim().length > 0) {
                $(`.${targetClass} .button-active`).removeClass("inactive");
            } else {
                $(`.${targetClass} .button-active`).addClass("inactive");
            }
        });

        // Set title for the upload URL section
        if (targetClass == "upload-url") {
            $(".file-share .right-panel-title span").text("Upload");
        }

        // Manage activation state for social media-related buttons
        $(".social-media").addClass("inactive").prop('disabled', true);
        if (targetClass == "publish") {
            $(".social-media").removeClass("inactive").prop('disabled', false);
        }

        // Manage activation state for version-related elements
        $(".version,.version-icon").addClass("inactive").prop('disabled', true);
        if (targetClass == "history") {
            $(".version,.version-icon").removeClass("inactive").prop('disabled', false);
        }
        if (targetClass == "merge-page"|| targetClass == "combine-page") {
            $(".page-active").removeClass("inactive").prop('disabled', true);
            $('.page-active').not(`.${targetClass} .page-active`).each(function () {
                $(this).addClass("inactive").prop('disabled', true);
            });
        }

        // Handle `white-button-active` elements for specific target class
        if ($(`.${targetClass} .white-button-active`).length > 0) {
            $(".white-button-active").removeClass("inactive").prop('disabled', true);
            $('.white-button-active').not(`.${targetClass} .white-button-active, .${targetClass} .white-button-active`).each(function () {
                $(this).addClass("inactive").prop('disabled', true);
            });
        }

        // Smoothly scroll to the target section within the right panel
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
function exporting(name) {
    // Show the loader animation inside the box
    $('.loader-text').html(name);
    $('.box .loader').css('display', 'flex');
    
    // Hide the loader after 5 seconds (simulating PDF export time)
    setTimeout(function() {
        $('.box .loader').css('display', 'none');
    }, 5000);
}