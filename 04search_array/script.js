// Search the element in an array
// let data = [10,20,30,40,50,60,70]
// let item = 30;
// let index = undefined

// for(let i =0; i < data.length -1; i++){
//     if(data[i] === item){
//         index = i
//         break
//     }
// }
// console.log(index)

// Search element with the help of button
function searchEl() {
  let data = [10, 20, 30, 40, 50, 60, 70];
  let item = document.getElementById("searchEl").value;
  item = parseInt(item);
  let index = undefined;

  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] === item) {
      index = i;
      break;
    }
  }
  console.log(index);
}
