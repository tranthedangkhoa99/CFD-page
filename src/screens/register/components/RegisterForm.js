import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from "react-router-dom";

function RegisterForm() {
    return (
        <div>
            <div className="register-form-wrapper">
                <p>Đăng ký</p>
                <h5>thực chiến front-end căn bản</h5>
                <div className="form__container">
                        <form action="">
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="fname">Họ và tên</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="fname" name="firstname" placeholder="Họ và tên" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="fname">Số điện thoại</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="fname" name="firstname" placeholder="Số điện thoại" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="fname">Email</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="fname" name="firstname" placeholder="Email" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">URL facebook</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="lname" name="lastname" placeholder="..." />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="country">Hình thức chuyển khoản</label>
                                </div>
                                <div className="col-75">
                                    <select id="country" name="country">
                                        <option value="chuyenkhoan">Chuyển khoản</option>
                                        <option value="tienmat">Tiền mặt</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="subject">Ý kiến cá nhân</label>
                                </div>
                                <div className="col-75">
                                    <textarea id="subject" name="subject" placeholder="Ý kiến cá nhân" style={{ height: 60 }} defaultValue={""} />
                                </div>
                            </div>
                        </form>
                        <div className="row button-submit">
                            <NavLink to="/dangkythanhcong"><input type="submit" defaultValue="Submit" /></NavLink>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
