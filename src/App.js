import React, { useState } from 'react';
import './scss/style.scss';
import Home from './screens/home/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Account from './screens/account/Account'
import Register from './screens/register/Register'
import RegisterSuccess from './screens/register/RegisterSuccess'
import Course from './screens/course/Course'
import CfdTeam from './screens/cfdteam/CfdTeam'
import ApiTest from './screens/api/ApiTest'
import Login from "./screens/login/Login"

import MyContext  from './MyContext'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

function App() {

  

  let [login, setLogin ] = useState(false)
  
  

  return (
    <MyContext.Provider value={{ login , setLogin}}>
      <Router>
        <Header login={true} />
        <div className="main-container">
            <Switch>
              <Route path="/profile" component={Account} />
              <Route path="/cfdteam" component={CfdTeam} />
              <Route path="/dangky" component={Register} />
              <Route path="/dangkythanhcong" component={RegisterSuccess} />
              <Route path="/khoahoc" component={Course} />
              <Route path="/lienhe" component={ApiTest} />
              <Route path="/dangnhap" component={Login} />
              <Route path="/" component={Home} />
            </Switch>
        </div>
        <Footer/>
      </Router>
    </MyContext.Provider>
    
  );
}

export default App;
