import {useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState('Login')
    console.log('Header Rendered')
    function loginHandler(){
        (btnNameReact === 'Login') ? setBtnNameReact("Logout") : setBtnNameReact("Login");
    }
    return(
        <div className="nav-container">
                    <img className="nav-logo" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-restaurant-logo%2C-restaurant-logo-design-template-33255790cb8e1186b28609dd9afd4ee6_screen.jpg?ts=1668794604" alt="" />
                 <ul className='nav-items'>
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
                </ul>
        </div>
    )
}
export default Header;