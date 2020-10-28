"use strict";

class Database {
  // get the users array
  getAllUsers = () => {
    // get the string from the localStorage
    const usersStr = localStorage.getItem("users");
    // convert the string to an array
    const usersArr = JSON.parse(usersStr);

    // if there is still no users, return an empty array
    if (usersArr === null) {
      return [];
    } else {
      return usersArr;
    }
  };

  saveNewUser = (newUser) => {
    // get the array of users saved in the localStorage
    const usersArr = this.getAllUsers();

    // update the array of users, by adding the new user to it
    const updatedUsersArr = [...usersArr, newUser];

    // convert the updated array to a string
    const updatedUsersStr = JSON.stringify(updatedUsersArr);

    // save back the updated users to the localStorage
    localStorage.setItem("users", updatedUsersStr);
  };
}

const db = new Database();

console.log("db", db);
