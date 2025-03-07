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
});
