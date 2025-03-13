$(document).ready(function () {
    const video = $("#video")[0];
    const canvas = $("#canvas")[0];
    const instructionText = $("#instruction-text");
    const instructionSubtext = $("#instruction-subtext");
    const captureButton = $("#capture-button");
    const retakeButton = $("#retake-button");
    const errorMessage = $("#error-message");

    let stream = null;
    let isCameraOn = false;

    function startVideoStream() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (videoStream) {
                    stream = videoStream;
                    video.srcObject = stream;
                    video.play();
                    $(video).removeClass("hidden");
                    $(canvas).addClass("hidden");
                    isCameraOn = true;
                })
                .catch(function (error) {
                    console.error("Camera access denied:", error);
                    instructionSubtext.text("Please allow camera access").addClass("text-red-500");
                });
        }
    }

    function stopVideoStream() {
        if (stream) {
            let tracks = stream.getTracks();
            tracks.forEach(track => track.stop()); // Stop all video tracks
            stream = null;
            isCameraOn = false;
        }
    }

    function isFaceProperlyVisible() {
        return Math.random() > 0.5; // Simulating face detection
    }

    captureButton.on("click", function () {
        if (!isCameraOn) {
            // Start camera only when Capture button is clicked for the first time
            startVideoStream();
            return;
        }

        // Capture image
        const success = isFaceProperlyVisible();
        const context = canvas.getContext("2d");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        video.pause();
        $(video).addClass("hidden");
        $(canvas).removeClass("hidden");
        stopVideoStream(); // Stop the camera after capturing

        if (success) {
            errorMessage.addClass("hidden");
            instructionSubtext.text("Take your face photo in a bright light").removeClass("text-red-500");
            captureButton.addClass("hidden");
            retakeButton.removeClass("hidden");

            setTimeout(function () {
                window.location.href = "audio-capture.html";
            }, 5000);
        } else {
            instructionText.text("Capture image");
            instructionSubtext.text("Couldn't recognize your image").addClass("text-red-500");
            errorMessage.addClass("hidden");
            captureButton.removeClass("hidden");
            retakeButton.removeClass("hidden");
        }
    });

    retakeButton.on("click", function () {
        instructionText.text("Capture image").removeClass("text-red-500");
        instructionSubtext.text("Take your face photo in a bright light").removeClass("text-red-500");
        captureButton.removeClass("hidden");
        retakeButton.addClass("hidden");
        $(canvas).addClass("hidden");
        $(video).removeClass("hidden");
        errorMessage.addClass("hidden");
        startVideoStream(); // Restart camera
    });
});
