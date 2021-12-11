// Assignment Code
var generateBtn = document.querySelector("#generate");



  // 1. When button is clicked, prompt how long should password be. Between 8 and 128 characters.
  // 2. When length is confirmed, confirm prompt if the user would like: 
    //  a) Lowercase Characters
    //  b) Uppercase Characters
    //  c) Numerical Characters
    //  d) Special Characters
  // 3. Validate that atleast one criteria is selected.
  // 4. Generate password
  // 5. Display password generated in box.


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
