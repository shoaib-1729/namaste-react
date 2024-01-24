import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Body from './components/Body'





// creating app layout component jaha par sab kuch display hoga, phir usko render karwa dege
// ismei hoga Header, Body, Footer Component
const AppLayout = () => {
    return(
        <div className='wrapper'>
                <Header/>
                <Body/>
        </div>
    )
}

// render app component inside root
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout/>)





