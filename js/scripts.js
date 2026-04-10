/**
 * Init typed.js
 */
var typed = new Typed("#typed", {
  strings: ["Developer", "Designer", "Freelancer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});


// Contact form validation
(() => {
  'use strict';

  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      alert("Message sent successfully! ✅");
    }

    form.classList.add('was-validated');
  }, false);
})();


//Form Success popup Message
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const popup = document.getElementById("successPopup");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        popup.style.display = "block";
        form.reset();

        setTimeout(() => {
          popup.style.display = "none";
        }, 3000);
      } else {
        alert("❌ Something went wrong!");
      }
    } catch (error) {
      alert("❌ Network error!");
    }
  });
});
