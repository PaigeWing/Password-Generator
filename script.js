// Assignment Code
var generateBtn = document.querySelector("#generate");


//Variables Data
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '?'];


//Button Prompts
var newPassword = " ";

function generatePassword() {
  var possibleCharacters = "";
  var characterAmount = prompt("How many characters would you like your password to contain?");

  if (characterAmount === "" || characterAmount < 8) {
    console.log("Password must contain at least 8 characters.");
    alert("Password must contain at least 8 characters.");
    return;
  } else if (characterAmount > 128) {
    console.log("Password must be less than 129 characters.");
    alert("Password must be less than 129 characters.");
    return;
  }
   var upperResponse = confirm("Click OK to allow uppercase letters?");
   var lowerResponse = confirm("Click OK to allow lowercase letters?");
   var numberResponse = confirm("Click OK to allow numbers?");
   var symbolResponse = confirm("Click OK to allow special characters?");
    console.log(possibleCharacters);

    if (!upperResponse && !lowerResponse  && !numberResponse && !symbolResponse) {
      alert("At least one character type must be selected.");
      return generatePassword()
  }
  if (upperResponse) {
    possibleCharacters += uppercaseLetters.join("");
  }

  if (lowerResponse) {
    possibleCharacters += lowercaseLetters.join("");
  }

  if (numberResponse) {
    possibleCharacters += numbers.join("");
  }

  if (symbolResponse) {
    possibleCharacters += symbols.join("");
  }


  for (let i = 0; i < characterAmount; i++) {
    let randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    newPassword += possibleCharacters[randomIndex];
  }
  writePassword(newPassword);
}
    
 

  //Creating Password
function writePassword(password) {
var passwordText = document.querySelector("#password")
passwordText.value = password;

}
  
generateBtn.addEventListener("click", generatePassword);



  