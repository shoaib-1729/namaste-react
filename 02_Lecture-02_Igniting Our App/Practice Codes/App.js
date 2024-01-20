// create heading for React
import React from 'react'
import ReactDOM from 'react-dom'


// create heading
const heading = React.createElement('h1', {id:"heading'"}, "Namaste React🚀")

// create react root
const root = ReactDOM.createRoot(document.getElementById('root'))

// render hading in react root
root.render(heading)

