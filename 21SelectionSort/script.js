// Aescending order Sorting
// let items = [20, 12, 53, 3];

// function selectionSort(data) {
//   let minId;
//   for (let i = 0; i < data.length; i++) {
//     minId = i;
//     for (let j = i + 1; j < data.length; j++) {
//       if (data[j] < data[minId]) {
//         minId = j;
//       }
//     }
//     let temp = data[minId];
//     data[minId] = data[i];
//     data[i] = temp;
//   }
// }

// selectionSort(items);
// console.log(items)

// Descending order sorting
// let items = [20, 12, 53, 3];

// function selectionSort(data) {
//   let minId;
//   for (let i = 0; i < data.length; i++) {
//     minId = i;
//     for (let j = i + 1; j < data.length; j++) {
//       if (data[j] > data[minId]) {  //Just changed in greater sign
//         minId = j;
//       }
//     }
//     let temp = data[minId];
//     data[minId] = data[i];
//     data[i] = temp;
//   }
// }

// selectionSort(items);
// console.log(items);

// Practicing  Selection Sorting

let items = [20, 12, 53, 3];

function selectionSort(data) {
  let minId;
  for (let i = 0; i < data.length; i++) {
    minId = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[minId]) {
        minId = j;
      }
    }
    let temp = data[minId];
    data[minId] = data[i];
    data[i] = temp;
  }
}

selectionSort(items);
console.log(items);
