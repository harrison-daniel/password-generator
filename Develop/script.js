
// Assignment code here

function generatePassword() {
  console.log("button clicked");

  // character arrays and empty array for user selected criteria
  var specialChars = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "<", ">"];
  var numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var userCriteria = []
  
  // PROMPT USER FOR PASS CRITERIA
  // 1) Ask user for character length -- Translate into number format
  var userCharsLength = parseInt(window.prompt ("How many characters would you like your password to be?  (Must be between 8 and 128 characters long)"));

  // Validate character length is between 8-128 and display prompt until correct
    while (userCharsLength <= 7 || userCharsLength >= 129 || userCharsLength === "" || isNaN (userCharsLength)) {
      window.alert("Please enter a valid number between 8 and 128");
     
      var userCharsLength = window.prompt ("How many characters would you like your password to be?  (Must be between 8 and 128 characters long)");
      }
      
    // log character length
    console.log(userCharsLength)


  //  2) Ask user for special characters
  var userSpecialChars = window.confirm ("Click OK to confirm the use of Special characters.");
  console.log(userSpecialChars);
 
  if (userSpecialChars) {
    spec = true;
  }else{
    spec = false;
  };

  // 3) Ask user for numeric characters
  var userNumericChars = window.confirm ("Click OK to confirm the use of Numeric characters.");
  console.log(userNumericChars);
  
  if (userNumericChars) {
    num = true;
  }else{
    num = false;
  };

  // 4) Ask user for lowercase characters
  var userLowercaseChars = window.confirm ("Click OK to confirm the use of Lowercase characters.");
  console.log(userLowercaseChars);
  
  if (userLowercaseChars) {
    lower = true;
  }else{
    lower = false;
  };

  // 5) Ask user for uppercase characters
  var userUppercaseChars = window.confirm ("Click OK to confirm the use of Uppercase characters.");
  console.log(userUppercaseChars);

 if (userUppercaseChars) {
    upper = true;
  }else{
    upper = false;
  }


  // Validate user inputs
  
  if (spec) {
    userCriteria.push(specialChars);
  };
  
  if (num) {
    userCriteria.push(numericChars)
  };

  if (lower) {
    userCriteria.push(lowercaseChars)
  };

  if (upper) {
    userCriteria.push(uppercaseChars)
  };

  // Alert if no criteria options were selected and restart prompts
  if (!spec && !num && !lower && !upper) {
    window.alert ("Please select atleast one password criteria");
    generatePassword();
  };

  console.log(userCriteria);
  
  // create random password based on user selected length and arrays 
  var password = ""
  for (var i = 0; i < userCharsLength; i++) {
    var index = Math.floor(userCriteria.length * Math.random());  
    var charSet = userCriteria[index];
    var charSetIndex = Math.floor(charSet.length * Math.random());
    var char = charSet[charSetIndex];
    password += char;
  };

  console.log(password);

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
