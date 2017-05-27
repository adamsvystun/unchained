import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import logo from './logo.svg';
import './styles.css';

class Header extends Component {
    render() {
        return (<div className="header">
            <div className="header__nav">
              <Link to="/" className="header__nav-item">Areas</Link>
              <Link to="/area/1" className="header__nav-item">Channels</Link>
              <Link to="/channel/1" className="header__nav-item">Channel</Link>
            </div>
        </div>)
    }
}

export default Header;
