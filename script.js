// complete the given function

function palindrome(str){

  // Convert the string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Check if the reversed string is the same as the original string
  return str === str.split('').reverse().join('');


}
module.exports = palindrome
