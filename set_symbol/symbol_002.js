// 심볼형은 new 연산자를 사용하지않는다.
let symbol = Symbol()

let symbol2 = Symbol('personName')
let symbol3 = Symbol('personName')
console.log(symbol2 === symbol3) //false
console.log(symbol2 == symbol3) //false

// 심볼형은 문자열 형태로 변환할 수 없다.
let symbol4 = Symbol('age')
alert(symbol4) // 에러발생
console.log(symbol4) // Symbol(age) 

// 심볼형은 for in (index) 구문으로 반복시 출력되지 않는다.
let arr = [1,2,3,4,5]
arr.someProperty = 10
for (let i in arr) {
	console.log(i) // 0,1,2,3,4,someProperty
}

let arr2 = [1,2,3,4,5]
let someProperty = Symbol('someProperty')
arr2[someProperty] = 10
for (let i in arr2) {
	console.log(i) // 0,1,2,3,4 (someProperty 속성은 보이지 않는다.)
}

// 배열 객체에 속성을 넣을때
// 반복문에서 속성이 나타나지 않게 할때 -> 속성을 은닉화 할때