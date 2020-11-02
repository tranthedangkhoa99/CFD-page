import React from 'react'

function StudentComponent({img,name,desc}) {
    return (
        <div className="team-students">
            <div className="student__card">
                    <div className="student__card-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="student__card-text">
                        <h4>{name}</h4>
                        <p>{desc}</p>
                    </div>
                </div>
        </div>
    )
}

export default StudentComponent
