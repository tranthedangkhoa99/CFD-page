import React,{useContext, useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,     
  } from "react-router-dom"; 
  import MyContext from '../MyContext'



function Header({login = false}) {

    function logOut(){
        context.setLogin(false);
    }

    let [openSubMenu, setOpenSubMenu] = useState(false);

    let context = useContext(MyContext)

    useEffect(() => {
        window.addEventListener('click', closeSubMenu)

        return () => {
            window.removeEventListener('click',closeSubMenu)
        }
    }, [])

    function closeSubMenu(){
        console.log('close')
        setOpenSubMenu(false)
    }
    

    let hamburgerMenu= (e) => {
        e.stopPropagation()
        
        setOpenSubMenu(!openSubMenu)
        console.log(openSubMenu)


        // let userHamburgerMenu = document.querySelector(".info__hamburger-menu");
        // let userMenuActive = document.querySelector(".user__hamburger-menu")
        // if(userHamburgerMenu){
        //     userHamburgerMenu.addEventListener("click", function(){
        //         console.log("khoa")
        //         userMenuActive.classList.toggle("active")
        //     })
        // }
        // window.onload=function(){
        //     hamburgerMenu()
        //   }
    }
        
       

       

    return (
        <div className="header-wrapper">
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
                            <li><Link to="/lienhe">LIEN HE</Link></li>
                        </ul>
                    </div>
                    {
                        context.login ? 
                        <div className="header__user-info">
                            <p>tran the dang khoa</p>
                            <img className="user-avt" src={require('../img/avt.png')} alt=""/>
                            <div className="info__hamburger-menu" onClick={hamburgerMenu}>
                                <img src={require("../img/humbeger.png")} alt=""/>
                            </div>
                            <div className={'user__hamburger-menu ' + (openSubMenu ? 'active' : '')}>
                                <ul>
                                    <li>Khóa học của tôi</li>
                                    <li><Link to="/profile">Thông tin tài khoản</Link></li>
                                    <li onClick={logOut}>Đăng xuất</li>
                                </ul>
                            </div>
                        </div>
                        : 
                        <div className="header__user-login">
                            <NavLink to="/dangnhap">DANG NHAP</NavLink>
                        </div>
                    }
                    
                </div>
            </header>
        </div>
    )
}

export default Header
