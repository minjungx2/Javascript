// 두 수 비교하기

let input = require('fs').readFileSync('./baekjoon/example.txt').toString().split(' ');

let a = parseInt(input[0])
let b = parseInt(input[1])

if (a > b) {
  console.log('>')
} else if (a < b) {
  console.log('<')
} else {
  console.log('==')
}

