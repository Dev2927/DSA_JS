// Reverse array
// let data = [10, 20, 30, 40, 50, 60];
// let temp;
// function customReverse(data, start, end) {
//   if (start <= end) {
//     temp = data[start];
//     data[start] = data[end];
//     data[end] = temp;
//     customReverse(data, start + 1, end - 1);
//   }
// }
// customReverse(data, 0, data.length - 1);
// console.log(data)

// Practicing reverse array with recursion
let data = [10, 20, 30, 40, 50];
let temp;

function customReverse(data, start, end) {
  if (start <= end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    customReverse(data, start + 1, end - 1);
  }
}
customReverse(data, 0, data.length - 1);
console.log(data);
