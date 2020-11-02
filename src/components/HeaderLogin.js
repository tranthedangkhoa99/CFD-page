import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavNavLink,
    Link,
    NavLink
  } from "react-router-dom";

function HeaderLogin() {
    return (
        <div className="header-login-wrapper">
            <header>
            <div className="header__container">
                <div className="header__logo">
                    <NavLink to="/"><img src={require('../img/logo.svg')} alt=""/></NavLink>
                </div>
                <div className="header__nav">
                    <ul className="home-nav">
                            <li><Link to="/">TRANG CHU</Link></li>
                            <li><Link to="/cfdteam">CFD TEAM</Link></li>
                            <li><Link to="/">DU AN</Link></li>
                            <li><Link to="/khoahoc">KHOA HOC</Link></li>
                            <li><Link to="/">LIEN HE</Link></li>
                    </ul>
                </div>
                <div className="header__user-login">
                    <NavLink to="/dangky">DANG KY</NavLink>
                </div>
            </div>
        </header>
        </div>
    )
}

export default HeaderLogin;