import React from 'react'
import CourseBanner from "./components/CourseBanner"
import CourseContent from "./components/CourseContent"
import CardComponent from "../../components/CardComponent"

function Course() {
    return (
        <div>
            <CourseBanner
                daystart="12/10/2020"
                duration="18 buổi"
            />
            <CourseContent/>
        </div>
    )
}

export default Course
