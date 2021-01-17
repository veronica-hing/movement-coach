import React from 'react';
import {Link, NavLink} from 'react-router-dom';

//stateless functional component 

const NavBar = () =>{
    return(
        <nav className = "navbar navbar-expand-lg navbar-light bg-light">
            <Link className = 'navbar-brand' to='/'>
                Movement Coach
            </Link>
            <button
                className ='navbar-toggler'
                type='button'
                data-toggle = 'collapse'
                data-target = "navbarNavAltMarkup"
            >
                <span className = 'navbar-toggler-icon'></span>
            </button>
            <div className = 'collapse navbar-collapse' id = 'navbarNavAltMarkup'>
                <div className = 'navbar-nav'>
                    <NavLink className = 'nav-item nav-link' to = '/home'>
                        Home
                    </NavLink>
                    <NavLink className = 'nav-item nav-link' to = '/workout'>
                        Workout
                    </NavLink>
                    <NavLink className = 'nav-item nav-link' to = '/calendar'>
                        Calendar
                    </NavLink>
                    <NavLink className = 'nav-item nav-link' to = '/about'>
                        About
                    </NavLink>
                    <NavLink className = 'nav-item nav-link' to = '/faq'>
                        FAQ
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;