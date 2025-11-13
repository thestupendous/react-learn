import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

	let [counter, setCounter] = useState(1)
	// let counter = 1

	const addValue = () => {
		// counter += 5
		setCounter(counter+5)
		console.log(counter)
	}
	const decreaseValue = () => {
		// counter += 5
		// setCounter(counter-5)
		if (counter-5 >= 0) {
			counter -= 5
			setCounter(counter)
		}
		console.log(counter)
	}
  return (
    <>
		<h1> Raam Raam </h1>
		<h2> counter value: {counter} </h2>

		<button
		onClick={addValue}>Add value</button>
		<br/>
		<button
		onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App
