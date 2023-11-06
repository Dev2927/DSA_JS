let data = [5,15,25,35,45,55]
let dataTwo = [10,20,30,40,50]
let dataThree = []

for(let i = 0; i < data.length; i++){
    dataThree[i] = data[i]
}
for (let i =0; i < dataTwo.length; i++){
    dataThree[data.length + i] = dataTwo[i]
}
console.log(dataThree)