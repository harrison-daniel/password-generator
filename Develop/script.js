// Assignment code here


// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

// end starter code
//------------------------------------------

  var specialChars = " `~!@#$%^&*()_-+=";
  var numericChars = "0123456789";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHUJKLMNOPQRSTUVWXYZ";


// Assignment code here

function generatePassword() {
  console.log("button clicked");
  
  // prompt user for password criteria

  // password length
  var passwordLength = window.prompt ("How many characters would you like your password to be?");
  if (passwordLength < 8) {
    alert ("Please enter a number between 8 and 128");
    return;
  }
  if (passwordLength > 128); {
    alert ("Please enter a number between 8 and 128");
    return;
  }
  // confirm special characters

  // confirm numeric characters

  // comfirm lowercase characters

  // confirm uppercase characters
      
    
// validate input


// generated password output


  return "generated password will go here"
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
