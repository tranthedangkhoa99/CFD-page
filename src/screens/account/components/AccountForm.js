import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavNavLink,
    NavLink
  } from "react-router-dom"; 
import NestingRoute from "./NestingRoute"
function AccountForm() {
    return (
        <div className="accountform-wrapper">
            <div className="account-container">
                <div className="info-user">
                    <img src={require("../../../img/big-avt.png")} />
                    <p>TRẦN THẾ ĐĂNG KHOA</p>
                    <p>Thanh vien cua cfd team</p>
                </div>
                <div className="user-account">
                    <NestingRoute/>
                </div>
            </div>
        </div>
    )
}

export default AccountForm
