// A-B

var fs = require('fs');
var input = fs.readFileSync('./baekjoon/example.txt').toString().split(' ');

let a = parseInt(input[0])
let b = parseInt(input[1])
console.log(a-b)