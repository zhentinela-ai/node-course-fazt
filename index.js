// let username = "zhent";
// let age = 24;
// let hasHobbie = false;
// let poinsts = [10, 20, 30];
// let user = {
//   name: "Rayn",
//   lastname: "Ray",
// };
// const PI = 3.1416;

// console.log(username, age, hasHobbie, PI, user, poinsts);

// const age = 10;

// if (age >= 18) {
//   console.log("You are an adult");
// } else if (age >= 13) {
//   console.log("You are an teenager");
// } else {
//   console.log("You are a child");
// }

// const { names } = require("./names");

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// function showUserInfo(username, userage) {}
const showUserInfo = (username, userage) =>
  `The username is ${username}, the user is ${userage} years old`;

console.log(showUserInfo("zhent", 25));
console.log(showUserInfo("maria", 40));
