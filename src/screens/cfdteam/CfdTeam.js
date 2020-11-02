import React from 'react'
import TeamMentorComponent from "./components/TeamMentorComponent"
import StudentComponent from "./components/StudentComponent"

function CfdTeam() {
    return (
        <div className="cfd-team-wrapper">
            <div className="team-title">
                <h2>cfd team</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non luctus</p>
            </div>
            <div className="mentor-card-wrapper">
                <TeamMentorComponent
                    img={require("../../img/mentor1.png")}
                    name="Trần Nghĩa"
                    desc="Founder & Creative Front-End Developer"
                />
                <TeamMentorComponent
                    img={require("../../img/mentor1.png")}
                    name="Trần Nghĩa"
                    desc="Founder & Creative Front-End Developer"
                />
                <TeamMentorComponent
                    img={require("../../img/mentor1.png")}
                    name="Trần Nghĩa"
                    desc="Founder & Creative Front-End Developer"
                />
                <TeamMentorComponent
                    img={require("../../img/mentor1.png")}
                    name="Trần Nghĩa"
                    desc="Founder & Creative Front-End Developer"
                />
            </div>
            <div className="students-card-wrapper">
                <StudentComponent
                    img={require("../../img/student1.png")}
                    name="dang khoa"
                    desc="cfd-online"
                />
                <StudentComponent
                    img={require("../../img/student2.png")}
                    name="dang khoa"
                    desc="cfd-online"
                />
                <StudentComponent
                    img={require("../../img/student1.png")}
                    name="dang khoa"
                    desc="cfd-online"
                />
                <StudentComponent
                    img={require("../../img/student1.png")}
                    name="dang khoa"
                    desc="cfd-online"
                />
                <StudentComponent
                    img={require("../../img/student1.png")}
                    name="dang khoa"
                    desc="cfd-online"
                />
                <StudentComponent
                    img={require("../../img/student2.png")}
                    name="dang khoa"
                    desc="cfd-online"
                />
                <StudentComponent
                    img={require("../../img/student1.png")}
                    name="dang khoa"
                    desc="cfd-online"
                />
                <StudentComponent
                    img={require("../../img/student1.png")}
                    name="dang khoa"
                    desc="cfd-online"
                />
                <StudentComponent
                    img={require("../../img/student1.png")}
                    name="dang khoa"
                    desc="cfd-online"
                />
                <StudentComponent
                    img={require("../../img/student2.png")}
                    name="dang khoa"
                    desc="cfd-online"
                />
                <StudentComponent
                    img={require("../../img/student1.png")}
                    name="dang khoa"
                    desc="cfd-online"
                />
                <StudentComponent
                    img={require("../../img/student1.png")}
                    name="dang khoa"
                    desc="cfd-online"
                />
            </div>
        </div>
    )
}

export default CfdTeam
