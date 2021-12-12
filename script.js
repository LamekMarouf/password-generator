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
    passwordLength = prompt("How long would you like your password to be?");
    if (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("You must choose between 8 and 128")
        generatePassword();
    } else {
      passwordLowercase = confirm("Would you like to include lowercase letters?");
      passwordUppercase = confirm("Would you like to include uppercase letters?")
      passwordNumerical = confirm("Would you like to include numbers?");
      passwordSpecial = confirm("Would you like to include special characters?");
    };

    // If user does not choose a critera
    if (!passwordSpecial && !passwordNumerical && !passwordUppercase && !passwordLowercase) {
        choices = alert("You must choose atleast one option");
    }
    // If user selects all 4 options
    else if (passwordSpecial && passwordNumerical && passwordUppercase && passwordLowercase) {

        choices = special.concat(numerical, lowercase, uppercase);
    }
    // If user selects 3 options
    else if (passwordSpecial && passwordNumerical && passwordUppercase) {
        choices = special.concat(numerical, uppercase);
    } else if (passwordSpecial && passwordNumerical && passwordLowercase) {
        choices = special.concat(numerical, lowercase);
    } else if (passwordSpecial && passwordLowercase && passwordUppercase) {
        choices = special.concat(lowercase, uppercase);
    } else if (passwordNumerical && passwordLowercase && passwordUppercase) {
        choices = numerical.concat(lowercase, uppercase);
    }
    // If User selects 2 options
      else if (passwordSpecial && passwordNumerical) {
        choices = special.concat(numerical);
    } else if (passwordSpecial && passwordLowercase) {
        choices = special.concat(lowercase);
    } else if (passwordSpecial && passwordUppercase) {
        choices = special.concat(uppercase);
    } else if (passwordLowercase && passwordNumerical) {
        choices = lowercase.concat(numerical);
    } else if (passwordLowercase && passwordUppercase) {
        choices = lowercase.concat(uppercase);
    } else if (passwordNumerical && passwordUppercase) {
        choices = numerical.concat(uppercase);
    }
    // If user selects 1 option
    else if (passwordSpecial) {
        choices = special;
    } else if (passwordNumerical) {
        choices = numerical;
    } else if (passwordLowercase) {
        choices = lowercase;
    } else if (passwordUppercase) {
        choices = space.concat(uppercase);
    };

    var password = [];

    for (var i = 0; i < passwordLength; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    var password = password.join("");
    UserInput(password);
    return password;
}

// Write password to the #password input
function UserInput(password) {
    document.getElementById("password").textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
    var password = generatePassword();
    document.getElementById("password").placeholder = password;
});