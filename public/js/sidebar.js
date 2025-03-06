$(document).ready(function () {
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
        $(this).find("svg").addClass("icon-background");
    

        }
    });
    $(document).ready(function () {
        // Set "All Users" as the default active button
        $("#alluser-btn").closest("li").addClass("icon-background");
    
        $("#sidebar nav li button").click(function () {
            // Remove active class from all list items
            $("#sidebar nav li").removeClass("icon-background");
    
            // Add active class to the clicked button's parent <li>
            $(this).closest("li").addClass("icon-background");
        });
    });
    
});
