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










  var specialChars = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "<", ">"];
  var numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var userCriteria = []

// Assignment code here

function generatePassword() {
  console.log("button clicked");

  // PROMPT USER FOR PASS CRITERIA
  // 1) Ask user for character length
  var userCharsLength = parseInt(window.prompt ("How many characters would you like your password to be? (Must be between 8 and 128 characters long"));

  // Validate character length is between 8-128
    while (userCharsLength <= 7 || userCharsLength >= 129 || userCharsLength === "" || isNaN (userCharsLength)) {
      window.alert("Please enter a valid number between 8 and 128");

      var userCharsLength = window.prompt ("How many characters would you like your password to be? (Must be between 8 and 128 characters long");
    }
    // log character length
    console.log(userCharsLength)



  //  2) Ask user for special characters
  var userSpecialChars = window.confirm ("Click OK to confirm including Special characters.");
  console.log(userSpecialChars);
 
  // 3) Ask user for numeric characters
  var userNumericChars = window.confirm ("Click OK to confirm including Numeric characters.");
  console.log(userNumericChars);
  
  // 4) Ask user for lowercase characters
  var userLowercaseChars = window.confirm ("Click OK to confirm including Lowercase characters.");
  console.log(userLowercaseChars);
  
  // 5) Ask user for uppercase characters
  var userUppercaseChars = window.confirm ("Click OK to confirm including Uppercase characters.");
  console.log(userUppercaseChars);
 


  // Validate user inputs
  
  if (userSpecialChars === true) {
    userCriteria.push(specialChars);
  }
  
  if (userNumericChars === true) {
    userCriteria.push(numericChars)
  };

  if (userNumericChars === true) {
    userCriteria.push(lowercaseChars)
  };

  if (userNumericChars === true) {
    userCriteria.push(uppercaseChars)
  };

  console.log(userCriteria);
  
  
  for (var i = 0; i < userCharsLength; i++) {
    var index = Math.floor(userCriteria.length * Math.random());  
  }



  // generated password output
  // var generatedPass = function(min, max) {
  // var randomPassword = Math.floor(Math.random() * (max - min) + min);
  //   }



  return password;
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
