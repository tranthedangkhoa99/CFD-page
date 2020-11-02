import React from 'react'
import Banner from './components/Banner'
import OnlineCourse from './components/OnlineCourse'
import OfflineCourse from './components/OfflineCourse'
import Video from './components/Video'
import TeamSlider from './components/TeamSlider'
// import AccordionComponents from"../../screens/course/components/AccordionComponents"

function Home() {
    return (
        <main className="home-wrapper">
            <Banner/>
            <OnlineCourse/>
            <OfflineCourse/>
            <Video/>
            <TeamSlider/>
            {/* <AccordionComponents/> */}
        </main>
    )
}

export default Home
