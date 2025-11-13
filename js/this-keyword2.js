function sayMyName(name) {
	console.log(`my name is ${name}`)
}

sayMyName('Chikara')
sayMyName('Chirkina')

// implicit binding
const person = {
	name: "Vishwas",
	sayMyName: function() {
		console.log(`My name is ${this.name}`)
	},
}
person.sayMyName()

// explicit binding 
function sayMyName() {
	console.log(`My name is ${this.name}`)
}
sayMyName.call(person)

// new binding 
function person2(name) {
	// this = {}
	this.name = name
}
const p1 = new person2("Vishwas")
const p2 = new person2("Vishwa")
console.log(p1.name, p2.name)

// default binding - when all other rules fail
sayMyName()


