$(document).ready(function () {
    // Handle each custom select individually
    $(".custom-select").each(function () {
        const customSelect = $(this);

        // Handle the dropdown toggle
        customSelect.find(".selected-item").on("click", function (event) {
            event.stopPropagation();
            // Close all other dropdowns
            $(".custom-select .select-options").addClass("hidden");
            $(".custom-select .selected-item").removeClass("select-arrow-active");
            
            // Toggle the current dropdown
            customSelect.find(".select-options").toggleClass("hidden");
            $(this).toggleClass("select-arrow-active");
        });

        // Handle option click
        customSelect.find(".option").on("click", function (event) {
            const selectedText = $(this).text();
            customSelect.find(".selected-item span:first").text(selectedText);
            customSelect.find(".selected-item span:first").addClass("text-royal-blue");
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
