// create heading for React
const heading = React.createElement('h1', { id: "heading" }, "Hello World Using React");

// What is heading?
// is it a 'h1' html element?
// No, it's a React Element which is basically a JS Object
// props -> attributes + properties
// console.log(heading)

// create root using using React DOM
// const root = ReactDOM.createRoot(document.getElementById('root'))


// render heading in root element
// jo bhi root ke andar hoga woh replace ho jaayega react ke code se

// render kya karte hai?
// React Element ko leta hai (JS Object), phir usko HTMl (since, the browser only understands HTML, CSS, JS not react) mei convert karke html ke root element par render karta hai
// root.render(heading)

// Task-01 : change color of the heading to red

// Hint -> target id of the heading element given using react

// Solution-01 (Done, See App.css, id given to h1 tag in line-02 using react is targeted in css)

// Solution-02

// Task-02: create nested HTML using react, below :)-
/*

<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
    </div>
</div>
*/

// Solution-02

// create React root
// const root = ReactDOM.createRoot(document.querySelector('#root'))
// create heading
// const nestedHeading = React.createElement('div', { id: "parent" },
// pass child as 3rd parameter (ismei child wala div pass hoga)
// React.createElement('div', { id: "child" },
// pass child as 3rd parameter (ismei h1 pass hoga)
//         React.createElement('h1', {}, "I'm h1 tag")
//     )
// )

// render heading in root
// root.render(nestedHeading)


// Task-03: create siblings using react, as per the HTML code below :)-
/*

<div id="parent">
    <div id="child">
    here h1 and h2 are children of the same parent, hence k/a siblings
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag
    </div>
</div>
*/

// Solution-03

// create react root
// const root = ReactDOM.createRoot(document.querySelector('#root'))
// create the content to render
// const content = React.createElement('div', { id: "parent" },
// pass child as 3rd parameter
// React.createElement('div', { id: "child" },
// pass child as 3rd parameter, but child div has more than one child, hence we can pass multiple child as 3rd parameter using Arrays
//         [
//             React.createElement('h1', {}, "I'm h1 tag"),
//             React.createElement('h2', {}, "I'm h2 tag"),
//         ]

//     )
// )

// render the content in react root element
// root.render(content)


// Task-04: create two siblings div under parent div, as per the HTML code below :)-
/*

<div id="parent">

    <div id="child1">
    here h1 and h2 are children of the same parent, hence k/a siblings
        <h1>I'm first h1 tag</h1>
        <h2>I'm first h2 tag
    </div>

    <div id="child2">
    here h1 and h2 are children of the same parent, hence k/a siblings
        <h1>I'm second h1 tag</h1>
        <h2>I'm second h2 tag
    </div>
</div>
*/

// Solution-04

// create react root using DOM
const root = ReactDOM.createRoot(document.getElementById('root'))
    // create content using react
const secContent = React.createElement('div', { id: "parent" },
    // pass child of parent div as 3rd parameter, since it has multiple child, pass it using Array
    [
        React.createElement('div', { id: "child1" },
            // pass child of child1 div as 3rd parameter, since it has multiple child, pass it using Array
            [
                React.createElement('h1', {}, "I'm first h1 tag"),
                React.createElement('h2', {}, "I'm first h2 tag")
            ]),
        React.createElement('div', { id: "child2" },
            // pass child of child2 div as 3rd parameter, since it has multiple child, pass it using Array
            [
                React.createElement('h1', {}, "I'm second h1 tag"),
                React.createElement('h2', {}, "I'm second h2 tag")
            ])
    ])

// render content in react root
root.render(secContent)