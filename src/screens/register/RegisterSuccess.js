import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from "react-router-dom";

function RegisterSuccess() {
    return (
        <div>
            <div className="register-success-wrapper">
                <h5>Đăng ký thành công</h5>
                <div className="success__letter">
                    <h6>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</h6>
                    <p>Cảm ơn bạn đã đăng ký khóa học tại CFD, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook hoặc số điện thoại của bạn để trao đổi.</p>
                    <NavLink to="/" className="success__button">Về trang chủ</NavLink>
                </div>
            </div>
        </div>
    )
}

export default RegisterSuccess
