var charLength = 8;
var charArr = [];

var specCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '?', '/', ';', ':'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("hey! you clicked the button");

// 1.Prompt user for the password criteria
//  a. password length 8-128
//  b. include lowercase, uppercase, numeric and/or special char
// 2.Validate the input
// 3. Gerate password based on criteria


// 4. display the generated password on the page
  return "genterated password will go here";
}
function getPrompts(){
  charLength = parseInt(prompt("How many characters would you like to use? Between 8 and 128."))

  if(isNaN(charLength) || charLength < 8 || charLength > 128)
    alert("Character length must be between 8 and 128. Please enter again");
    return false;
}
  if (confirm("would you like lowercase letters?")) {
    choiceArr = chouceArr.concat(lowerCaseArr);
  }
  if (confirm("would you like uppercase letters?")) {
    choiceArr = chouceArr.concat(upperCaseArr);
  }
  if (confirm("would you like numeric characters?")) {
    choiceArr = chouceArr.concat(numArr);
  }
  if (confirm("would you like special characters?")) {
    choiceArr = chouceArr.concat(lowerCaseArr);
  }
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
