"use strict";

// Navbar opacity-50 on scroll
// YT Tutorial: https://youtu.be/z70GTU3p72I
const navbarEl = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navbarEl.classList.add("navbar-scroll");
  } else if (window.scrollY < 56) {
    navbarEl.classList.remove("navbar-scroll");
  }
});

// --------------------------------------------------------

// FOOTER: Modal confirm pop-up on submit (validated)
// Declaring variables
const submitBtn = document.getElementById("footer-btn");
const firstName = document.getElementById("fname");
const emailAdd = document.getElementById("email-address");
const successModal = new bootstrap.Modal(
  document.getElementById("confirm-submit")
);
const newsletterForm = document.getElementById("newsletter-form");

// Adding event listener to form
newsletterForm.addEventListener("submit", function (e) {
  // Validate form before showing modal
  if (firstName.value !== "" && emailAdd.value !== "") {
    successModal.show();
    firstName.value = "";
    emailAdd.value = "";
  } else {
    return;
  }
  // Prevent page reload on submit
  e.preventDefault();
});
