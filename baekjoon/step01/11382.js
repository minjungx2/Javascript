// 꼬마 정민

let fs = require('fs');
let input = fs.readFileSync('./baekjoon/example.txt').toString().split(' ');

let sum = 0
input.forEach(a => {
    sum += parseInt(a)
})
console.log(sum)
