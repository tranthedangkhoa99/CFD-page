import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
    } from "react-router-dom";


function CourseBanner({daystart,duration}) {
    return (
        <div className="banner-wrapper">
            <div className="banner__content">
                <h2>Thực chiến <br/> front-end căn bản</h2>
                <div className="daystart">
                    <p>Khai giảng: <span>{daystart}</span></p>
                    <p>Thời lượng: <span>{duration}</span></p>
                </div>
                <Link to="/dangky">Đăng Ký</Link>
            </div>
            <div className="video-price">
                <div className="video">
                    <img src={require('../../../img/icon-play.png')} alt=""/>
                    <p>video giới thiệu</p>
                </div>
                <div className="price">
                    <p>4.000.000</p>
                </div>
            </div>
        </div>
    )
}

export default CourseBanner
