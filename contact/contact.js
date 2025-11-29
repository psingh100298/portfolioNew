// Initialize EmailJS
(function () {
  emailjs.init("Snf-NFdmTFYL_xAKt");
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      contact: document.getElementById("contact").value,
      email: document.getElementById("email").value,
      message: document.getElementById("textarea").value
    };

    // Send email using EmailJS
    emailjs
      .send("service_l92p3jj", "template_9vs41b6", formData)
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((err) => {
        alert("Something went wrong!");
        console.error(err);
      });
  });
});
