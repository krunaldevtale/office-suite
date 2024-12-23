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
    $(this).find("i").addClass("icon-background");
    }
});
