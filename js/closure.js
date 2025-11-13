// not just function, its scope is also returned from 
// outer function in javascript, the scope has persistent storage
function outer() {
	let counter = 0
	function inner() {
		counter++
		console.log(counter)
	}
	inner()
}
outer() // 1
outer() // 1
console.log('---------------------------')

function outer2() {
	let counter = 0
	function inner2() {
		counter++
		console.log(counter)
	}
	return inner2
}
const fn2 = outer2()
fn2() // 1
fn2() // 2


