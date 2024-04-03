import {useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState('Login')
    // access logged-in user using useContext
    const {loggedInUser} = useContext(UserContext)
    console.log("User:", loggedInUser)
    // console.log('Header Rendered')
    function loginHandler(){
        (btnNameReact === 'Login') ? setBtnNameReact("Logout") : setBtnNameReact("Login");
    }
    return(
        <div className="nav-container flex-shrink-0">
                <Link to="/">
                    <img className="nav-logo hover:cursor-pointer" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-restaurant-logo%2C-restaurant-logo-design-template-33255790cb8e1186b28609dd9afd4ee6_screen.jpg?ts=1668794604" alt="" />
                </Link>
         <div className="translate-x-[2rem] translate-y-[2rem] flex w-[10rem]">
            <p className="py-3 text-md font-thin">User: {loggedInUser}</p>
        </div>
                 <ul className='nav-items'>
                    

                    {/* for online status */}
                    <li className="w-[6rem] ">
                        {useOnlineStatus() ? "🟢 Online" : "🔴 Offline"}
                    </li>
                        <li>
                            {/* Bad Practice, since ot reloads the full page */}
                            {/* <a href="/">Home</a> */}

                            {/* Instead use 'Link' tag given my React-DOM, only 'to' attribute is used here instead of 'href', else the same as anchor tag */}
                            {/* using 'Link' doesn't reload the whole page, instead it only replaces the component  */}
                            <Link to="/">Home</Link>
                        </li>
                
                        <li>
                            {/* <a href="/about">About</a> */}

                            <Link to="/about">About</Link>
                        </li>
                        <li>
                                    {/* Grocery Items */}
                            <Link to="/grocery">Grocery</Link>
                        </li>

                        <li>
                            {/* <a href="/contact">Contact</a> */}

                            <Link to="/contact">Contact</Link>
                        </li>

                        <li>
                            <button onClick={
                                () => {
                                loginHandler();
                                console.log(btnNameReact);
                            }

                            }
                                className="login-btn">{btnNameReact}</button>
                     </li>
                    {/* logged in user show karege */}
                   
                </ul>
        </div>
    )
}
export default Header;