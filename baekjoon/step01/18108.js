// 1998년생인 내가 태국에서는 2541년생?!

var fs = require('fs');
var input = fs.readFileSync('./baekjoon/example.txt').toString().trim();

let year = parseInt(input) - 543
console.log(year)

