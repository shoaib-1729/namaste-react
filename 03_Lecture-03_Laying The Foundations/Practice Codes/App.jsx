import React from 'react'
import ReactDOM from 'react-dom'


// create heading
const heading = React.createElement('h1', { id: "heading" }, "Namaste React🚀")

// create root element
const root = ReactDOM.createRoot(document.getElementById('root'))

// render heading inside root
// root.render(heading)


// React.createElement -> Not developer-friendly
// facebook developers -> created JSX (a combination of HTML and JS having HTML-like synrax but not HTML)

// creating heading using JSX
const jsxHeading =
<div>
    <h1>
        Namaste React using JSX!🚀
    </h1>
</div>
// render the heading inside root
// root.render(jsxHeading)


// Creating Heading Component in React
// Component is just a JS Function that returns some piece of JSX codes (since, JSX is converted to a React Element, hence we can say 'functional component is just a JS Function that returns React Element or JSX code)

// Syntax-1 (using arrow function)
const HeadingComponentOne = () => {
    return(<h1>Namaste React using JS Component One🚀</h1>)
}

// Syntax-2 (common, mostly used)
const HeadingComponentTwo = () => {
    return (
    <h1>Namaste React using JS Component Two🚀</h1>
)}

// Syntax-3 (using normal function declaration)
const HeadingComponentThree = function(){
    return (<h1>Namaste React using JS Component Three🚀</h1>)
}

// return bunch of JSX (nested HTML elements) inside components
// remember of creating these nested elements using React.createElement
let msg = "This is normal JS code"
const HeadingComponentFour = () => (
<div id="container">
    {/* rendering a component inside another component (Component Composition) */}
    <HeadingComponentOne/>
    {/* using React Element inside a component (any JS code can be inserted inside JSX using {}, hence JSX is JS plus HTML) */}
    {jsxHeading}
    <h1 id="heading">Namaste React using JS Component Four🚀</h1>
    {/* rendering JS code inside JSX */}
    {msg}
    {console.log(msg)}
   {alert(msg)}
</div>
)


// rendering the react component inside react root

// Syntax-1
// root.render(<HeadingComponentOne></HeadingComponentOne>)
// Syntax-2 (commonly used)
// root.render(<HeadingComponentFour/>)
// Syntax-3
// root.render(HeadingComponentThree());


// case of infinite loop in component composition
const element = <span>I'm a span element</span>

// component (element inside component)
const HeadComponent = () => (
    <div>
        <h1>I'm heading</h1>
       {title}
    </div>
)

// react element (component inside element)
const title = (
        <h1 className="head" tabIndex="-1">
            {element}
            Namaste React using JSX🚀
            <HeadComponent></HeadComponent>
        </h1>
    )












