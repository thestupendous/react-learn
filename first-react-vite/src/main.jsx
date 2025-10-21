import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp () {
	return (
		<h3> Inside main.jsx </h3>
	)
}

const anotherReactElement = (
	<a href="https://github.com/thestupendous" target="_blank" > my (stupendous) github </a>
)

const name = 'amrit'
// how a react element is created
const reactElement = React.createElement(
	'a',													// p tag expected
	{															// object expected
		href: 'https://github.com/thestupendous',
		target: '_blank'
	},
	'click to visit my github (thestupendous)', // direct text expected
	name
)

createRoot(document.getElementById('root')).render(
	reactElement
)

/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
		<App />
    <MyApp />
  </StrictMode>,
)
*/
