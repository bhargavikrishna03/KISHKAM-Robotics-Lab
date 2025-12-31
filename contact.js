const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");


const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");


form.addEventListener("submit", function(e){
  e.preventDefault();

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let valid = true;

  if (nameInput.ariaValueMax.trim() === "") {
    nameError.textContent = "Name is required";
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    valid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required";
    valid = false;
  }

  if (valid) {
    const submission = JSON.parse(localStorage.getItem("contactSubmission") || "[]");
    submission.push({
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
      submittedAt:new Date().toISOString()
    });

    localStorage.setItem("contactSubmissions", JSON.stringify(submission));

    successMessage.textContent = "Your message has been sent successfully!";
    successMessage.style.display = "block";

    form.reset();

  }
})

