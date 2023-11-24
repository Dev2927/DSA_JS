// Linear Search
let data = [30,39,92,72,74]
let find = 39
let pos = undefined

for(let i=0; i < data.length; i++){
    if(data[i] == find){
        pos = i
        break
    }
}
console.log(pos)