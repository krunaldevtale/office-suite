$(document).ready(function () {
    $("#recordaudio").hide();
    $("#audiopreview").hide();
    $("#signupForm").submit(function (e) {
      e.preventDefault(); // Prevent form submission
  
      let isValid = true; // Reset validation flag
  
      // Name Validation (Only letters and spaces allowed)
      let name = $("#name").val().trim();
      let namePattern = /^[A-Za-z\s]+$/;
      $(".nameError").text(""); // Clear previous errors
  
      if (name === "") {
        $(".nameError").text("Please fill out this field").show();
        isValid = false;
      } else if (!namePattern.test(name)) {
        $(".nameError").text("Please enter a valid name (letters only).").show();
        isValid = false;
      } else {
        $(".nameError").hide();
      }
  
      // Email Validation (Proper email format)
      let email = $("#email").val().trim();
      let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      $(".emailError").text(""); // Clear previous errors
  
      if (email === "") {
        $(".emailError").text("Please enter your email.").show();
        isValid = false;
      } else if (!emailPattern.test(email)) {
        $(".emailError").text("Please enter a valid email address.").show();
        isValid = false;
      } else {
        $(".emailError").hide();
      }
  
      // Password Validation (Min 8 chars, 1 uppercase, 1 number, 1 special char)
      let password = $("#password").val();
      let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      $(".passwordError").text(""); // Clear previous errors
  
      if (password === "") {
        $(".passwordError").text("Password is required.").show();
        isValid = false;
      } else if (!passwordPattern.test(password)) {
        $(".passwordError")
          .text("Password must be at least 8 chars long, contain 1 uppercase letter, 1 number, and 1 special character.")
          .show();
        isValid = false;
      } else {
        $(".passwordError").hide();
      }
      // If all validations pass, show the capture image section
      if (isValid) {
        $("#form-container").hide();
        $("#capture-image").show();
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            console.error("Error accessing camera: ", err);
        });
      }
    });
  
    // Hide error messages while typing (Fix: Use .siblings(".error"))
    $("#name, #email, #password").on("input", function () {
      $(this).siblings(".error").text("").hide();
    });
  
    // Toggle Password Visibility
    $("#toggleIcon").click(function () {
      let passwordInput = $("#password");
      let icon = $("#toggleIcon");
  
      if (passwordInput.attr("type") === "password") {
        passwordInput.attr("type", "text");
        icon.attr("xlink:href", "public/images/icons.svg#eyeline");
    } else {
        passwordInput.attr("type", "password");
        icon.attr("xlink:href", "public/images/icons.svg#eyeicon");
    }
    });
  
    // Initially Hide Unnecessary Sections
    $("#capture-image").hide();
    $("#chooseAccount").hide();
  
    // Handle Google Login Click
    $(".google-login").click(function (e) {
      $("#capture-image").hide();
      $("#form-container").hide();
      $("#chooseAccount").show();
    });
  });
  