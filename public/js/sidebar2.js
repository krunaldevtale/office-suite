$(document).ready(function () {
    // Toggle sidebar visibility
    $('.menu-toggle').click(function () {
        $('#sidebar').toggleClass('-translate-x-full');
    });

    // Get the current path
    const currentPath = window.location.pathname;

    // Iterate over all <a> elements in the sidebar
    $("#sidebar nav a").each(function () {
        // Check if the href matches the current path
        if ($(this).attr("href") === currentPath) {
            // Add the 'icon-background' class to the <i> icon inside the <a>
            $(this).find("i").addClass("icon-background"); // Add the class to the icon
            $(this).closest("li").addClass("icon-background"); // Add class to the entire <li>
        }
    });

    // Handle click event on sidebar items
    $("#sidebar nav li button").click(function () {
        // Remove active class from all <li>
        $("#sidebar nav li").removeClass("icon-background");

        // Add active class to the clicked <li>
        $(this).closest("li").addClass("icon-background");
    });

    

    // Highlight active link based on current URL (on page load)
    $("#user-sidebar a").each(function () {
      if ($(this).attr("href") === currentPath) {
        $("#user-sidebar a").removeClass("icon-background"); // Remove class from all
        $(this).addClass("icon-background"); // Add to current link
      }
    });

    // Add click event to highlight selected link
    $("#user-sidebar a").click(function () {
      $("#user-sidebar a").removeClass("icon-background");
      $(this).addClass("icon-background");
      
      // Store in localStorage for persistence after page reload
      localStorage.setItem("activeLink", $(this).attr("href"));
    });

    // Persist the active link after reload
    var activeLink = localStorage.getItem("activeLink");
    if (activeLink) {
      $("#user-sidebar a").removeClass("icon-background");
      $("#user-sidebar a[href='" + activeLink + "']").addClass("icon-background");
    }
});
