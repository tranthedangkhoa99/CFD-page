import React from 'react'

function AccordionContent({accordion,index,toggleAccordion}) {
    return (
        <div className={"accordion-content " + (accordion.open ? 'open' : '')} 
            key={index} 
            onClick={()=>toggleAccordion(index)}
        >
            <div className="content__course">
                <div className="day__course">
                    {accordion.day}
                </div>
                <div className="intro__course">
                    {accordion.content}
                </div>
            </div>
            <div className="expand__course">
                {accordion.desc}
            </div>
        </div>
    )
}

export default AccordionContent
