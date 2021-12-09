//GLOBAL VARIABLES
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//GLOBAL ARRAYS
var pwLowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var pwUpperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var pwNumberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var pwSpecialArray = ["!", '"', "#", "$", "%", "%", "&", "'", "(", ")", "*", "+", ",", "?", "@", "^", "~"];

//Function to Prompt the user for Password Parameters
function userInput() {
  var pwLength = prompt("What's your password length?");
  //check if the input for the pw length is not a number
  if (isNaN(pwLength)) {
    alert("You cannot use non-numbers for the length");
    return;
  }
  //check if the input for the pw length is between 8 and 128
  if (pwLength > 128 || pwLength < 8) {
    alert("Your password needs to be between 8 and 128 characters");
    return;
  }
  //check for lowercase boolean
  var pwLower = confirm("Do you want the password to use LOWERCASE characters?");
  //check for uppercase boolean
  var pwUpper = confirm("Do you want the password to use UPPERCASE characters?");
  //check for numbers boolean
  var pwNumeric = confirm("Do you want the password to use NUMBERS?");
  //check for special characters boolean
  var pwSpecial = confirm("Do you want the password to use SPECIAL characters?");
  //check if all booleans were made false
  if (pwLower === false && pwUpper === false && pwNumeric === false && pwSpecial === false) {
    alert("Your password cannot have no characters.");
    return;    
  }
  //put all boolean variables into one object variable
  var objUserData = {
    pwLength: pwLength,
    pwLower: pwLower,
    pwUpper: pwUpper,
    pwNumeric: pwNumeric,
    pwSpecial: pwSpecial
  }

  return objUserData;
}

//Function to loop choices/arrays
function generatePassword() {
  var userPWData = userInput();

  var pwResult = [];
  var userChoices = [];
  var mustUseOne = [];

  // if to check for lower array
  if(userPWData.pwLower) {
    userChoices = userChoices.concat(pwLowerArray);
    mustUseOne.push(randomizeArray(pwLowerArray));
  }

  // if to check for upper array
  if(userPWData.pwUpper) {
    userChoices = userChoices.concat(pwUpperArray);
    mustUseOne.push(randomizeArray(pwUpperArray));
  }

  // if to check for numeric array
  if(userPWData.pwNumeric) {
    userChoices = userChoices.concat(pwNumberArray);
    mustUseOne.push(randomizeArray(pwNumberArray));
  }

  // if to check for special array
  if(userPWData.pwSpecial) {
    userChoices = userChoices.concat(pwSpecialArray);
    mustUseOne.push(randomizeArray(pwSpecialArray));
  }

  //for loop for userChoices array and push into pwresult
  for (i = 0; i < userPWData.pwLength; i++) {
    var pwLengthrandomized = randomizeArray(userChoices);
    pwResult.push(pwLengthrandomized);
  }

  // for loop to go through mustUseOne array
  for (i = 0; i < mustUseOne.length; i++) {
    pwResult[i] = mustUseOne[i];
  }

  return pwResult.join('')

}

//Function to use Math to randomize the arrays
function randomizeArray(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomCharacter = array[randomIndex];
  return randomCharacter;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





