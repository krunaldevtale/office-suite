$(document).ready(function() {
    $("#recordaudio").hide();
    $("#imagepreview").hide();
    const video = document.getElementById("video");
    const previews = [
        $("#preview1"),
        $("#preview2"),
        $("#preview3")
    ];
    const finalImages = [
        $("#finalImage1"),
        $("#finalImage2"),
        $("#finalImage3")
    ];

    let captureCount = 0; // Initialize capture counter

    // Access the user's camera
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            console.error("Error accessing camera: ", err);
        });

    $("#capture-btn").click(function() {
        if (captureCount >= 3) {
            captureCount = 0; // Reset if exceeding 3 captures
        }

        let canvas = previews[captureCount][0]; 
        const context = canvas.getContext("2d");

        // Set fixed dimensions for canvas
        const width = 80; 
        const height = 65; 
        canvas.width = width;
        canvas.height = height;

        // Draw image from video
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Show the captured image
        previews[captureCount].removeClass("hidden");

        const imageDataUrl = canvas.toDataURL("image/png");
        finalImages[captureCount].html(`<img src="${imageDataUrl}" class="flex h-full"/>`);

        captureCount++; // Move increment here

        if (captureCount === 3) {
            setTimeout(() => {
                $("#capture-image").hide();
                $("#imagepreview").show(); 
            }, 1000);
        }
    });

    // Retake Button Functionality
    $("#retake-btn").click(function() {
        $("#imagepreview").hide();
        $("#capture-image").show();

        // Hide all previews
        previews.forEach(preview => preview.addClass("hidden"));

        // Reset capture count
        captureCount = 0;
    });
});
