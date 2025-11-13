const Person = function(fName,lName) {
	this.firstName = fName
	this.lastName = lName
}

const p1 = new Person('Bruce', 'Wayne')
const p2 = new Person('Clark', 'Cantt')

Person.prototype.getFullName = function() {
	return this.firstName + ' ' + this.lastName
}

console.log(p1.getFullName())
console.log(p2.getFullName())

/* -------------- Inheritence ----------------- */
const SuperHero = function(fName,lName) {
	// this = {}
	Person.call(this, fName, lName)
	this.isSuperHero = true
}
SuperHero.prototype.fightCrime = function() {
	console.log('Fighting crime')
}
SuperHero.prototype.constructor = SuperHero
SuperHero.prototype = Object.create(Person.prototype)
const batman = new SuperHero('Spruce','Payne')
console.log(batman.getFullName())
