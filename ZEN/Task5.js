// Print odd numbers in an array
let numArr = [1,2,3,4,5,6];

function getOdd() {
  numArr.forEach(element => {
    element % 2 !== 0 && console.log(element)
  });
};

getOdd();


// Convert all the strings to title caps in a string array
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  
console.log(titleCase('hello woRld! waSSup?'));


// Sum of all numbers in an array
function addNum(num) {
    let sum = 0;
    for(let i in num) {
        sum += num[i]
    }
    return sum;
  }

let numArr = [1,2,3,4,5]
console.log(addNum(numArr));


// Return all the prime numbers in an array
function isPrime(num) {
  for (let i = 2; i * i <= num; i++)
      if (num % i === 0)
        return false; 
  return num > 1;
  }
  
let numArr = [1,2,3,4,5,6]
console.log(numArr.filter(isPrime));


// Return all the palindromes in an array
function isPalindrome(s)
{
    let a = s;
    s = s.split('').reverse().join('');
    return s == a;
}

function palin(arr, n) {
  let result = [];
  for(let i = 0; i < n; i++) {
    if(isPalindrome(arr[i])) {
      result.push(arr[i])
    }
  }
  return result;
}

let arr = ["lol", "yes", "non", "earth", "mars"]
let n = arr.length;
console.log(palin(arr, n))


// Return median of two sorted arrays of the same size
function getMedian(ar1, ar2, n)
{
  let j = 0;
  let i = n - 1;
  while (ar1[i] > ar2[j] && j < n && i > -1)
  {
    let temp = ar1[i];
    ar1[i] = ar2[j];
    ar2[j] = temp;
    i--; j++;
  }
  ar1.sort(function(a, b){return a - b});
  ar2.sort(function(a, b){return a - b});
  return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
}
  
let ar1 = [ 1, 12, 15, 26, 38 ];
let ar2 = [ 2, 13, 17, 30, 45 ];

let n1 = 5;
let n2 = 5;
if (n1 == n2) {
  console.log(getMedian(ar1, ar2, n1))
}


//Remove duplicates from an array
function removeDupli(chars) {
    let uniqueChars = [...new Set(chars)];
    console.log(uniqueChars);
}

let chars = ['earth', 'earth', 'mars', 'sun', 'sun']
removeDupli(chars)


// Rotate an array by k times
const rotateArr = function(nums, k) {
    for(let i = 0; i < k; i++) {
      nums.unshift(nums.pop())
    }
    return nums
  }
  
let nums = [1,2,3,4,5]
console.log(rotateArr(nums, 4))

// Arrow Functions
// Print odd numbers in an array
let numArr = [1,2,3,4,5,6];

const getOdd = () => {
  numArr.forEach(element => {
    element % 2 !== 0 && console.log(element)
  });
};

getOdd();

// Convert all the strings to title caps in a string array
const titleCase = (str) => {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}

console.log(titleCase('hello woRld! waSSup?'));

// Sum of all numbers in an array
const addNum = (num) => {
  let sum = 0;
  for(let i in num) {
      sum += num[i]
  }
  return sum;
}

let numArr = [1,2,3,4,5]
console.log(addNum(numArr));

// Return all the prime numbers in an array
const isPrime = (num) => {
  for (let i = 2; i * i <= num; i++)
      if (num % i === 0)
        return false; 
  return num > 1;
  }
  
let numArr = [1,2,3,4,5,6]
console.log(numArr.filter(isPrime));

// Return all the palindromes in an array
const isPalindrome = (s) => {
  let a = s;
  s = s.split('').reverse().join('');
  return s == a;
}

const palin = (arr, n) => {
  let result = [];
  for(let i = 0; i < n; i++) {
    if(isPalindrome(arr[i])) {
      result.push(arr[i])
    }
  }
  return result;
}

let arr = ["lol", "yes", "non", "earth", "mars"]
let n = arr.length;
console.log(palin(arr, n))
