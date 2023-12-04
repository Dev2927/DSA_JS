// function palindrome(data) {
//   let start = 0;
//   let end = data.length - 1;
//   let result = true;
//   while (end > start) {
//     if (data[end] != data[start]) {
//       result = false;
//     }
//     start++;
//     end--;
//   }
//   return result;
// }

// let str = "levela";
// console.log(palindrome(str));

// Practicing palindrome

function palindrome(data) {
  let start = 0;
  let end = data.length - 1;
  let result = true;
  while (end > start) {
    if (data[end] != data[start]) {
      return false;
    }
    start++;
    end--;
  }
  return result;
}

let str = "Dev";
console.log(palindrome(str))
