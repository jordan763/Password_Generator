// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");


 var randomAbc = "qwertyuiopasdfghjklzxcvbnm"
 var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"
 var specialUpper = 'QWERTYUIOPASDFGHJKLZXCVBNM~!@#$%^&*()_+{}:"<>?`-=[];,./'
 var specialLower = 'qwertyuiopasdfghjklzxcvbnm~!@#$%^&*()_+{}:"<>?`-=[];,./'
 var specialChar = '~!@#$%^&*()_+{}:"<>?`-=[];,./'
 var allChar = '~!@#$%^&*()_+{}:"<>?`-=[];,./QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm,~!@#$%^&*()_+{}|:<>?`-=[];,./`'
 var randomChar = randomAbc.split(' ')
 var charSpecial = specialChar.split(' ')
 var bigletter = upperCase.split(' ')
 var Allchar = allChar.split(' ')
 

 
 Uppercase = prompt('Would you like a password with Uppercases?')
 Uppercase = Uppercase.toLowerCase()
 Lowercase = prompt('Would you like a password with Lowercases?')
 Lowercase = Lowercase.toLowerCase()
 Specialchar = prompt('Would you like a password with Special Characters?')
 Specialchar = Specialchar.toLowerCase()
 howLong = prompt('Please select the number of characters you would like your password to be.')
  
console.log(howLong)
 if (Uppercase === 'yes' && Lowercase === 'yes' && Specialchar ==='yes' && howLong != 129 || howLong != 7 ) {
  generateBtn.addEventListener("click", writePassword1);
    function writePassword1() {
      var generatePassword1 = allChar[Math.floor(Math.random() * allChar.length)] + allChar[Math.floor(Math.random() * allChar.length)]
    password.textContent = generatePassword1;
    generatePassword1.value = password;
    console.log(generatePassword1)
   
 }}

 if (Uppercase === 'yes' && Lowercase === 'no' && Specialchar ==='yes' && howLong <= 128 || howLong >= 8) {
  generateBtn.addEventListener("click", writePassword2);
  function writePassword2() {
    var generatePassword2 = upperCase[Math.floor(Math.random() * upperCase.length)] + specialChar[Math.floor(Math.random() * specialChar.length)] 
    password.textContent = generatePassword2;
    generatePassword2.value = password;
    console.log(generatePassword2)
   
 }}

 if (Uppercase === 'yes' && Lowercase === 'no' && Specialchar ==='no' && howLong <= 128 || howLong >= 8 ) {
  generateBtn.addEventListener("click", writePassword3);
  function writePassword3() {
    var generatePassword3 = upperCase[Math.floor(Math.random() * upperCase.length)] + upperCase[Math.floor(Math.random() * upperCase.length)] 
    password.textContent = generatePassword3;
    generatePassword3.value = password;
    console.log(generatePassword3)
   
 }}

 if (Uppercase === 'no' && Lowercase === 'yes' && Specialchar ==='yes' && howLong <= 128 || howLong >= 8) {
  generateBtn.addEventListener("click", writePassword4);
  function writePassword4() {
    var generatePassword4 = randomAbc[Math.floor(Math.random() * randomAbc.length)] + specialChar[Math.floor(Math.random() * specialChar.length)] 
    password.textContent = generatePassword4;
    generatePassword4.value = password;
    console.log(generatePassword4)
   
 }}

 if (Uppercase === 'no' && Lowercase === 'no' && Specialchar ==='yes' && howLong <= 128 || howLong >= 8) {
  generateBtn.addEventListener("click", writePassword5);
  function writePassword5() {
    var generatePassword5 = specialChar[Math.floor(Math.random() * specialChar.length)] + specialChar[Math.floor(Math.random() * specialChar.length)]
    password.textContent = generatePassword5;
    generatePassword5.value = password;
    console.log(generatePassword5)
   
 }}

 if (Uppercase === 'yes' && Lowercase === 'yes' && Specialchar ==='no' && howLong <= 128 || howLong >= 8 ) {
  generateBtn.addEventListener("click", writePassword6);
  function writePassword6() {
    var generatePassword6 = upperCase[Math.floor(Math.random() * upperCase.length)] + randomAbc[Math.floor(Math.random() * randomAbc.length)] 
    password.textContent = generatePassword6;
    generatePassword6.value = password;
    console.log(generatePassword6)
   
 }}

 if (Uppercase === 'no' && Lowercase === 'yes' && Specialchar ==='no' && howLong <= 128 || howLong >= 8) {
  generateBtn.addEventListener("click", writePassword7);
  function writePassword7() {
    var generatePassword7 = randomAbc[Math.floor(Math.random() * randomAbc.length)] + randomAbc[Math.floor(Math.random() * randomAbc.length)] 
    password.textContent = generatePassword7;
    generatePassword7.value = password;
    console.log(generatePassword7)
   
 }}
