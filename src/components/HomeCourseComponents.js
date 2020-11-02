import React from "react";

function HomeCourseComponents({img,name,desc}) {
    return (
            <div className="course__info">
                <div className="info-img">
                    <img src={img} alt="" />
                </div>
                <div className="info-desc">
                    <h3>{name}</h3>
                    <p>{desc}</p>
                </div>
                <div className="info-register">
                    <div className="register__left">
                        <img src={require("../img/avt.png")} alt="" />
                        Tran nghia
                    </div>
                    <div className="register__right">
                        <a href="#">Đăng ký</a>
                    </div>
                </div>
            </div>
    );
}

export default HomeCourseComponents;
