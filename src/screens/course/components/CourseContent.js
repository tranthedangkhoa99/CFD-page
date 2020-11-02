import React from 'react'
import AccordionComponents from "./AccordionComponents"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
import CardComponent from "../../../components/CardComponent"
import OfflineCourse from "../../../screens/home/components/OfflineCourse"

function CourseContent() {
    return (
        <div>
            <div className="course-content">
                <div className="content__container">
                    <div className="content__desc">
                        <p>
                            Many Laravel apps don’t warrant the complexity of a full front-end
                            framework like Vue or React. In this series, we’ll walk through a
                            handful of simple ways to add dynamic functionality to your apps.
                    </p>

                    </div>
                    <div className="course__intro">
                        <h4>giới thiệu về khóa học</h4>
                        <img src={require('../../../img/2.png')} alt="" />
                        <h4>nội dung khóa học</h4>
                        <AccordionComponents />
                        <h4>yêu cầu cần có</h4>
                        <div className="row">
                            <div className="col50">
                                <img src={require("../../../img/tick.png")} alt="" />
                                <p>Đã từng học qua HTML, CSS</p>
                            </div>
                            <div className="col50">
                                <img src={require("../../../img/tick.png")} alt="" />
                                <p>Cài đặt phần mềm Photoshop,
                            Adobe illustrator, Skype</p>
                            </div>
                        </div>
                        <h4>hình thức học</h4>
                        <div className="row mb55">
                            <div className="col50">
                                <img src={require("../../../img/tick.png")} alt="" />
                                <p>Được các mentor và các bạn trong team CFD hổ trợ thông qua group CFD Facebook hoặc phần mềm điều kiển máy tính.</p>
                            </div>
                            <div className="col50">
                                <img src={require("../../../img/tick.png")} alt="" />
                                <p>Thực hành 2 dự án thực tế với sự hướng dẫn của CFD Team.</p>
                            </div>
                        </div>
                        <h4 className="d-flex">lịch học <span>*lịch học có thể được thống nhất lại theo học viên</span></h4>
                        <div className="schedule">
                            <p>Ngày bắt đầu: <span>09/09/2020</span></p>
                            <p>Thời gian học: <span>thứ 3 đến thứ 6</span></p>
                        </div>
                        <h4>Người dạy</h4>
                        <div className="leader">
                            <img src={require("../../../img/big-avt.png")} alt="" />
                            <div className="leader__desc">
                                <h3>trần nghĩa</h3>
                                <p>Founder CFD & Creative Front-End Developer</p>
                                <p>My education, career, and even personal life have
                                been molded by one simple principle; well designed information
                                resonates with people and can change lives.I have a passion for making
                                information resonate. It all starts with how people think. With how humans work.
                                As humans we have learned how to read and write and while that is incredible,
                                we are also already hard-wired to do some things a bit more "automatically"</p>
                                <p> <strong>website: </strong> <span>http://nghiatran.info</span></p>
                            </div>
                        </div>
                        <div className="button-bottom">
                            <div className="button-bottom__left">
                                <div className="customer">
                                    <img src={require("../../../img/Group.png")} alt="" />
                                    <p>12 bạn đã đăng ký</p>
                                </div>
                                <div className="button-register">
                                    <Link to="/dangky">đăng ký</Link>
                                </div>
                            </div>
                            <div className="button-bottom__right">
                                <Link to="/"> <img src={require("../../../img/facebook.png")} alt="" /> chia sẻ</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="students-project">
                    <p>dự án</p>
                    <h4>học viên</h4>
                    <div className="projects__container">
                        <CardComponent
                            image={require("../../../img/img3.png")}
                            name="Furnitown"
                            title="One of the best corporate fashion brands in Sydney"
                        />
                        <CardComponent
                            image={require("../../../img/img3.png")}
                            name="Furnitown"
                            title="One of the best corporate fashion brands in Sydney"
                        />
                        <CardComponent
                            image={require("../../../img/img3.png")}
                            name="Furnitown"
                            title="One of the best corporate fashion brands in Sydney"
                        />
                    </div>
                </div>
            </div>
            <OfflineCourse/>
        </div>
    );
}

export default CourseContent
