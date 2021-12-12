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



function generatePassword() {
    passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
    if (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("You must choose between 8 and 128")
        generatePassword();
    } else {
        passwordNumerical = confirm("Will this contain numbers?");
        passwordSpecial = confirm("Will this contain special characters?");
        passwordUppercase = confirm("Will this contain Uppercase letters?");
        passwordLowercase = confirm("Will this contain Lowercase letters?");
    };

    // If user does not choose a critera
    if (!passwordSpecial && !passwordNumerical && !passwordUppercase && !passwordLowercase) {
        choices = alert("You must choose a criteria!");
    }
    // If user selects all 4 options
    else if (passwordSpecial && passwordNumerical && passwordUppercase && passwordLowercase) {

        choices = special.concat(numerical, lowercase, uppercase);
    }
    }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);