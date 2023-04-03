// 구구단

var fs = require('fs');
var input = fs.readFileSync('./baekjoon/example.txt').toString().split(' ');

let int = parseInt(input[0])
for (i = 1; i < 10; i++) {
  console.log(`${int} * ${i} = ${int*i}`)
}