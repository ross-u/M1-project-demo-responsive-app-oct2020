"use strict";
<<<<<<< HEAD

class Validator {
  constructor() {
    // predetermined error messages
    this.invalidEmailError = "Intorduce un email válido";
    this.emailExistsError = "Este email ya está registrado";
    this.passwordError = "Introduce una contraseña de 6 o más carácteres";
    this.repeatPasswordError = "Los campos no coinciden";

    // object with errors that are shown to the user on error
    this.errors = {
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      repeatPasswordError: this.repeatPasswordError,
    };
  }

  // validate the email
  validateValidEmail = (email) => {
    // if the email is valid, remove that error message
    if (this.emailIsValid(email)) {
      delete this.errors.invalidEmailError;
    } else {
      // if the email is not valid, set the error message that will be shown
      this.errors.invalidEmailError = this.invalidEmailError;
    }
  };

  // helper functon of `validateEmail`
  emailIsValid = (email) => {
    // RegEx object - contains the regex pattern to test if the email is valid
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    // RegEx.test method is used to check if the string fulfills the rules of the pattern
    // it returns `ture` or `false`
    const isValid = emailRegEx.test(email);

    return isValid;
  };

  // validate that the email is unique (it isn't already taken)
  validateUniqueEmail = (newEmail) => {
    const usersDB = db.getAllUsers();

    let emailUnique = true;

    if (usersDB.length > 0) {
      usersDB.forEach((userObj) => {
        // if the email is already taken, change the value of the flag variable to `false`
        if (userObj.email === newEmail) {
          emailUnique = false;
        }
      });

      if (emailUnique) {
        // remove the error message
        delete this.errors.emailExistsError;
      } else {
        // if the email is not unique, set the error message
        this.errors.emailExistsError = this.emailExistsError;
      }
    }
  };

  // validate the password length
  validatePassword = (password) => {
    if (password.length > 5) {
      // remove the error message
      delete this.errors.passwordError;
    } else {
      // if the password has less than 5 characters, set the error message
      this.errors.passwordError = this.passwordError;
    }
  };

  // validate if the password and the repeat-password are the same
  validatePasswordRepeat = (password, passwordRepeat) => {
    if (password === passwordRepeat) {
      // if the 2 passwords match, remove the error
      delete this.errors.repeatPasswordError;
    } else {
      // if the passwords don't match, set the error message
      this.errors.repeatPasswordError = this.repeatPasswordError;
    }
  };

  // get the error object, for showing it to the user on the Signup page
  getErrors = () => {
    return this.errors;
  };

  // reset the errors, for the next signup
  resetValidator = () => {
    this.errors = {
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      repeatPasswordError: this.repeatPasswordError,
    };
  };
}

const validator = new Validator();
=======
>>>>>>> m1-prep-oct2020
