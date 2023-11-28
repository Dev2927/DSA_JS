// Linear Search
// let data = [30,39,92,72,74]
// let find = 39
// let pos = undefined

// for(let i=0; i < data.length; i++){
    //     if(data[i] == find){
        //         pos = i
//         break
//     }
// }
// console.log(pos)

// Practicing Linear Search

let data = [30,39,92,72,74]
let find = 72
let position = undefined

for(let i=0; i<data.length; i++){
    if(data[i] == find){
        position = i
        break
    }
}

console.log(position)