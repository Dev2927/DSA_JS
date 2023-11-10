// Merge array with for loop
// let data = [5,15,25,35,45,55]
// let dataTwo = [10,20,30,40,50]
// let dataThree = []

// for(let i = 0; i < data.length; i++){
//     dataThree[i] = data[i]
// }
// for (let i =0; i < dataTwo.length; i++){
//     dataThree[data.length + i] = dataTwo[i]
// }
// console.log(dataThree)

// Practice 
let data = [1,2,3,4,5]
let data2 = [6,7,8,9,10]
let data3 = []

for(let i=0;i<data.length;i++){
    data3[i] = data[i]
}
for(let i=0;i<data2.length;i++){
    data3[data.length + i] = data2[i]
}

console.log(data3)