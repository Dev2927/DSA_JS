// Delete Element in the array
// let data = [10,20,30,40,50,60]
// let position = 3
// for(let i = position; i <= data.length -1; i++){
//     data[i] = data[i + 1]
// }
// data.length = data.length -1
// console.log(data)

// Delete the element with the help of button
function removeEl() {
  let data = [10, 20, 30, 40, 50, 60];
  let position = document.getElementById('position').value
  position = parseInt(position)
  for(let i = position; i <= data.length -1; i++){
      data[i] = data[i + 1]
  }
  data.length = data.length -1
  console.log(data)
}
