let data = new Map([
    ['name', 'dev'],
    [true, 'bool key'],
    [100, 'hundred']
])

data.set('color', 'green')
console.log(data.size)
console.log(data.has(100))
console.log(data.get(100))
data.clear()