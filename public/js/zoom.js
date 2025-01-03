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
            "transform-origin": "center center",
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
        currentZoom -= 10;
        $("#zoomSlider").val(currentZoom);
        updateZoom(currentZoom);
      }
    });
  
    // Initialize the zoom in button
    $(".ri-zoom-in-line").click(function () {
      let currentZoom = parseInt($("#zoomSlider").val());
      if (currentZoom < 200) {
        currentZoom += 10;
        $("#zoomSlider").val(currentZoom);
        updateZoom(currentZoom);
      }
    });

    $('.file').css('overflow-x', 'hidden');

  });
  