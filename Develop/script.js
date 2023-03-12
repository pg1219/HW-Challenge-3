// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
  var lowerCase = "abcdefghijklmnopqrstuvwxyz" . split("");
  var number = "0123456789" .split("");
  var specialCharacter = "!@#$%^&" .split("");
  var lengthpw;

  var index = Math.floor(Math.random() * upperCase.length)
 

function generatePassword(){
  lengthpw = prompt("How many characters would you like your password? Please enter between 8 and 128 characters.");

  if (!lengthpw) {lengthpw = prompt("Please try again");}

  else if (lengthpw < 8 || lengthpw > 128){lengthpw = prompt("Try again. Password must be between 8 and 128 characters.")}

  else {
    upperCase = confirm("Include upper case characters in your password?");
    lowerCase = confirm("Include lower case characters in your password?");
    number = confirm("Include numbers in your password?");
    specialCharacter = confirm("Include special characters in your password?");
  }

  var index = Math.floor(Math.random() * upperCase.length)
  


  if (upperCase && lowerCase && number && specialCharacter) {
    selection = concat
  }
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
