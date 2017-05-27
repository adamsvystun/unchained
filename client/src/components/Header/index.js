import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
// import logo from './logo.svg';
import './styles.scss';

class Header extends Component {
    render() {
        return (<div className="header">
            <div className="header__nav">
                <NavLink exact to="/" className="header__nav-item" activeClassName="header__nav-item--selected">
                    Areas</NavLink>
                <NavLink to="/area/1" className="header__nav-item" activeClassName="header__nav-item--selected">
                    Channels</NavLink>
            </div>
        </div>)
    }
}

export default Header;
