// Assignment Code
var generateBtn = document.querySelector("#generate");

var allLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var allUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var allNumbers = ['0','1','2','3','4','5','6','7','8','9'];
var allSpecials = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',]; //remember to escape certain characters

function generatePassword() { //beginning of the generate password function
  var userLength = window.prompt('How many characters do you want your password to be? NOTE: Must be between 8-128 characters.'); //storing what use inputted
  userLength = parseInt(userLength); //turns user input to an integer

if (isNaN(userLength) || userLength < 8 || userLength > 128) {
  window.confirm("Oops. Try again. Password must be between 8 - 123 characters");
  return generatePassword()
}
var askLowerCase = window.confirm('Would you like lowercase characters?');  //ask for lowercase
var askUpperCase = window.confirm('Would you like uppercase characters?'); //ask for uppercase
var askNumbers = window.confirm('Would you like to include numbers?'); //ask for numbers
var askSpecials = window.confirm('Would you like special characters?'); //ask for special characters

if (!askLowerCase && !askUpperCase && !askNumbers && !askSpecials) {
  window.confirm("Oops. Try Again. Must choose at least one character type to generate a password.");
  return generatePassword();
}
var allPossibilities= [];
var finalPassword= [];

  if (askLowerCase) {
  allPossibilities = allPossibilities.concat(allLowerCase);
  console.log(allPossibilities);
} 
  if (askUpperCase){
  allPossibilities = allPossibilities.concat(allUpperCase);
  console.log(allPossibilities);
  }
  if (askNumbers) {
  allPossibilities = allPossibilities.concat(allNumbers);
  console.log(allPossibilities);
  }
  if (askSpecials) {
  allPossibilities = allPossibilities.concat(allSpecials);
  console.log(allPossibilities);
  }

for (i = 0; i < userLength; i++) {
  finalPassword += allPossibilities[Math.floor(Math.random()*allPossibilities.length)];
  console.log(finalPassword);
}

window.alert("This is you new password: " + finalPassword) //shows an alert, how about for showing on page?

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

