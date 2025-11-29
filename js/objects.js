const name = "Sumit"

const person = {
	// name: name,
	name,  // Sumit

	age: 25,
	isMarried: false,
};

// destructuring objects
const {name2, age2, isMarried2} = person;
console.log(name2, age2, isMarried2) // TODO not working!

// using other object with all other fields same
const person2 = {...person, name: "Rohan"}
console.log("perosn2: ",person2)

const names = ["Sheela", "Meeti", "Sonali"]
const names2 = [...names, "Preet"]
console.log(names2)

