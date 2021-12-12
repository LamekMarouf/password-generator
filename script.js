// // Assignment Code

//   // 1. When button is clicked, prompt how long should password be. Between 8 and 128 characters.
//   // 2. When length is confirmed, confirm prompt if the user would like: 
//     //  a) Lowercase Characters
//     //  b) Uppercase Characters
//     //  c) Numerical Characters
//     //  d) Special Characters
//   // 3. Validate that atleast one criteria is selected.
//   // 4. Generate password
//   // 5. Display password generated in box.

// Start working code
var passwordLength;
var passwordNumerical;
var passwordSpecial;
var passwordUppercase;
var passwordLowercase;

special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
numerical = [1, 2, 3, 4, 5, 6, 7, 8, 9];
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];
var choices;
var toUpper = function (x) {
    return x.toUpperCase();
};
uppercase = lowercase.map(toUpper);

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);