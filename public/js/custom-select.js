$(document).ready(function () {
    // Set default selected item to "Only you can access"
    $("#selected-item span:first").text("Only you can access");
    
    // Handle the dropdown toggle
    $("#selected-item").on("click", function (event) {
        event.stopPropagation();
        $("#select-options").toggleClass("hidden");
        $(this).toggleClass("select-arrow-active");
    });

    // Handle option click
    $(".option").on("click", function (event) {
        const selectedText = $(this).text();
        $("#selected-item span:first").text(selectedText);
        $("#select-options").addClass("hidden");
        event.stopPropagation();
    });

    // Close dropdown when clicking outside
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".custom-select").length) {
        $("#select-options").addClass("hidden");
        $("#selected-item").removeClass("select-arrow-active");
        }
    });
});