let str = 'heleeelo'
let strObj = {}
let maxKey = ''

for(let i=0;i<str.length;i++){
    let key = str[i]
    if(!strObj[key]){
        console.log(strObj[key])
        strObj[key] = 0
    }
    strObj[key]++
    if(maxKey == '' || strObj[key] > strObj[maxKey]){
        maxKey = key
    }
}

console.log(maxKey)