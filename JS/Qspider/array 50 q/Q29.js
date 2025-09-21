// check if an array is a palindrome

let arr = [1, 2, 3, 2, 1];

const isPalindrome = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return "not palindrome";
    }
  }
  return "plaindrome";
};

console.log(isPalindrome(arr));
