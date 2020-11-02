import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from "react-router-dom";

function InputGroup() {
    const handleButton = (e) => {
        e.preventDefault()

        let input = document.forminfo.elements;
        let data = {}
        for(let i = 0; i < input.length; i++){
            data[input[i].name] = input[i].value;
        }
        console.log(data)

        function validateName(){
            if(data.username === ''){
                const inputUsername = document.getElementById("input-username");
                inputUsername.classList.add('red');
                inputUsername.classList.add('tick');
                inputUsername.placeholder = "bạn chưa nhập tên";
            }
        }
        validateName()
        
        function validatePhonenumber(){
            if(data.phonenumber === ""){
                const inputPhonenumber = document.getElementById("input-phonenumber");
                inputPhonenumber.classList.add('red');
                inputPhonenumber.placeholder = "bạn chưa nhập số điện thoại";
            }
        }
        validatePhonenumber()

        function validateEmail() {
            let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

            if(pattern.test(data.email) === false){
                const inputEmail = document.getElementById("input-email");
                inputEmail.classList.add('red');
                inputEmail.placeholder = "bạn chanhập email";
            }

        }
        validateEmail()
    }

    

    return (
        <div>
            <div className="input-group-wrapper">
                <form action="" name="forminfo">
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="username">Họ và tên</label>
                        </div>
                        <div className="col-70">
                            <input onChange={handleButton}
                                id="input-username"
                                type="text"
                                name="username"
                                placeholder="tên của bạn"
                            />
                        </div>
                        <div className="validate-notice">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="phonenumber">SDT</label>
                        </div>
                        <div className="col-70">
                            <input 
                                id="input-phonenumber"
                                type="number"
                                name="phonenumber"
                                placeholder="số điện thoại của bạn"
                                onChange={handleButton}
                                />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="email">EMAIL</label>
                        </div>
                        <div className="col-70">
                            <input 
                                id="input-email"
                                type="email"
                                name="email"
                                placeholder="email"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="facebook">FACEBOOK</label>
                        </div>
                        <div className="col-70">
                            <input 
                                id="input-facebook"
                                type="text"
                                name="facebook" 
                                placeholder="facebook"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="skype">Skype</label>
                        </div>
                        <div className="col-70">
                            <input
                                id="input-skype"
                                type="text" 
                                name="skype" 
                                placeholder="skype của bạn"/>
                        </div>
                    </div>
                </form>
                <div className="button--absolute">
                    <button onClick={handleButton}>lưu lại</button>
                </div>
            </div>
        </div>
    )
}

export default InputGroup
