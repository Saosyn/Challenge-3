var charLength = 16;
var charArr = [];

var specCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '?', '/', ';', ':'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
  
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < charLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;

}
function getPrompts(){
  choiceArr = [];

  charLength = parseInt(prompt("How many characters would you like to use? Between 8 and 128."));

  if(isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("Character length must be a number between 8 and 128. Please enter again");
    return false;
  }
  if (confirm("would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("would you like numeric characters in your password?")) {
    choiceArr = choiceArr.concat(numArr);
  }
  if (confirm("would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specCharArr);
  }
  return true;
}

  
// Write password to the #password input



