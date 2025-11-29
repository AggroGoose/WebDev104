const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");
const mailInput = document.getElementById("mail");
const mailError = document.getElementById("mailError");
const messageInput = document.getElementById("message");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  nameError.textContent = "";
  mailError.textContent = "";
  messageError.textContent = "";

  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else if (nameInput.value.trim().length < 2) {
    nameError.textContent = "Name must be at least 2 characters.";
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (mailInput.value.trim() === "") {
    mailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(mailInput.value.trim())) {
    mailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required.";
    isValid = false;
  } else if (messageInput.value.trim().length < 10) {
    messageError.textContent = "Name must be at least 10 characters.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully! (Data not sent to a server)");
    form.reset();
  }
});
