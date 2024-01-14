// Assignment Code
var generateBtn = document.querySelector("#generate");

var allLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var allUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var allNumbers = ['0','1','2','3','4','5','6','7','8','9'];
var allSpecials = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];

function randomSelect(array) { //function that returns a random element in an array
  var randomIndex = Math.floor(Math.random()*array.length);
  return array[randomIndex];
}
// console.log(randomSelect(array)); try with any array to make sure it's working

function generatePassword() { //beginning of the generate password function
  var userLength = window.prompt('How many characters do you want your password to be? NOTE: Must be between 8-128 characters.'); //storing what use inputted
  userLength = parseInt(userLength); //turns user input to an integer

if (isNaN(userLength) || userLength < 8 || userLength > 128) {
  window.confirm("Oops. Try again. Password must be between 8 - 123 characters");
  return generatePassword()
}
var askLowerCase = window.confirm('Would you like lowercase characters?'); 
var askUpperCase = window.confirm('Would you like uppercase characters?');
var askNumbers = window.confirm('Would you like to include numbers?');
var askSpecials = window.confirm('Would you like special characters?');

if (!askLowerCase && !askUpperCase && !askNumbers && !askSpecials) {
  window.confirm("Oops. Try Again. Must choose at least one character type to generate a password.");
  return generatePassword();
}
var allPossibilities= [];
var finalPassword= [];

  if (askLowerCase) {
  allPossibilities = allPossibilities.concat(allLowerCase);
  var userLowerCase = randomSelect(allLowerCase);
  finalPassword.push(userLowerCase); 
  console.log(allPossibilities);
} 
  if (askUpperCase){
  allPossibilities = allPossibilities.concat(allUpperCase);
  var userUpperCase = randomSelect(allUpperCase);
  finalPassword.push(userUpperCase);
  console.log(allPossibilities);
  }
  if (askNumbers) {
  allPossibilities = allPossibilities.concat(allNumbers);
  var userNumbers = randomSelect(allNumbers);
  finalPassword.push(userNumbers);
  console.log(allPossibilities);
  }
  if (askSpecials) {
  allPossibilities = allPossibilities.concat(allSpecials);
  var userSpecials = randomSelect(allSpecials);
  finalPassword.push(userSpecials);
  console.log(finalPassword);
  }
  // console.log(allPossibilities.sliced(0, userLength))
// console.log(randomSelect(allPossibilities));
// for (i = 0; i < userLength; i++) {
//   // var all possibilities
//   // console.log(finalPassword);
//     // console.log(finalPassword.join(''));
// }



// return finalPassword.join(''); //returns an array as a string

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

