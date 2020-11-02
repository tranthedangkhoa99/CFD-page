import React from "react";
import HomeCourseComponents from "../../../components/HomeCourseComponents"

function Course() {
return (
    <div>
        <section className="home-course">
            <div className="course__about">
                <p>
                    The readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal{" "}
                </p>
            </div>
            <div className="course__online">
                <div className="course__online-title">
                    <p>khoa hoc</p>
                    <h6>online</h6>
                </div>
                <div className="course__online-list">
                    <HomeCourseComponents
                        img={require("../../../img/img5.png")}
                        name="Furnitown"
                        desc="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
                    />
                    <HomeCourseComponents
                        img={require("../../../img/img6.png")}
                        name="Furnitown"
                        desc="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
                    />
                    <HomeCourseComponents
                        img={require("../../../img/img7.png")}
                        name="Furnitown"
                        desc="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
                    />  
                </div>
                <div className="course__online-list">
                    <HomeCourseComponents
                        img={require("../../../img/img5.png")}
                        name="Furnitown"
                        desc="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
                    />
                    <HomeCourseComponents
                        img={require("../../../img/img4.png")}
                        name="Furnitown"
                        desc="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
                    />
                    <HomeCourseComponents
                        img={require("../../../img/img6.png")}
                        name="Furnitown"
                        desc="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
                    />
                </div>
            </div>
        </section>
  </div>
);
}

export default Course;
