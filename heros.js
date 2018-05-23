const fs = require('fs')

const data = fs.readFileSync('heros.txt').toString().trim().split(/\r?\n/g)

// console.log(typeof data)
// console.log(data instanceof Buffer)
// console.log()
// console.log(typeof data)

// console.log(data.toJSON())

const newData = []
newData.push('<option value="">选择英雄...</option>')

for (i = 0; i < 115; i++) {
    newData.push(`<option value="${data[i]}">${data[i]}</option>`)
}

console.log(newData.join(''))
