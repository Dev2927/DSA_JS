// Merge array with while loop
// let data1 = [2, 5, 8, 19, 49, 82];
// let data2 = [3, 7, 16, 39];
// let data3 = [];
// let d1 = 0;
// let d2 = 0;
// let d3 = 0;

// while (d1 < data1.length && d2 < data2.length) {
//   if (data1[d1] < data2[d2]) {
//     data3[d3] = data1[d1];
//     d1++;
//   } else {
//     data3[d3] = data2[d2];
//     d2++;
//   }
//   d3++
// }
// while(d1 < data1.length){
//     data3[d3] = data1[d1];
//     d1++;
//     d3++
// }
// console.log(data3)

// Practice
let data = [2, 5, 8, 19];
let data2 = [3, 7, 16, 39];
let data3 = [];
let d1 = 0;
let d2 = 0;
let d3 = 0;

while (d1 < data.length && d2 < data2.length) {
  if (data[d1] < data2[d2]) {
    data3[d3] = data[d1];
    d1++;
  } else {
    data3[d3] = data2[d2];
    d2++;
  }
  d3++;
}
console.log(data3);
