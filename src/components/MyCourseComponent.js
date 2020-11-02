import React from 'react'

function MyCourseComponent({name,daystart,img}) {
    return (
        <div>
            <div className="your-course">
                <div className="front-end__basic">
                    <img src={img} alt="" />
                    <div className="basic__desc">
                        <h5>{name}</h5>
                        <p>{daystart}</p>
                        <ul>
                            <li>54 gio</li>
                            <li>25 video</li>
                            <li>20 hoc vien</li>
                        </ul>
                        <div className="progress-learn"></div>
                        <a href="" className="learn-button">
                            tiếp tục học
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCourseComponent
