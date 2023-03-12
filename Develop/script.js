// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var number = number = ['0', '1','2', '3', '4', '5', '6', '7', '8','9'];
  var specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+'];
  var lengthpw;
  var selectedChar = [];
  var password = "";


function generatePassword(){
  lengthpw = prompt("How many characters would you like your password? Please enter between 8 and 128 characters.");{console.log(lengthpw)}

  if (!lengthpw) {lengthpw = prompt("Please try again");}

  else if (lengthpw < 8 || lengthpw > 128){lengthpw = prompt("Try again. Password must be between 8 and 128 characters.")}

  else {
    upperCaseConfirm = confirm("Include upper case characters in your password?")
    {console.log(upperCaseConfirm)}
    lowerCaseConfirm = confirm("Include lower case characters in your password?");
    {console.log(lowerCaseConfirm)}
    numberConfirm = confirm("Include numbers in your password?");
    {console.log(numberConfirm)}
    specialCharacterConfirm = confirm("Include special characters in your password?");{console.log(specialCharacterConfirm)}
  };

  if (upperCaseConfirm && lowerCaseConfirm && numberConfirm && specialCharacterConfirm) {
    selectedChar = selectedChar.concat(upperCase, lowerCase, number, specialCharacter);
  }

  else if (upperCaseConfirm && lowerCaseConfirm && numberConfirm) {
    selectedChar = selectedChar.concat(upperCase, lowerCase, number);
  }
  else if (upperCaseConfirm && lowerCaseConfirm && specialCharacter){
    selectedChar = selectedChar.concat(upperCase, lowerCase, specialCharacter);
  }
  else if (lowerCaseConfirm && number && specialCharacter){
    selectedChar = selectedChar.concat(lowerCase, number, specialCharacter);
  }
  else if (upperCaseConfirm && number && specialCharacter){
    selectedChar = selectedChar.concat(upperCase, number, specialCharacter);
  }
  else if (upperCaseConfirm && lowerCaseConfirm ){
    selectedChar = selectedChar.concat(upperCase, lowerCase);
  }
  else if (upperCaseConfirm && numberConfirm){
    selectedChar = selectedChar.concat(upperCase, number);
  }
  else if (upperCaseConfirm && specialCharacter){
    selectedChar = selectedChar.concat(upperCase, specialCharacter);
  }
  else if (lowerCaseConfirm && number){
    selectedChar = selectedChar.concat(lowerCase, number);
  }
  else if (lowerCaseConfirm && specialCharacter){
    selectedChar = selectedChar.concat(lowerCase, specialCharacter);
  }
  else if (number && specialCharacter){
    selectedChar = selectedChar.concat(number, specialCharacter);
  }
  else if (upperCaseConfirm) {
    selectedChar = selectedChar.concat(upperCaseConfirm);
  }
  else if (lowerCaseConfirm) {
    selectedChar = selectedChar.concat(lowerCaseConfirm);
  }
  else if (numberConfirm) {
    selectedChar = selectedChar.concat(number);
  }
  else if (specialCharacterConfirm) {
    selectedChar = selectedChar.concat(specialCharacter)
  }
  
  console.log(selectedChar)

  var password = "";

  // if (upperCaseConfirm && lowerCaseConfirm && numberConfirm && specialCharacterConfirm) {
    for (var i = 0; i < lengthpw; i++) { 
    var index = (Math.floor(Math.random() * selectedChar.length));
    password = password + selectedChar[index]
  }
  // else if (upperCase && lowerCaseConfirm && numberConfirm)
  // return password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);