let data = new Set(['anil', 'peter', 'anil'])
data.add({'email': 'test@gamil.com'})
console.log(data.has('peter1'))
data.delete('anil')
console.log(data)

