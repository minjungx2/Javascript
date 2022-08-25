// 프로토타입(Prototype)
// 자바스크립트는 프로토타입 기반의 언어이다.
// prototype: 원형
// 객체의 원형을 가지고 새로운 객체를 생성해가는 프로그래밍 방식
// 생성된 객체는 자기자신의 프로토타입을 갖는다. -> 자기자신이 만들어지게된 원형을 안다.

// Prototype vs Class
// 원래 자바스크립트는 프로토타입 기반의 언어이다.
// 기존에는 Class라는게 없었다. 
// 객체의 원형인 프로토타입을 이용하여 객체의확장과 재사용, 상속 등을 구현했다.

// Prototype 객체는 new 연산자에 의해서 생성된 객체 -> 공유 프로퍼티, 메서드 등을 제공하기 위해 사용된다.

const fruit = {name: 'apple'}
console.log(fruit.name)
// 속성 추가
fruit.expiration = '20220825'
console.log(fruit.expiration)
// 속성이 있는지 없는지 체크 -> hasOwnProperty()
console.log(fruit.hasOwnProperty('expiration')) // true
console.log(fruit.hasOwnProperty('country')) // false
// hasOwnProperty() 메서드는 fruit 객체가 어떻게 쓰는거지?
console.log(fruit) // __proto__
// hasOwnProperty()를 fruit() 객체에 생성하면?
const fruit2 = {
	name: 'peach',
	expiration: '20220825',
	hasOwnProperty: function() {
		console.log('복숭아')
	}
}
fruit2.hasOwnProperty() // 복숭아