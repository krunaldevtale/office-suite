$(document).ready(function () {
    // Handle each custom select individually
    $(".custom-select").each(function () {
        const customSelect = $(this);

        // Set the default selected item to the first option dynamically
        const firstOption = customSelect.find(".select-options .option:first").text();
        customSelect.find(".selected-item span:first").text(firstOption);

        // Handle the dropdown toggle
        customSelect.find(".selected-item").on("click", function (event) {
            event.stopPropagation();
            customSelect.find(".select-options").toggleClass("hidden");
            $(this).toggleClass("select-arrow-active");
        });

        // Handle option click
        customSelect.find(".option").on("click", function (event) {
            const selectedText = $(this).text();
            customSelect.find(".selected-item span:first").text(selectedText);
            customSelect.find(".select-options").addClass("hidden");
            event.stopPropagation();
        });
    });

    // Close dropdown when clicking outside
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".custom-select").length) {
            $(".select-options").addClass("hidden");
            $(".selected-item").removeClass("select-arrow-active");
        }
    });
});
