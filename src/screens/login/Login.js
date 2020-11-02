import React,{ useContext, useState} from 'react'
import {
    BrowserRouter as Router,BrowserRouter,Redirect
  } from "react-router-dom";

  import MyContext from './../../MyContext'

function Login() {
    let context = useContext(MyContext)

    
    const handleLogin = (e) =>{

        e.preventDefault()
        setTimeout(() =>{
            let formLogin = document.formLogin.elements;
            let data = {};
            for(let i = 0; i < formLogin.length; i++){
                data[formLogin[i].name] = formLogin[i].value;
                console.log(formLogin[i].value)
            }

            context.setLogin(true)
        }, 1000)

        
    }
    // function handleInput(e){
    //     e.preventDefault(e)
    //     let formLogin = document.formLogin.elements;
    //     let data = {};
    //     for(let i = 0; i < formLogin.length; i++){
    //         data[formLogin[i].name] = formLogin[i].value;
    //     }
    //     console.log(data)
    // }


    if(context.login){
        return <Redirect to={{pathname: "/profile"}}/>
    }
    return (
        <div className="login-form" style={{marginTop:"30px",marginBottom:"30px"}}>
            <form action="" name="formLogin" style={{padding: "20px",margin:"0 auto"}}>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="">username</label>
                    </div>
                    <div className="col-75">
                        <input type="text" name="username" placeholder="username" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="">password</label>
                    </div>
                    <div className="col-75">
                        <input type="text" name="password" placeholder="password"/>
                    </div>
                </div>
                <div className="row">
                    <button onClick={handleLogin}>dang nhap</button>
                </div>
            </form>
        </div>
    )
}

export default Login
