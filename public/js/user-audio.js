$(document).ready(function () {
    let mediaRecorder;
    let audioChunks = [];
    let audioBlob;
    let audioUrl;
    let audio = new Audio();
    let isPlaying = false;

    const recordButton = $("#record-button");
    const playPauseButton = $("#play-pause-button");
    const audioControls = $("#audio-controls");
    const instructionText = $("#instruction-text");
    const progressBar = $("#audio-progress-bar");
    const reRecordButton = $("#re-record-button");

    const expectedText = "Welcome to Aibaze, your all-in-one office suite for productivity. With Aibaze, you can create and edit documents in Word, analyze data in Excel, design stunning presentations in PowerPoint, and manage PDFs with ease.";

    function levenshteinDistance(s1, s2) {
        let dp = Array(s1.length + 1).fill(null).map(() => Array(s2.length + 1).fill(null));
        for (let i = 0; i <= s1.length; i++) dp[i][0] = i;
        for (let j = 0; j <= s2.length; j++) dp[0][j] = j;
        for (let i = 1; i <= s1.length; i++) {
            for (let j = 1; j <= s2.length; j++) {
                let cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1,
                    dp[i - 1][j - 1] + cost
                );
            }
        }
        return dp[s1.length][s2.length];
    }

    function calculateSimilarity(text1, text2) {
        const distance = levenshteinDistance(text1, text2);
        const maxLength = Math.max(text1.length, text2.length);
        return ((maxLength - distance) / maxLength) * 100;
    }

    function startRecording() {
        audioChunks = [];
        recordButton.html(`<i class="ri-mic-line"></i> Recording...`);

        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.ondataavailable = (event) => audioChunks.push(event.data);
            mediaRecorder.onstop = processRecording;
            mediaRecorder.start();
            setTimeout(() => mediaRecorder.stop(), 5000);
        });
    }

    function processRecording() {
        audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        audioUrl = URL.createObjectURL(audioBlob);
        audio.src = audioUrl;
        validateAudio();
    }

    function validateAudio() {
        if (audioBlob.size < 2000) {
            showError("Couldn't recognize the audio");
            return;
        }
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.onresult = (event) => {
            const recognizedText = event.results[0][0].transcript.trim().toLowerCase().replace(/[.,!?]/g, "");
            const cleanExpectedText = expectedText.toLowerCase().replace(/[.,!?]/g, "");
            const similarity = calculateSimilarity(recognizedText, cleanExpectedText);
            if (similarity >= 70) {
                window.location.href = "home.html";
            } else {
                showError("Couldn't recognize the audio.");
            }
        };
        recognition.onerror = () => showError("Couldn't recognize the audio");
        recognition.start();
    }

    function togglePlayPause() {
        if (isPlaying) {
            audio.pause();
            playPauseButton.html(`<i class="ri-play-line"></i>`);
        } else {
            audio.play();
            playPauseButton.html(`<i class="ri-pause-line"></i>`);
        }
        isPlaying = !isPlaying;
    }

    function updateProgressBar() {
        let progress = (audio.currentTime / audio.duration) * 100;
        progressBar.css("width", progress + "%");
    }

    function resetRecording() {
        audioChunks = [];
        audioBlob = null;
        audioUrl = "";
        audio.src = "";

        instructionText.text("Read below, loud and clear").css("color", "");

        // Ensure the UI returns to the initial state
        recordButton.html(`<i class="ri-mic-line"></i> Record`).removeClass("hidden");
        
        audioControls.addClass("hidden"); 
        reRecordButton.addClass("hidden");
    }

    function showError(message) {
        instructionText.text(message).css("color", "red");
        reRecordButton.removeClass("hidden");
        recordButton.addClass("hidden");
        audioControls.removeClass("hidden");
    }

    recordButton.on("click", function () {
        if (recordButton.text() === "Re-record") {
            resetRecording();
        } else {
            startRecording();
        }
    });

    playPauseButton.on("click", togglePlayPause);
    audio.on("timeupdate", updateProgressBar);

    reRecordButton.on("click", function () {
        resetRecording();
    });
});
