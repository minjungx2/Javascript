let arr = ['a', 'b', 'c', 'd', 'e']

// for 반복문
for (let i=0; i < arr.length; i++) {
	console.log(arr[i])
}

// foreach 반복문
arr.forEach(val => {console.log(val)})

// set 반복
let testSet = new Set(['tiger', 'lion', 'cat'])
console.log(testSet[0]) // undefined
let arr2 = [...testSet]
console.log(arr2[0]) // ['tiger']

// Set 자료구조 메서드 keys() -> iterator(반복자) 객체 반환 -> next() 메서드
const key_itr = testSet.keys()
key_itr.next().value

// values() 메서드 -> iterator(반복자)객체 반환 -> next() 메서드
const val_itr = testSet.values()
val_itr.next().value

// for .. of 반복문
for (let i of testSet) { // for in X => for of O
	console.log(i)
}

// entries() 메서드 삽입순으로 [value, value]
let testSet2 = new Set()

testSet2.add('사탕')
testSet2.add('초콜릿')
testSet2.add('젤리')

const entries = testSet2.entries()

for (let i of entries) {
	console.log(i) // ['사탕', '사탕'], ['초콜릿', '초콜릿'], ['젤리', '젤리']
}