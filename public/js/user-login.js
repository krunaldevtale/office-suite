$(document).ready(function () {
    // First form: Login/Continue Button
    $("#continue-button").click(function (event) {
        event.preventDefault(); // Prevent default action
        
        let nameOrEmail = $("#name").val().trim();
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let namePattern = /^[A-Za-z\s]+$/;
        let isValid = true;

        $(".nameError").text("").hide(); // Clear previous errors

        if (nameOrEmail === "") {
            $(".nameError").text("Please fill out this field").show();
            isValid = false;
        } else if (!namePattern.test(nameOrEmail) && !emailPattern.test(nameOrEmail)) {
            $(".nameError").text("Enter a valid name (letters only) or a valid email.").show();
            isValid = false;
        }

        // If validation passes, proceed to next page
        if (isValid) {
            $(".nameError").hide(); // Hide error before moving
            window.location.href = "image-capture.html";
        }
    });

    // Second form: Login Validation with Wrong Password Handling
    $("#login-button").click(function (event) {
        event.preventDefault(); // Prevent default action

        let password = $("#login-password").val();
        let correctPassword = "Test@123"; // Replace this with your actual correct password logic
        let isValid = true;

        $("#passwordError").text("").hide(); // Clear previous errors

        if (password === "") {
            $("#passwordError").text("Password is required.").removeClass("hidden").show();
            isValid = false;
        } else if (password !== correctPassword) {
            $("#passwordError").text("Wrong password.").removeClass("hidden").show();
            isValid = false;
        }

        // If the password is correct, redirect
        if (isValid) {
            window.location.href = "home-screen.html";
        }
    });

    // Second form: Registration Validation
    $("#registration-form").submit(function (event) {
        event.preventDefault(); // Prevent form submission until validation passes

        let nameOrEmail = $("#reg-name").val().trim();
        let password = $("#reg-password").val();
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let namePattern = /^[A-Za-z\s]+$/;
        let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        let isValid = true;

        $(".nameError, .passwordError").text("").hide(); // Clear errors from both fields

        // Name/Email Validation
        if (nameOrEmail === "") {
            $(".nameError").text("Please fill out this field").show();
            isValid = false;
        } else if (!namePattern.test(nameOrEmail) && !emailPattern.test(nameOrEmail)) {
            $(".nameError").text("Enter a valid name (letters only) or a valid email.").show();
            isValid = false;
        }

        // Password Validation
        if (password === "") {
            $(".passwordError").text("Password is required.").show();
            isValid = false;
        } else if (!passwordPattern.test(password)) {
            $(".passwordError").text("Password must be at least 8 chars long, contain 1 uppercase letter, 1 number, and 1 special character.").show();
            isValid = false;
        }

        // If all validations pass, redirect to home screen
        if (isValid) {
            $(".passwordError").hide(); // Hide error before moving
            window.location.href = "home-screen.html";
        }
    });

    // Function to toggle password visibility
    window.togglePasswordVisibility = function (passwordFieldId, iconId) {
        const passwordField = $("#" + passwordFieldId);
        const icon = $("#" + iconId);

        if (passwordField.attr("type") === "password") {
            passwordField.attr("type", "text");
            icon.removeClass("ri-eye-line").addClass("ri-eye-off-line");
        } else {
            passwordField.attr("type", "password");
            icon.removeClass("ri-eye-off-line").addClass("ri-eye-line");
        }
    };

    // Switching forms - Reset previous errors
    window.showRegistrationForm = function () {
        $(".nameError, .passwordError").text("").hide(); // Hide all errors
        $("#login-form").addClass("hidden");
        $("#registration-form").removeClass("hidden");
    };

    window.showForgotPassword = function () {
        $(".nameError, .passwordError").text("").hide(); // Hide all errors
        $("#registration-form").addClass("hidden");
        $("#forgotpassword").removeClass("hidden");
    };
});
