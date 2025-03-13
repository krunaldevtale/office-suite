$(document).ready(function () {
    let stream = null;
    let imageCaptured = false;

    function startVideoStream() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (videoStream) {
                    stream = videoStream;
                    $("#video").prop("srcObject", stream).removeClass("hidden").get(0).play();
                    $("#canvas").addClass("hidden");
                    $("#capture-button").removeClass("hidden");
                    $("#retake-button").addClass("hidden");
                })
                .catch(function (error) {
                    console.error("Camera access denied:", error);
                    $("#instruction-subtext").text("Please allow camera access.").addClass("text-red-500");
                });
        }
    }

    function stopVideoStream() {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            stream = null;
        }
    }

    function isFaceProperlyVisible() {
        return Math.random() > 0.5; // Simulated face detection logic
    }

    $("#capture-button").click(function () {
        if (!stream) {
            startVideoStream();
            return;
        }

        setTimeout(function () {
            let success = isFaceProperlyVisible();
            let video = $("#video").get(0);
            let canvas = $("#canvas").get(0);
            let context = canvas.getContext("2d");

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            video.pause();
            $("#video").addClass("hidden");
            $("#canvas").removeClass("hidden");

            stopVideoStream();
            imageCaptured = true;

            if (success) {
                $("#error-message").addClass("hidden");
                $("#instruction-subtext").text("Take your face photo in bright light.").removeClass("text-red-500");
                $("#capture-button, #retake-button").addClass("hidden");

                setTimeout(function () {
                    window.location.href = "audio-capture.html";
                }, 5000);
            } else {
                $("#instruction-text").text("Capture image");
                $("#instruction-subtext").text("Couldn't recognize your image.").addClass("text-red-500");
                $("#error-message").addClass("hidden");
                $("#capture-button").addClass("hidden");
                $("#retake-button").removeClass("hidden");
            }
        }, 2000);
    });

    $("#retake-button").click(function () {
        if (!imageCaptured) return;

        $("#instruction-text").text("Capture image");
        $("#instruction-subtext").text("Take your face photo in bright light.").removeClass("text-red-500");
        $("#capture-button").removeClass("hidden");
        $("#retake-button").addClass("hidden");

        $("#canvas").addClass("hidden");
        $("#video").removeClass("hidden");

        $("#error-message").addClass("hidden");

        startVideoStream();
    });
});
