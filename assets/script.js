// Assignment code here

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


var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', '[', ']', '-', '_', '.'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E,', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//function to generate random characters from the above arrays
function randonGenerator(fourArrays) {
  var passwordArray = [];
  var randomIndex = Math.floor(Math.random() * fourArrays.length);
  var randomCharacter = fourArrays[randomIndex];
  console.log(randomCharacter);
  return randomCharacter;
}

console.log(String.fromCharCode(97));

//function to determine the length of the password

function passwordRules() {
  var passwordLength = window.prompt("Please choose a desired number of charcters from 8 to 128.");
  var pwdLength = parseInt(passwordLength);
  if (pwdLength >= 8 && pwdLength <= 128) {
    console.log(pwdLength);
    return pwdLength;
  }
  else {
    window.alert("Invalid character length, try again.");
    console.log(pwdLength);
    return -1;
  }
}

function generatePassword() {
  randonGenerator(upperCasedCharacters);
  randonGenerator(lowerCasedCharacters);
  randonGenerator(specialCharacters);
  randonGenerator(numericCharacters);
  finalStep("yes", "no");
  //length is asekd
  var upperChoice;
  var lowerChoice;
  var specialChoice;
  var numberChoice;
  var desireLength = passwordRules();

  upperChoice = window.confirm("Would you like ot use uppercase characters?");
  lowerChoice = window.confirm("Would you like to use lowercase characters? ");
  specialChoice = window.confirm("Would you like to inculde special characters?");
  numberChoice = window.confirm("Would you like to use numeric characters?");

  //decision on what to include in password

  if (desireLength > 0 && (upperChoice || lowerChoice || specialChoice || numberChoice)) {
    console.log("partytime");
    let tempArray = [];
    
    if(upperChoice) {
      tempArray = tempArray.concat(upperCasedCharacters);
      console.log(lowerCasedCharacters);
      console.log(tempArray);
    }

    if (lowerChoice) {
      tempArray = tempArray.concat(lowerCasedCharacters);
      console.log(tempArray);
    }

    if (specialChoice) {
      tempArray = tempArray.concat(numericCharacters);
      console.log(tempArray);
    }

    if (numberChoice) {
      tempArray = tempArray.concat(numericCharacters);
      console.log(tempArray);
    }

    let key = "";
    for (var i = 0; i < desireLength; i++) {
      key = finalStep(key, randonGenerator(tempArray));
    }
    console.log(key);
    return key;
  }

  else {
    return "";
  }
}

parseInt.passwordLength;

function finalStep(word, letter) {
  let temp = word + letter;
  console.log(temp);
  return temp;
}