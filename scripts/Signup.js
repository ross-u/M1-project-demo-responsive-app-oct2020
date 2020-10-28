"use strict";
<<<<<<< HEAD

class Signup {
  constructor() {
    this.nameInput = document.querySelector("#name");
    this.pokemonInput = document.querySelector("#pokemon");
    this.typeInput = document.querySelector("#type");
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.repeatPasswordInput = document.querySelector("#repeat-password");

    this.buttonInput = document.querySelector("#signup-button");
    this.errorsWrapper = document.querySelector(".message-container");
  }

  // Handle the "email" input changes
  handleEmailInput = (event) => {
    const email = event.target.value;

    // validate the text from the "email" input field
    validator.validateValidEmail(email);

    const errors = validator.getErrors();

    // if the email structure is valid (it has @, it has a domain like .com , .eu ...)
    if (!errors.invalidEmailError) {
      // check if the email is unique (it doesn't exists yet)
      validator.validateUniqueEmail(email);
    }

    this.setErrorMessages();

    // check if there are any errors, if there is are errors activate the Signup button ( disabled = false)
    this.checkButton();
  };

  // Handle the "password" input changes
  handlePasswordInput = (event) => {
    const password = event.target.value;
    const passwordRepeat = this.repeatPasswordInput.value;

    // validate the text from the "password" input field
    validator.validatePassword(password);
    validator.validatePasswordRepeat(password, passwordRepeat);

    this.setErrorMessages();

    // check if there are any errors. If there are no errors activate the Signup button ( disabled = false)
    this.checkButton();
  };

  // Handle the "repeat-password" input changes
  handleRepeatPasswordInput = (event) => {
    const passwordRepeat = event.target.value;
    const password = this.passwordInput.value;

    // validate the text from the "password" input field
    // validate the text from the "repeat-password" input field
    validator.validatePassword(password);
    validator.validatePasswordRepeat(password, passwordRepeat);

    this.setErrorMessages();

    // check if there are any errors. If there are no errors activate the Signup button ( disabled = false)
    this.checkButton();
  };

  // Handle the submission of the form data (on "submit")
  saveData = (event) => {
    // When the form "submit" event occurs we have to cancel it,
    // so that it doesn't reload the page
    event.preventDefault();

    // get the values from all of the inputs
    const name = this.nameInput.value;
    const pokemon = this.pokemonInput.value;
    const type = this.typeInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    const repeatPassword = this.repeatPasswordInput.value;

    // Create the new user instance
    const newUser = new User(name, pokemon, type, email, password);

    // save the new user in the database (fake database :D )
    db.saveNewUser(newUser);

    // empty the form
    this.nameInput.value = "";
    this.pokemonInput.value = "";
    this.typeInput.value = "";
    this.emailInput.value = "";
    this.passwordInput.value = "";
    this.repeatPasswordInput.value = "";

    this.showSuccessMessage();
    this.removeMessages();

    // reset the validator errors
    validator.resetValidator();
    // disable the Signup button
    this.buttonInput.disabled = true;
  };

  // Register the event listeners for all of the input fields
  addListeners = () => {
    // listen for the text updates on the input field
    this.emailInput.addEventListener("input", this.handleEmailInput);
    this.passwordInput.addEventListener("input", this.handlePasswordInput);
    this.repeatPasswordInput.addEventListener(
      "input",
      this.handleRepeatPasswordInput
    );

    this.buttonInput.addEventListener("click", this.saveData);
  };

  showSuccessMessage = () => {
    // empty the error messages wrapper, so that errors are not adding up
    this.errorsWrapper.innerHTML = "";

    const errorsObj = validator.getErrors();
    // convert the errors object into an array of strings
    const errorsStringsArr = Object.values(errorsObj);

    if (errorsStringsArr.length > 1) {
      return;
    }

    const successMessageP = document.createElement("p");
    successMessageP.innerHTML = "La cuenta ha sido creada con exito";

    this.errorsWrapper.appendChild(successMessageP);
  };

  // enable or disable the Sign Up button
  checkButton = () => {
    const errorsObj = validator.getErrors();
    const errorsArr = Object.values(errorsObj);

    if (errorsArr.length > 0) {
      this.buttonInput.disabled = true;
    } else {
      this.buttonInput.disabled = false;
    }
  };

  removeMessages = () => {
    setTimeout(() => {
      this.errorsWrapper.innerHTML = "";
    }, 2000);
  };

  setErrorMessages = () => {
    // empty the error messages wrapper, so that errors are not adding up

    this.errorsWrapper.innerHTML = "";

    const errorsObj = validator.getErrors();

    // convert the errors object into an array of strings
    const errorsStringsArr = Object.values(errorsObj);

    errorsStringsArr.forEach((errorStr) => {
      const errorMessageP = document.createElement("p");
      errorMessageP.innerHTML = errorStr;

      this.errorsWrapper.appendChild(errorMessageP);
    });
  };
}

// create a new instance of the Signup object
const signup = new Signup();

window.addEventListener("load", signup.addListeners);
=======
>>>>>>> m1-prep-oct2020
