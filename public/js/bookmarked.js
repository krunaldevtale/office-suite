$(document).ready(function () {
    // When any star icon with the class 'star' is clicked
    $(".star2").on("click", function () {
      // Toggle the filled and outlined star icons
      $(this).toggleClass("ri-star-line ri-star-fill");
  
      // Toggle the royal blue color for the star
      $(this).toggleClass("text-royal-blue-light");
    });
  });
    