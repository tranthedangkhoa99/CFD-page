import React from 'react'
import HomeCourseComponents from "../../../components/HomeCourseComponents"
function OfflineCourse() {
    return (
        <div>
            <section className="home-offline-course">
                <div className="course__online">
                    <div className="course__online-title">
                    <p>khoa hoc</p>
                    <h6>offline</h6>
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
                        img={require("../../../img/img7.png")}
                        name="Furnitown"
                        desc="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
                    />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OfflineCourse
