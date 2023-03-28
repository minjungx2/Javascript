// 자바스크립트 프로토타입 상속
// 자바스크립트는 프로토타입 상속에 기반을 둔 OOP 언어 --> Class 문법 지원

// 프로토타입 체인 : _proto_ -> 상속해준 부모(원형)을 가리킴
// 자식 객체가 __proto__가 가리키는 부모 객체의 멤버(속성, 메서드)를 사용할 수 있다.

let obj1 = {
	name: '정민정',
	age: 25,
	sayHi: function() {
		console.log('나는' + this.name)
	}
} 

let obj2 = {
	name: '이마크'
}

console.log(obj2) // Object (최상위)
console.log(obj2.name) // 이마크

obj2.__proto__ = obj1

console.log(obj2) // obj1이 부모가 됨. obj1의 멤버를 사용할 수 있게됨.
console.log(obj2.name) // 이마크
console.log(obj2.age) // 25 obj2에 aje 속성이 없어서
obj2.sayHi() // 나는 이마크

// 빈 객체 생성 후 __proto__ 속성에 원하는 객체(부모가 될)를 할당
let obj3 = {}

console.log(obj3) // Object (최상위)

obj3.__proto__ = obj2 // obj2의 부모인 obj1의 멤버까지 모두 사용가능

console.log(obj3.hasOwnProperty('hello')) // false

console.log(obj3.name) // 이마크
console.log(obj3.age) // 25
obj3.sayHi() // 나는 이마크

// 1. 자바스크립트는 자신에게 없는 특성(속성, 메서드)을 __proto__가 가리키는 원형(부모)에서 가져온다.
// 2. 맨 하위 자식 객체에서부터 순차적으로 연결되어있는 원형을 찾아간다. -> 프로토타입 체인
// 3. __proto__ 속성이 가리키는 원형이 상속을 해준 부모이다.
// 4. 자바스크립트는 프로토타입 체인을 사용하여 객체의 특성(속성, 메서드)을 다른 객체로 전파한다. -> 프로토타입 상속
