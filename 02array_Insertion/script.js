// Insertion
// let data = [12, 43, 53, 83, 29];
// let newEl = 20;
// let position = 2;

// for (let i = data.length - 1; i >= 0; i--) {
//   if (i >= position) {
//     data[i + 1] = data[i];
//     if (i == position) {
//       data[i] = newEl;
//     }
//   }
// }
// console.log(data)

// Insertion with new button
// function insertEl() {
//   let data = [12, 43, 53, 83, 29];
//   let newEl = document.getElementById("newEl").value;
//   newEl = parseInt(newEl);
//   let position = document.getElementById("position").value;

//   for (let i = data.length - 1; i >= 0; i--) {
//     if (i >= position) {
//       data[i + 1] = data[i];
//       if (i == position) {
//         data[i] = newEl;
//       }
//     }
//   }
//   console.log(data);
// }

// Insert  with the help of default JS function
let items = [10,20,39,40]
items.splice(2, 0, 2000)
console.log(items)