import React from 'react'

function CardComponent({image,name,title}) {
    return (
        <div>
            <div className="project__card">
                <img src={image} alt="" />
                <div className="card__desc">
                    <h4>{name}</h4>
                    <p>{title}</p>
                </div>
                <div className="card__register">
                    <div className="register__left">
                    <img src={require("../img/avt.png")} alt="" />
                    <p>Dang Khoa</p>
                    </div>
                    <div className="register__right">
                    <a href="#">Website</a>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default CardComponent
