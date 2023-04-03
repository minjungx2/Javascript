// 사분면 고르기 (실패)

const input = require('fs').readFileSync('./baekjoon/example.txt').toString().trim().split('\n')

const a = parseInt(input[0].replace('\r', ''))
const b = parseInt(input[1])

if (a > 0 && b > 0) {
  console.log(1)
} else if (a > 0 && b < 0) {
  console.log(2)
} else if (a < 0 && b < 0) {
  console.log(3)
} else {
  console.log(4)
}