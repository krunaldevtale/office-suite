$(document).ready(function () {
    // Function to update the zoom percentage
    function updateZoom(percentage) {
        $("#zoomPercentage").text(percentage + "%");
        $(".box").css({
        width: percentage/2 + "rem",
        minHeight: percentage + "rem",
        });
        if(percentage<30){
            $(".upload-section").css({
            transform: "scale(" + percentage/30 + ")",
            "transform-origin": "center center", // Ensure scaling is relative to the top
            });
            $(".upload-section span").hide();
        }else{
            $(".upload-section span").show();
        }
        if(percentage<100){
            $(".box").css({marginTop:"5%"});
        }else{
            $(".box").css({marginTop:"0"});
        }
    }
  
    // Initialize the zoom slider
    $("#zoomSlider").on("input", function () {
      const zoomLevel = $(this).val();
      updateZoom(zoomLevel);
    });
  
    // Initialize the zoom out button
    $(".ri-zoom-out-line").click(function () {
      let currentZoom = parseInt($("#zoomSlider").val());
      if (currentZoom > 12) {
        currentZoom -= 10; // Decrease zoom by 10%
        $("#zoomSlider").val(currentZoom);
        updateZoom(currentZoom);
      }
    });
  
    // Initialize the zoom in button
    $(".ri-zoom-in-line").click(function () {
      let currentZoom = parseInt($("#zoomSlider").val());
      if (currentZoom < 200) {
        currentZoom += 10; // Increase zoom by 10%
        $("#zoomSlider").val(currentZoom);
        updateZoom(currentZoom);
      }
    });

     $('.scroll-x').on('scroll', function() { var scrollPos = $(this).scrollLeft(); $('.file-section').scrollLeft(scrollPos); }); $('.file-section').on('scroll', function() { var scrollPos = $(this).scrollLeft(); $('.scroll-x').scrollLeft(scrollPos); });  var contentWidth = $('.file-section')[0].scrollWidth; var containerWidth = $('.file-section').width(); if (contentWidth > containerWidth) { $('.file-section').css('overflow-x', 'hidden'); $('.scroll-x').css('overflow-x', 'auto'); } else { $('.file-section').css('overflow-x', 'auto'); $('.scroll-x').css('overflow-x', 'hidden')};
  });
  