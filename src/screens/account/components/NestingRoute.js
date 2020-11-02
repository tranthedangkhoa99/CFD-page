import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link, useParams,
    useRouteMatch
    } from "react-router-dom";
import InputGroup from "./InputGroup"
import MyCourse from "./MyCourse"
import ProjectComponent from "./ProjectComponent"
import PaymentHistory from "./PaymentHistory"

function NestingRoute() {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <div className="tab-wrapper">
                <div className="tab__left">
                    <div className="account-info pd-box">
                        <Link to={`${url}`}>thông tin tài khoản</Link>
                    </div>
                    <div className="course pd-box">
                        <Link to={`${url}/course`}>khóa học của bạn</Link>
                    </div>
                    <div className="project pd-box">
                        <Link to={`${url}/project`}>dự án đã làm</Link>
                    </div>
                    <div className="history pd-box">
                        <Link to={`${url}/history`}>lịch sử thanh toán</Link>
                    </div>
                </div>
                <div className="tab__right">
                    <Switch>
                        <Route exact path={path}>
                            <InputGroup/>
                        </Route>
                        <Route path={`${path}/course`}>
                            <MyCourse/>
                        </Route>
                        <Route path={`${path}/project`}>
                            <ProjectComponent/>
                        </Route>
                        <Route path={`${path}/history`}>
                            <PaymentHistory/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default NestingRoute
