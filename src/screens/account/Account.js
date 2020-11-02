import React,{ useState, useContext  } from 'react'
import AccountForm from './components/AccountForm'
import MyContext from '../../MyContext'
import { Redirect } from 'react-router-dom'

function Account() {


    let context = useContext(MyContext)
    if(!context.login){
        return <Redirect to={{pathname: 'dangnhap'}} />
    }
    return (

        <div>
            <AccountForm/>
        </div>
    )
}

export default Account

