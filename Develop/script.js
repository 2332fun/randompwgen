//GLOBAL VARIABLES
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//GLOBAL ARRAYS
var pwLowerArray = ["a", "b", "c", "d", ];
var pwUpperArray = ["A", "B", "C"];
var pwNumberArray = ["1", "2", "3"];
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

  // if to check for lower

  if(userPWData.pwLower) {
    userChoices = userChoices.concat(pwLowerArray);
    mustUseOne.push(randomizeArray(pwLowerArray));
  }

  // complete for other options

  // for loop to go through userChoices array 
  //push those into pwresult

  // for loop to go through mustUseOne array
  //result[i] = mustUseOne[i]

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


//ASSIGNMENT CRITERIA:
//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page





