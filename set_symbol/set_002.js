// 1. 생성시 추가
let arr = new Set().add('a').add('b')
console.log(arr) // a, b

// 2. 출력: Spread 연산자 > Iterable Object의 요소를 하나씩 분리하여 전개. 펼침연산자
let testArr = ['m','i','n','j','u','n','g']
console.log(...testArr)   // m i n j u n g
console.log([...testArr]) // ['m', 'i', 'n', 'j', 'u', 'n', 'g']


let testArr2 = 'minjung'
console.log(...testArr2)   // m i n j u n g
console.log([...testArr2]) // ['m', 'i', 'n', 'j', 'u', 'n', 'g']

console.log([...'minjung']) // ['m', 'i', 'n', 'j', 'u', 'n', 'g']

console.log(...arr)  // a b
console.log([...arr])// ['a', 'b']