// Animal 프로토타입 객체 -> tiger, lion과 같은 객체들의 원형이 되는 객체
// tiger, lion 객체들은 모두 'Animal' 프로토타입 객체에 접근이 가능
// Animal 프로토타입 객체에 멤버 한개를 추가하면 tiger, lion 객체들도 동시에 추가된 멤버를 사용할 수 있다.

function Animal() {}

let tiger = new Animal()
let lion = new Animal()

// Animal 프로토타입 객체에 멤버 추가
Animal.prototype.aniRun = function() {
	return "동물이 뛴다."
}

console.log(tiger.aniRun()) // 동물이 뛴다.
console.log(lion.aniRun()) // 동물이 뛴다.

// 부모(원형)에 있는 aniRun() 메서드를 tiger, lion(자식) 객체내에서 만들면
tiger.aniRun = function() {
	return "호랑이가 뛴다."
}

console.log(tiger.aniRun()) // 호랑이가 뛴다.
console.log(lion.aniRun()) // 동물이 뛴다.