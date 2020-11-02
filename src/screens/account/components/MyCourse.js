import React from 'react'
import MyCourseComponent from "../../../components/MyCourseComponent"
function MyCourse() {
    return (
        <div>
            <div className="your-course">
                <MyCourseComponent
                    img={require('../../../img/img4.png')}
                    name="front-end basic"
                    daystart="0909/2020"
                />
                <MyCourseComponent
                    img={require('../../../img/img5.png')}
                    name="front-end advance"
                    daystart="0909/2020"
                />
            </div>
        </div>
    )
}

export default MyCourse
