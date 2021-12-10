// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  console.log("Button is clicked")
  var passwordLength = prompt("How long would you like your password?")
  var passwordLowercase = confirm("Would you like to include lowercase characters?")
  var passwordUppercase = confirm("Would you like to include uppercase characters?")
  var passwordNumerical = confirm("Would you like to include numerical characters?")
  var passwordSpecial = confirm("Would you like to include special characters?")

if (passwordLength < 8 || passwordLength > 128) {
  alert("Password must be between 8 and 128 charcters")
  return(" ")
}

if (passwordLowercase == true) {
  return("Password should include lowercase characters")
}

if (passwordUppercase == true) {
  return("Password should include uppercase characters")
}

if (passwordNumerical == true) {
  return("Password should include numerical characters")
}

if (passwordSpecial == true) {
  return("Password should include special characters")
}
}


  


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
