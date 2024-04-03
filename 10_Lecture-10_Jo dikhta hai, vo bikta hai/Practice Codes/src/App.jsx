import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import RestaurantMenu from './components/RestaurantMenu'
import ErrorRoute  from './components/ErrorRoute'
// import Grocery from './components/Grocery'
import {createBrowserRouter,RouterProvider, Outlet } from 'react-router-dom'

// import Grocery component on demand (since, it contains lots of sub-components)
const Grocery = lazy( () => import('./components/Grocery') )

// creating app layout component jaha par sab kuch display hoga, phir usko render karwa dege
// ismei hoga Header, Body, Footer Component
const AppLayout = () => {
    return(
        <div className='wrapper'>
                <Header/>
                <Outlet/>
        </div>
    )
}


// render app component inside root
const root = ReactDOM.createRoot(document.getElementById('root'))

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />
        
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />
            }, 
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}> <Grocery /> </Suspense>
            }
        ],
        errorElement:<ErrorRoute />
    }
  

])

root.render(<RouterProvider router = {appRouter} />)






