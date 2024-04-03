import React, { Suspense, lazy, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Body from './components/Body'
import Contact from './components/Contact'
import RestaurantMenu from './components/RestaurantMenu'
import ErrorRoute  from './components/ErrorRoute'
// import Grocery from './components/Grocery'
import {createBrowserRouter,RouterProvider, Outlet } from 'react-router-dom'
import UserContext from './utils/UserContext'

// import Grocery component on demand (since, it contains lots of sub-components)
const Grocery = lazy( () => import('./components/Grocery') )
// load about page on-demand (lazy loading)
const About = lazy( () => import('./components/About'))

// creating app layout component jaha par sab kuch display hoga, phir usko render karwa dege
// ismei hoga Header, Body, Footer Component
const AppLayout = () => {
    // states for setting user name
    const [userName, setUserName] = useState()
    // authentication
    useEffect(() => {
            //  make an api call to get user name and password
            const userInfoData  = {
                loggedInUser : "Shoaib"
            }
            // set the user name, fetched from api
            setUserName(userInfoData?.loggedInUser)
    }, [])
    return(
        // modify logged-in across the whole app or the portions of the app, just wrap those portions (where you want it to modify) with 'UserContext.Provider'
        <UserContext.Provider value ={ {loggedInUser: userName, setUserName} }>
                <div className='wrapper'>
                        <Header/>
                        <Outlet/>
                </div>
        </UserContext.Provider>

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
                element:<Suspense fallback={<h1>Loading Your Profile...</h1>}> <About /> </Suspense>
        
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
                element: <Suspense fallback={<h1>Loading Your Groceries...</h1>}> <Grocery /> </Suspense>
            }
        ],
        errorElement:<ErrorRoute />
    }
  

])

root.render(<RouterProvider router = {appRouter} />)






