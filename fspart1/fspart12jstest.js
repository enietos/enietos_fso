const x = 1
let y = 10
const t = [1,2,3]
t.push(10)
const t2 = t.concat(12)
console.log(t2.length)
t.forEach(value => {
    console.log(value)
})
const mapping = t.map(value => 'My name is ' + value*value)
const [first, second, ... rest] = mapping
console.log(rest)