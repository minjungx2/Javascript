// ES6 set() 자료구조
// ES6에서 새롭게 도입한 자료구조 map, set

// map: key와 value를 한 쌍으로 묶음. 객체와 비슷
// set: 중복을 허용하지 않음. 배열과 비슷

// 1. set
// key 없이 value들의 집합 또는 컬렉션

// [특징]
// set은 같은 값을 중복해서 가질 수 없다.
// 중복해서 값을 추가해봤자 추가되지않으므로 중복을 제거하는 용도로도 많이 쓰인다.

// let arr2 = [1,2,3,4,5,5]
// console.log(arr2)    // 1,2,3,4,5,5
// console.log(arr2[4]) //5
// console.log(arr2[5]) //5

// [사용법]
// 생성 new: 비어있는 집합을 하나 생성
let arr3 = new Set()

// 추가 add
arr3.add('A')
arr3.add('B')
arr3.add('C')
arr3.add('C')
arr3.add('C')
console.log(arr3[0]) // undefined
console.log(arr3.size) // 3

// 삭제 delete
arr3.delete('C')
console.log(arr3) // A, B

// 모두 삭제 clear
arr3.clear()
console.log(arr3) // Set(0)



