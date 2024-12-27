$(document).ready(function () {
    $(document).on('mouseenter', '.menu-button', function (e) {
        var $dropdown = $(this).next('.menu-dropdown');
        var mouseX = e.clientX;
        var mouseY = e.clientY;
        $('.menu-dropdown').not($dropdown).addClass('hidden');
    
        // Clear previous inline styles before calculating new position
        $dropdown.removeAttr('style');
    
        // Get the dropdown's height, width, and the viewport dimensions
        var dropdownHeight = $dropdown.outerHeight();
        var dropdownWidth = $dropdown.outerWidth();
        var viewportHeight = $(window).height();
        var viewportWidth = $(window).width();
    
        // Get the height of the menu button
        var buttonHeight = $(this).outerHeight();
    
        // Calculate available vertical space from the mouse position to the bottom of the viewport
        var spaceBelow = viewportHeight - mouseY;
    
        // Check if the dropdown will overflow vertically
        if (spaceBelow < dropdownHeight) {
            // Position the dropdown above the button if near the bottom of the page
            $dropdown.css({
                'bottom': '0',
                'left': '5.5rem',
                'max-height': "35vh",
                'overflow-y': 'auto',
                'margin-bottom': '1rem'
            });
            $dropdown.addClass("scroll");
        } else {
            // Position it below the button
            $dropdown.css('top', 'initial');
            $dropdown.css('margin-top', '-' + buttonHeight + 'px'); 
            $dropdown.css('left', '5.5rem');
            $dropdown.css('max-height', '60vh');
        }
    
        // Check if the dropdown will overflow horizontally (right side)
        if (mouseX + dropdownWidth > viewportWidth) {
            $dropdown.css('left', viewportWidth - dropdownWidth - 10); 
        }
    
        // Toggle the dropdown visibility
        $dropdown.toggleClass('hidden');
    });    

    // Show sub-dropdown on hover and make corresponding button background blue
    $(document).on('mouseenter', '.menu-dropdown .relative', function (event) {
        var $subdropdown = $(this).find('.sub-dropdown');
        
        // Clear previous styles for sub-dropdown
        $subdropdown.removeAttr('style');

        // Get sub-dropdown's height, width, and viewport dimensions
        var subDropdownHeight = $subdropdown.outerHeight();
        var subDropdownWidth = $subdropdown.outerWidth();
        var mouseX = event.clientX;  
        var mouseY = event.clientY;  
        var viewportHeight = $(window).height();
        var viewportWidth = $(window).width();

        // Check if the sub-dropdown will overflow vertically
        var spaceBelow = viewportHeight - mouseY;

        if (spaceBelow < subDropdownHeight) {
            // Position the sub-dropdown above the menu item if near the bottom of the page
            $subdropdown.css({
                'height': spaceBelow - 10 + 'px', 
                'overflow-y': 'auto',
                'margin-bottom': '1rem',
                'bottom': '0',
            });
            $subdropdown.addClass("scroll");
        } else {
            // Position it below the menu item
            $subdropdown.css('top', '0');
        }

        // Check if the sub-dropdown will overflow horizontally (right side)
        if (mouseX + subDropdownWidth > viewportWidth) {
            $subdropdown.css('left', viewportWidth - subDropdownWidth - 10); 
        }

        $subdropdown.removeClass('hidden');
        $subdropdown.css('margin-left', '0.1rem');

        // Add active class to parent menu item
        $(this).addClass('menu-active');
    });

    // Hide sub-dropdown and reset corresponding button background
    $(document).on('mouseleave', '.menu-dropdown .relative', function () {
        var $subdropdown = $(this).find('.sub-dropdown');
        $subdropdown.addClass('hidden');

        // Remove active class from parent menu item
        $(this).removeClass('menu-active');
    });

    // Hide the main dropdown when mouse leaves the dropdown area
    $(document).on('mouseleave', '.menu-dropdown', function () {
        $(this).addClass('hidden');
    });
});
