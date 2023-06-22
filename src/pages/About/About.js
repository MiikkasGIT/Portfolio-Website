import React from 'react'
import Top from '../../components/Top/Top'
import './About.css'
import portrait from '../../assets/img/portrait.jpg';

import { ReactComponent as WorkIcon } from '../../assets/img/work.svg'
import { ReactComponent as SchoolIcon } from '../../assets/img/school.svg'
import { Helmet } from 'react-helmet';

import timelineElements from './timelineElements'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules'
import "react-vertical-timeline-component/style.min.css"
import BackgroundParticles from '../../particles'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const About = () => {

  let WorkIconStyles = { background: "#04AA6D" };
  let SchoolIconStyles = { background: "#04AA6D" };

  return (
      <>

    <Helmet>
        <title>Miikka Koensler | Über mich</title>
    </Helmet>

    <BackgroundParticles/>

      <Top />

    <section class="about">
		<div class="about-container">
      <div className='about-portrait'>
			<img className={"portrait"} alt='portrait' src={ portrait }/>
      </div>
			<div class="about-text">
				<h1 className='about-titel'>Über mich</h1>
                <hr className="hr-about"/>
				<h5 className='about-me'>Hey, <span>ich bin Miikka.</span></h5>
				<p>Ich bin 19 Jahre und Student aus Osnabrück.</p>
				<p>In meiner Freizeit mache ich gerne Sport und spiele Basketball. Wenn man mich nicht auf dem Sportplatz findet, beschäftige ich mich mit Webdesign und Webdevelopment.</p>
                <p>In diesem Bereich konnte ich auch schon einige Erfahrungen sammeln, schau dir also gerne meine Projekte an. :) </p>
        <Link to={"/projekte"}>
        <motion.button className='more-button' whileHover={{ backgroundColor: "#04AA6D", color: "white", y: -5}}>Meine Projekte</motion.button>
       </Link>
      </div>
		</div>
	</section>
    <br/><br/>
      <h1 className='title'>Lebenslauf</h1>
      <hr/><br/>

      <VerticalTimeline>
        {
          timelineElements.map(element => {
            let isWorkIcon = element.icon === "work";
            let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== "";


            return(
            <VerticalTimelineElement
            key={element.key}
            date={element.date}
            dateClassName="date"
            iconStyle={isWorkIcon ? WorkIconStyles : SchoolIconStyles}
            icon={isWorkIcon ? <WorkIcon/> : <SchoolIcon/>}
            >
              <h3 className='vertical-timeline-element-title'>{element.title}</h3>
              <h5 className='vertical-timeline-element-subtitle'>{element.location}</h5>
              <p id='description'>{element.description}</p>
              {showButton && (<a className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`} href='/'>{element.buttonText}</a>)}
            </VerticalTimelineElement>
            )
          })
        };
      </VerticalTimeline>
      </>
  )
}

export default About
