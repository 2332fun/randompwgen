//MY CODE:
//var/function generatePassword = ?
//if (pwLength > 128 || pwLength < 8) {
//  alert("Your password needs to be between 8 and 128 characters!");
//return false;
// }

//if (pwLower === true) {
//code to allow lowercase characters
//}

//if (pwLower === false) {
//code to not allow lowercase characters
//}


//PRE-MADE CODE:
// Get references to the #generate element; global variables
var generateBtn = document.querySelector("#generate");
var pwLowerArray = ["a", "b", "c", "d", ];
var pwUpperArray = ["A", "B", "C"];
var pwNumberArray = ["1", "2", "3"];
var pwSpecialArray = ["!", '"', "#", "$", "%", "%", "&", "'", "(", ")", "*", "+", ",", "?", "@", "^", "~"];




function userInput() {
  var pwLength = prompt("What's your password length?");
  //check for not a number
  if (isNaN(pwLength)) {
    alert("You cannot use non-numbers for the length");
    return;
  }
  if (pwLength > 128 || pwLength < 8) {
    alert("Your password needs to be between 8 and 128 characters");
    return;
  }
  //check for lowercase
  var pwLower = confirm("Do you want the password to use lowercase characters?");
  //check for uppercase
  var pwUpper = confirm("Do you want the password to use uppercase characters?");
  //check for numbers
  var pwNumeric = confirm("Do you want the password to use numbers?");
  //check for specialchar
  var pwSpecial = confirm("Do you want the password to use special characters?");
  if (pwLower === false && pwUpper === false && pwNumeric === false && pwSpecial === false) {
    alert("Your password cannot have no characters.");
    return;    
  }
  var objUserData = {
    pwLength: pwLength,
    pwLower: pwLower,
    pwUpper: pwUpper,
    pwNumeric: pwNumeric,
    pwSpecial: pwSpecial
  }

  return objUserData;
}



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

//console.dir();


//ASSIGNMENT CRITERIA:
//var passwordcriteria



   // At least 1 type should be true, when all answered, generate password
  //  Display password to alert

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





