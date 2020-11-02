import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from "react-router-dom";

function Banner() {
    return (
        <div>
            <section className="home-banner">
            <div className="banner__content">
                <h2>thực chiến</h2>
                <p> để trở thành creative front-end developer</p>
                <Link to="khoahoc">Khóa học</Link>
            </div>
            <div className="banner__scroll-down">
            <img src={require('../../../img/scrolldown.png')} alt=""/>
            </div>
            </section>
        </div>
    );
}

export default Banner
