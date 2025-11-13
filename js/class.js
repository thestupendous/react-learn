class Person{
	constructor(fName, lName) {
		this.firstName = fName
		this.lastName = lName
	}
	sayMyName() {
		return this.firstName + ' ' + this.lastName
	}
}
const p1 = new Person('Daniel', 'Jone')
console.log(p1.sayMyName())

class SuperHero extends Person {
	constructor(fName, lName) {
		super(fName, lName)
		this.isSuperhero = true
	}
	fightCrime() {
		console.log('fighting Crime')
	}
}

const batman = new SuperHero('juice','main')
console.log(batman.sayMyName())


