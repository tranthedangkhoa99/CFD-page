import React from 'react'

function TeamMentorComponent({img,name,desc}) {
    return (
            <div className="team-mentor">
                <div className="mentor__card">
                    <div className="mentor__card-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="mentor__card-text">
                        <h4>{name}</h4>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
    )
}

export default TeamMentorComponent
