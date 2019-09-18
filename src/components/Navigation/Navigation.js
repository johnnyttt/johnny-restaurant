import React from 'react';
import './Navigation.scss';


const Navigation =(props)=> {
    return (
        <ul className="menu">
            <li link="/" exact>Home</li>
            {props.isAuthenticated ? <li link="/acount">Account</li> : null}
            {!props.isAuthenticated
                ? <li link="/auth">Login</li>
                : <li link="/logout">Logout</li>}
        </ul>
    )
}

export default Navigation;