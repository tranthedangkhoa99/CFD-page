import React, { useState } from 'react'
import AccordionContent from "./AccordionContent"

function AccordionComponents() {

    const [accordions, setaccordion] = useState([
        {
            day: "Ngày 1",
            content: "Giới thiệu HTML,SEO,BEM",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit libero assumenda tempora iusto aliquid reprehenderit sed ducimus sapiente, aperiam totam?",
            open: false
        },
        {
            day: "Ngày 2",
            content: "Giới thiệu HTML,SEO,BEM",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit libero assumenda tempora iusto aliquid reprehenderit sed ducimus sapiente, aperiam totam?",
            open: false
        },
        {
            day: "Ngày 3",
            content: "Giới thiệu HTML,SEO,BEM",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit libero assumenda tempora iusto aliquid reprehenderit sed ducimus sapiente, aperiam totam?",
            open: false
        },
        {
            day: "Ngày 4",
            content: "Giới thiệu HTML,SEO,BEM",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit libero assumenda tempora iusto aliquid reprehenderit sed ducimus sapiente, aperiam totam?",
            open: false
        },
        {
            day: "Ngày 5",
            content: "Giới thiệu HTML,SEO,BEM",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit libero assumenda tempora iusto aliquid reprehenderit sed ducimus sapiente, aperiam totam?",
            open: false
        },
        {
            day: "Ngày 6",
            content: "Giới thiệu HTML,SEO,BEM",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit libero assumenda tempora iusto aliquid reprehenderit sed ducimus sapiente, aperiam totam?",
            open: false
        },
    ])

    const toggleAccordion = index =>{
        setaccordion(accordions.map((accordion,i) =>{
            if(i === index){
                accordion.open = !accordion.open
            }
            else{
                accordion.open = false
            }
            return accordion
        }))
    }

    return (
        <div className="accordion-wrapper">
            {accordions.map((accordion, i) => (
                <div>
                    <AccordionContent accordion={accordion} index={i} toggleAccordion={toggleAccordion}/>
                </div>
            )
            )}
        </div>
    );
}

export default AccordionComponents
