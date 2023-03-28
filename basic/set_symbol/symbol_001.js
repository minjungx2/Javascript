// 객체의 속성으로 사용
// 심볼형 -> 유일무이한 값, 고유한 값을 가진다.
// 심볼형 값은 변경 불가능한 불변값이다.

// 원시형: Number, String, Null, Undefined, Boolean, Symbol(ES6)
// 참조형: Object(object, function, array...)

let arr = [1,2,3,4,5]
console.log(arr.length) // 5

arr.length = 50 // arr 배열에 length 속성을 정의하고 50을 할당. 덮어쓰기됨
console.log(arr.length)


// Symbol
let arr2 = [1,2,3,4,5]
const length = Symbol('length')
arr2[length] = 50 // arr2 배열의 length 속성에 50을 할당
console.log(arr2.length) // 5
console.log(arr2[length]) // 50