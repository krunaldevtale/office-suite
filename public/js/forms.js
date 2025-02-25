$(document).ready(function () {
    let isValid=false
  $("#signupForm").submit(function (e) {
    e.preventDefault(); // Prevent form submission

     isValid = true;

    //  Name Validation (Only letters and spaces allowed)
    let name = $("#name").val().trim();
     let namePattern = /^[A-Za-z\s]+$/;
     if (name === "" || !namePattern.test(name)) {
      $("#nameError").text("Please enter a valid name (letters only).").show();
      isValid = false;
     } else {
      $("#nameError").hide();
    }

    // Email Validation (Proper email format)
     let email = $("#email").val().trim();
     let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     if (email === "" || !emailPattern.test(email)) {
       $("#emailError").text("Please enter a valid email address.").show();
      isValid = false;
    } else {
      $("#emailError").hide();
     }

    // Password Validation (Min 8 chars, 1 uppercase, 1 number, 1 special char)
     let password = $("#password").val();
     let passwordPattern =
       /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
     if (password === "" || !passwordPattern.test(password)) {
      $("#passwordError")
        .text(
          "Password must be at least 8 chars long, contain 1 uppercase letter, 1 number, and 1 special character."
         )
        .show();
       isValid = false;
    } else {
       $("#passwordError").hide();
     }

    // If all validations pass, submit the form
    if (isValid) {
        
        $("#form-container").hide();
        $("#capture-image").show();
    }
  });

  // Hide error messages while typing
  $("#name, #email, #password").on("input", function () {
    $(this).next(".error").hide();
  });

  // Toggle Password Visibility
  $("#toggleIcon").click(function () {
    let passwordInput = $("#password");
    let icon = $("#toggleIcon");

    if (passwordInput.attr("type") === "password") {
      passwordInput.attr("type", "text");
      icon.removeClass("ri-eye-line").addClass("ri-eye-off-line");
    } else {
      passwordInput.attr("type", "password");
      icon.removeClass("ri-eye-off-line").addClass("ri-eye-line");
    }
  });

  $("#capture-image").hide();
  // choose account page
  $("#chooseAccount").hide();
  $(".google-login").click(function (e) {
   
    $("#capture-image").hide();
    $("#form-container").hide();
    $("#chooseAccount").show();
  });












  
});
