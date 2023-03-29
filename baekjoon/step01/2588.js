// 곱셈

let input = require('fs').readFileSync('./baekjoon/example.txt').toString().trim().split('\n')
let a = parseInt(input[0].replace('\r', ''))
let b = input[1]
let count = b.length-1

let total = 0
for(let i = count; i >= 0; i--) {
    let resultSum = a*parseInt(b[i])
    console.log(resultSum)
    
    total += i < count ? 
    resultSum*10**(Math.abs(i-count)) : 
    resultSum
}

console.log(total)