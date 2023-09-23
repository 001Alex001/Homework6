// 1. Given an array. Write a recursive function that returns the sum of it. 

function sum(arr) {
    if(arr.length === 0){
        return 0;
    }
    return arr.pop() + sum(arr)
}

// 2. Given a number. Write a recursive function that reverse the number. Return the new number.

function revercedNum(num) {
    if (num < 1) {
      return num;
    }
     return parseInt(num.toString().split('').reverse().join(''))
  }
  
//   function f(number, reversed = 0) {
//     if (number === 0) {
//       return reversed;
//     }
//     const lastDigit = number % 10;
//     reversed = reversed * 10 + lastDigit;
//     const remainingNumber = Math.floor(number / 10);
//     return f(remainingNumber, reversed);
//   }
  
// using google.

// 4. Given a string. Return true, if it is mirror symmetric to its middle symbol.

function mirror(str){
    if(str.length === 0 || str.length % 2 !== 1){
        return false
    }
    let middleSymbol = Math.floor(str.length / 2)
    for(let i = 0 ; i <= middleSymbol; i++){
        if(str[middleSymbol - 1] === str[middleSymbol + 1]){
            return true
        }
        return false
    }
}

// 6.Given a number. Write a function that calculates its sum of the digits and if that sum has
// more than 1 digit find the sum of digits of that number. Repeat that process if needed
// and return the result.

function sumOfDigits(num){
    if(num < 10){
        return num
    }
    let sum = 0;
    let str = num.toString();
    for(let i = 0 ; i < str.length; i++){
        sum += parseInt(str.charAt(i))
    }
    return sumOfDigits(sum)
}