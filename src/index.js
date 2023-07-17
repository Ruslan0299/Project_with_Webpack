import "./style.scss";
import "./media_mobile.scss";
import "./media_tablet.scss";
import validator from "validator";
import Swiper from "swiper/bundle";
//  import "/node_modules/swiper/swiper.scss";
//  import "./manual-swiper.scss";

const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const subjectInput = document.getElementById("subject");
const aboutInput = document.getElementById("about");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValid = validateName();
  const surnameValid = validateSurname();
  const emailValid = validateEmail();
  const phoneValid = validatePhone();
  const subjectValid = validateSubject();
  const aboutValid = validateAbout();

  if (
    nameValid &&
    surnameValid &&
    emailValid &&
    phoneValid &&
    subjectValid &&
    aboutValid
  ) {
    form.submit();
  }
});

nameInput.addEventListener("blur", validateName);
nameInput.addEventListener("input", () => {
  clearError(nameInput);
});

surnameInput.addEventListener("blur", validateSurname);
surnameInput.addEventListener("input", () => {
  clearError(surnameInput);
});

emailInput.addEventListener("blur", validateEmail);
emailInput.addEventListener("input", () => {
  clearError(emailInput);
});

phoneInput.addEventListener("blur", validatePhone);
phoneInput.addEventListener("input", () => {
  clearError(phoneInput);
});

subjectInput.addEventListener("blur", validateSubject);
subjectInput.addEventListener("input", () => {
  clearError(subjectInput);
});

aboutInput.addEventListener("blur", validateAbout);
aboutInput.addEventListener("input", () => {
  clearError(aboutInput);
});

function validateName() {
  const name = nameInput.value.trim();

  if (!validator.isAlpha(name)) {
    displayError(nameInput, "Invalid name");
    return false;
  } else {
    clearError(nameInput);
    return true;
  }
}

function validateSurname() {
  const surname = surnameInput.value.trim();

  if (!validator.isAlpha(surname)) {
    displayError(surnameInput, "Invalid surname");
    return false;
  } else {
    clearError(surnameInput);
    return true;
  }
}

function validateEmail() {
  const email = emailInput.value.trim();

  if (!validator.isEmail(email)) {
    displayError(emailInput, "Invalid email");
    return false;
  } else {
    clearError(emailInput);
    return true;
  }
}

function validatePhone() {
  const phone = phoneInput.value.trim();

  if (!validator.isMobilePhone(phone)) {
    displayError(phoneInput, "Invalid phone number");
    return false;
  } else {
    clearError(phoneInput);
    return true;
  }
}

function validateSubject() {
  const subject = subjectInput.value.trim();

  if (validator.isEmpty(subject)) {
    displayError(subjectInput, "Subject is required");
    return false;
  } else {
    clearError(subjectInput);
    return true;
  }
}

function validateAbout() {
  const about = aboutInput.value.trim();

  if (!validator.isLength(about, { min: 10 })) {
    displayError(aboutInput, "Please provide more information.");
    return false;
  } else {
    clearError(aboutInput);
    return true;
  }
}

function displayError(input, message) {
  const errorElement = document.createElement("div");
  errorElement.classList.add("error-message");
  errorElement.innerText = message;

  const inputContainer = input.parentNode;
  inputContainer.appendChild(errorElement);
}

function clearError(input) {
  const errorElement = input.parentNode.querySelector(".error-message");

  if (errorElement) {
    errorElement.remove();
  }
}

new Swiper(".first-swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});
new Swiper(".card-swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});
new Swiper(".img-swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});
new Swiper(".elipse-swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});
