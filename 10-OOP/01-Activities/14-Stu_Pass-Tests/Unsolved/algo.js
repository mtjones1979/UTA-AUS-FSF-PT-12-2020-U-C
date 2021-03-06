function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  // const splitString = str.split(""); 
  // const reverseArray = splitString.reverse(); 
  // const joinArray = reverseArray.join(""); 
    
  // return joinArray; 
  return str.split("").reverse().join("");
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
  // const splitString = str.split(""); 
  // const reverseArray = splitString.reverse(); 
  // const joinArray = reverseArray.join(""); 
  // return joinArray;
  if (splitString === reverseArray) {
    return true;
  }
  if (splitString  !== reverseArray) {
    return false;
  }

};


Algo.prototype.capitalize = function(str) {
  // TODO: Your code here 
};

module.exports = Algo;
