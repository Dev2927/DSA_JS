let data = {
    name: 'anil',
    age: 23,
    mail: 'dev@gmail.com',
    getName: function(){
        return this.name
    }
}
data.contact = 123456
data.name = 'dev'

console.log(data)