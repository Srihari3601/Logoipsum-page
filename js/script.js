$(document).ready(function () {
  $("#registration-form").on("submit", function (event) {
    event.preventDefault();

    // Clear previous errors
    $(".error").remove();

    let isValid = true;

    // First Name validation
    if ($("#first-name").val().trim() === "") {
      showError("#first-name", "First name is required");
      isValid = false;
    }

    // Last Name validation
    if ($("#last-name").val().trim() === "") {
      showError("#last-name", "Last name is required");
      isValid = false;
    }

    // Email validation
    let email = $("#email").val().trim();
    if (email === "") {
      showError("#email", "Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
      showError("#email", "Enter a valid email address");
      isValid = false;
    }

    // Password validation
    if ($("#password").val().trim() === "") {
      showError("#password", "Password is required");
      isValid = false;
    }

    // Phone number validation
    let phone = $("#phone-number").val().trim();
    if (phone !== "" && !/^\d{10}$/.test(phone)) {
      showError("#phone-number", "Enter a valid 10-digit phone number");
      isValid = false;
    }

    // Redirect to a new page if all validations pass
    if (isValid) {
      window.location.href = "dashboard.html"; // Redirect to the dashboard
    }
  });

  function showError(selector, message) {
    $(selector).after(`<div class="error" style="color: red; font-size: 12px;">${message}</div>`);
  }

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
