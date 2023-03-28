// 객체 생성시 생성자 안에서 메서드를 정의하면 안되는 이유

function Add(a,b) {
	this.a = a
	this.b = b
	this.plus = function() {
		return this.a + this.b
	}
}

let add1 = new Add(100,20)
console.log(add1.plus()) // 120
console.log(add1)

// 객체를 생성할때마다 중복으로 생성되면서 메모리가 낭비된다.
// 프로토타입 객체에다가 멤버를 추가해야된다.

let add2 = new Add(200,30)
console.log(add2)

let add3 = new Add(300,40)
console.log(add3)

let add4 = new Add(400,50)
console.log(add4)


// Add 프로토타입 객체에 함수 생성
function Add2(a,b) {
	this.a = a
	this.b = b
}

Add2.prototype.plus = function() {
	return this.a + this.b
}

// plus 메서드가 포함되지 않는다.
let newAdd1 = new Add2(100,20)
console.log(newAdd1)

let newAdd2 = new Add2(200,30)
console.log(newAdd2)

let newAdd3 = new Add2(300,40)
console.log(newAdd3)

let newAdd4 = new Add2(400,50)
console.log(newAdd4)

console.log(newAdd1.plus()) // 120