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

  var indexu = upperCase[Math.floor(Math.random() * upperCase.length)];
  var indexl = lowerCase[Math.floor(Math.random() * lowerCase.length)];
  var indexn = number[Math.floor(Math.random() * number.length)];
  var indexs = specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
 
  {console.log(indexu, indexl, indexn, indexs)};

function generatePassword(){
  lengthpw = prompt("How many characters would you like your password? Please enter between 8 and 128 characters.");

  if (!lengthpw) {lengthpw = prompt("Please try again");}

  else if (lengthpw < 8 || lengthpw > 128){lengthpw = prompt("Try again. Password must be between 8 and 128 characters.")}

  else {
    upperCaseConfirm = confirm("Include upper case characters in your password?");
    lowerCaseConfirm = confirm("Include lower case characters in your password?");
    numberConfirm = confirm("Include numbers in your password?");
    specialCharacterConfirm = confirm("Include special characters in your password?");
  }

  if (upperCaseConfirm && lowerCaseConfirm && numberConfirm && specialCharacterConfirm) {
    for (var i = 0; i < lengthpw; i++) { 
      password = password.toString()+indexu.toString()+indexl.toString()+indexn.toString()+indexs.toString();
    }
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);