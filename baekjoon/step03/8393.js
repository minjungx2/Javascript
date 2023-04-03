// 합

var input = require('fs').readFileSync('./baekjoon/example.txt').toString().split(' ');

let sum = 0
for (i = 1; i < parseInt(input[0]) + 1; i++) {
  sum += i
}
console.log(sum)