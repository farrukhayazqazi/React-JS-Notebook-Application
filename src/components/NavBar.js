import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ isLogin, logout }) =>{

        
    
    return(
        <div>
            <nav>
                <div className="nav-wrapper">
                    <NavLink to="/" className="brand-logo">Notebook App</NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to="/">Home</NavLink></li>
                        { isLogin === true ? 
                            <>
                            <li><NavLink to="/create">Create</NavLink></li>
                            <li><NavLink to='/login' onClick={() => logout()}>Logout</NavLink></li>
                            </>
                            :
                        <>
                        <li><NavLink to="/login">Login</NavLink></li> 
                        <li><NavLink to="/signup">Sign up</NavLink></li> 
                        </> }
                    </ul>
                </div>
        </nav>
        </div>
    )

}

export default NavBar;