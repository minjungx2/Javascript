// 시험 성적 (실패)

let input = require('fs').readFileSync('./baekjoon/example.txt').toString().trim();
let score = parseInt(input)

if (score >= 90) {
  console.log('A')
} else if (score >= 80) {
  console.log('B')
} else if (score >= 70) {
  console.log('c')
} else if (score >= 60) {
  console.log('D')
} else {
  console.log('F')
}
