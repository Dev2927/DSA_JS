// Array sorting
// let data = [20,10];
// for (let i = 0; i < data.length; i++) {
//   for (let j = 0; j < data.length; j++) {
//     if(data[j]>data[j+1]){
//         let temp = data[j]
//         data[j] = data[j+1]
//         data[j+1] = temp
//     }
//   }
// }
// console.log(data)

// Practice
let data = [10, 49, 83, 29];
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    if (data[j] > data[j + 1]) {
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}
console.log(data)