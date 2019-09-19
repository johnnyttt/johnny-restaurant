import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';


const Navigation =(props)=> {
    return (
        <ul className="menu">
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/RestaurantSearch" exact>Restaurant Search</NavLink></li>
            <li>{props.isAuthenticated ? <NavLink to="/acount">Account</NavLink> : null}</li>
            <li>{!props.isAuthenticated ? <NavLink to="/login">Login</NavLink> : <NavLink to="/logout">Logout</NavLink>}</li>
        </ul>
    )
}

export default Navigation;