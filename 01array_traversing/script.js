// Traversing
// let data = [33, 42, 43, 48, 20, 93, 84, 10, 22, 27]
// for(let i=0; i<data.length; i++){
//     document.write(`Array of ${i} is ${data[i]} <br>`)
// }

// Accessing with the help of button
// let data = [33, 42, 43, 48, 20, 93, 84, 10, 22, 27];
// function getElement() {
//   let el = document.getElementById("element").value;
//   if (el < data.length && typeof parseInt(el) === "number" && el >= 0) {
//     alert(data[el]);
//   } else {
//     alert("Please enter valid input");
//   }
// }


// PRACTISE


// Practising Traversing
// let data = [10,20,30,40,50]
// for(let i=0;i <data.length; i++){
//   document.write(`Array of ${i} is ${data[i]} <br>`)
// }

// Practising access element with the help of Button
let data = [10, 20, 30, 40, 50];
function getElement() {
  let el = document.getElementById("element").value;
  if (el < data.length && typeof parseInt(el) === 'number' && el >= 0 ) {
    alert(data[el]);
  } else {
    alert("Please enter a valid input");
  }
}
