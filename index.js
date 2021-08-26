console.log("Abhishek Bhatkar");

var readLineSync = require('readline-sync');

var userName = readLineSync.question("What is your name?");
var welcomeMsg = "Welcome " + userName ;
console.log("Welcome "+ userName);