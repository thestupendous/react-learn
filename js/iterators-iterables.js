// datastructures that support it
// strings, arrays, maps, sets

const str = "aise hi hota hai"

let len=0
for(const character of str){
	len++
}
console.log('[',str,' ], length: ',len)

/* ---------- own iterable definition ------------*/ 
const obj = {
	[Symbol.iterator]: function () {
		let step = 0
		const iterator = {
			next: function() {
				step++
				if(step === 1) {
					return {value:'Hello', done: false}
				} else if (step == 2) {
					return {value:'World', done: false}
				}
				return {value: undefined, done: true}
			}
		}
		return iterator
	}
}

for (const word of obj) {
	console.log(word)
}



