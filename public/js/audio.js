let mediaRecorder;
let audioChunks = [];
let audioBlob;
let audioUrl;
let audio = new Audio();

$(document).ready(function () {
  $("#save-btn").click(function () {
    $("#imagepreview").hide();
    $("#recordaudio").show();
  });

  let recordButton = $("#record-button");

  recordButton.on("click", async function () {
    if (!mediaRecorder || mediaRecorder.state === "inactive") {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = []; // Reset chunks on new recording

      mediaRecorder.ondataavailable = function (event) {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = function () {
        audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        let reader = new FileReader();

        reader.onloadend = function () {
          localStorage.setItem("recordedAudio", reader.result); // Store Base64 string
          $("#recordaudio").hide();
          $("#audiopreview").show(); // Show audio preview after recording
        };

        reader.readAsDataURL(audioBlob); // Convert Blob to Base64
      };

      mediaRecorder.start();
      recordButton.html('<svg class="h-6 w-6"> <use xlink:href="/public/images/icons.svg#stop-line"></use></svg>  Stop');
    } else {
      mediaRecorder.stop();
      recordButton.html('<svg class="h-6 w-6"> <use xlink:href="/public/images/icons.svg#audio-record"></use></svg> Record');
    }
  });

  $(document).ready(function () {
   let playButton = $("#play-button");
   let progressBar = $("#progress-bar");
   let audio = new Audio(); // Declare globally
 
   playButton.on("click", function () {
     let recordedAudio = localStorage.getItem("recordedAudio");
 
     if (recordedAudio) {
       if (!audio.paused && audio.src) {
         audio.pause();
         playButton.html('<svg class="h-6 w-6"><use xlink:href="/public/images/icons.svg#audio-play"></use> </svg>'); // Toggle back to play
         return;
       }
 
       audio.src = recordedAudio; // Use the stored audio
       audio.play();
       playButton.html('<svg class="h-6 w-6"><use xlink:href="/public/images/icons.svg#pause"></use> </svg>'); // Change to pause icon
 
       // Update progress bar as audio plays
       $(audio).on("timeupdate", function () {
         let progress = (audio.currentTime / audio.duration) * 100;
         progressBar.css("width", progress + "%");
       });
 
       // Reset progress and button when audio ends
       $(audio).on("ended", function () {
         progressBar.css("width", "0%");
         playButton.html('<svg class="h-6 w-6"><use xlink:href="/public/images/icons.svg#audio-play"></use> </svg>'); // Reset to play icon
       });
     } else {
       alert("No recorded audio found!");
     }
   });
 });
 

  // Re-record button functionality
  $("#rerecord-btn").click(function () {
    $("#audiopreview").hide();
    $("#recordaudio").show();
  });
});
