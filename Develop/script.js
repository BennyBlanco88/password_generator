// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



function generatePassword(length, lowercase, uppercase,symbols,numeric) {
   

  var length =(prompt("Enter the length of password (between 8 and 128):"));
  if (length < 8 || length > 128) {
    alert("Invalid length! Password length should be between 8 and 128 characters.")
    return;
  }
  var choiceArr = [];
  
  var lowercase = confirm ("Should the password include lowercase letters?");


  if (confirm){
    choiceArr = choiceArr.concat(lowercaseChar);
  }

  var uppercase = confirm ("Should the password include uppercase letters?");


  if (confirm){
    choiceArr = choiceArr.concat(uppercaseChar);
  }

  var symbols = confirm (" Should the password include symbols?");

    if (confirm){
    choiceArr = choiceArr.concat(symbolsChar);
  }

  var numeric = confirm ("Should the password inculde numerics?")

    if (confirm){
      choiceArr = choiceArr.concat(numericChar)
    }

  var lowercaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  var uppercaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  var symbolsChar = ['!','@','#','$','%','^','&','*','=','+','<','>','?'];

  var numericChar = ['0','1','2','3','4','5','6','7','8','9'];




 
  var password = '';
 
  while (password.length < length) {
    if (lowercase && password.length < length)
    password += lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)];
  
    if (uppercase && password.length < length) 
    password += uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)];
  
    if (symbols && password.length < length) 
    password += symbolsChar[Math.floor(Math.random() * symbolsChar.length)];

    if(numeric && password.length < length)
    password += numericChar[Math.floor(Math.random() * numericChar.length)];
  
    
  }
  
  
   return password;
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
    
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



