// 사칙연산

var fs = require('fs');
var input = fs.readFileSync('./baekjoon/example.txt').toString().split(' ');

let a = parseInt(input[0])
let b = parseInt(input[1])

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(Math.floor(a/b))
console.log(a%b)