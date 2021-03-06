"use strict";

class Login {
  constructor() {
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");

    this.loginButton = document.querySelector("#login-button");
    this.messageContainer = document.querySelector(".message-container");
  }

  // handle the sending of the data (on "submit" event)
  submit = (event) => {
    event.preventDefault();

    const usersDB = db.getAllUsers();

    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    // Try to find the user that mathches the `email` and the `password`
    // `find` returns the first element which mathces the expression
    //  (first time `true` is returned in the loop)
    const user = usersDB.find((userObj) => {
      if (userObj.email === email && userObj.password === password) {
        return true;
      }
    });

    this.showMessage(user);
  };

  // show the error or success message
  showMessage = (user) => {
    // remove the previous message
    this.messageContainer.innerHTML = "";

    const message = document.createElement("p");

    if (user) {
      // if the log in was successful
      // add the class name to change the color and overwrite the previous style
      message.innerHTML = `Hello, ${user.email}`;
      message.classList.add("correct-message");
    } else {
      // if the log in was unsuccessful
      message.innerHTML = "Email and/or password are incorrect!";
    }

    this.messageContainer.appendChild(message);

    if (user) this.redirect();
  };

  // redirect the user to the dashboard page
  redirect = () => {
    setTimeout(() => location.assign("dashboard.html"), 2000);
  };
}

const login = new Login();

login.loginButton.addEventListener("click", login.submit);
