import React from "react";
import {SiReact, SiRubyonrails} from "react-icons/si"
import {DiRuby, DiJavascript, DiPostgresql} from "react-icons/di"
import AboutMePhoto from '../assets/AboutMePhoto.jpg'
import Footer from "../components/Footer";

const AboutMe = () =>{
return(
  <>
  <div className="about-me-sections">
  <div className="opaque-background">
    <div className="image-included">
    <div className="page-content">
      <h2>I&apos;m a</h2> 
        <h1 className="job-title">Software Developer</h1>
      <h2>Interested in Full-Stack Software Developer and Backend Software Developer positions.</h2>
    </div>
    <br />
    <br />
    <br />
    <img className="about-me-image"src={AboutMePhoto}></img>
    </div>
  <div className="about-me">
    <div className="about-me-title">ABOUT ME</div>
    <div className="paragraph">
      <p>Welcome, my name is Oscar Gomez, and I am a Full Stack developer and a United States Marine Corps Veteran. I am enthusiastic about writing code and finding solutions to common day problems with the help of technology.</p>
      <p>My passion for coding stems from its ability to create anything imaginable through careful planning and implementation. As an individual who strongly believes in the power of technology for good, I am convinced that software development, under the right circumstances, can have a profound and positive impact on society.</p>
    </div>
    <div>
    <div className="about-me-title"> Languages and Technologies</div>
      </div>
        <div className="tech-icons">
          <SiReact size="100px"/>
          <SiRubyonrails size="100px"/>
          <DiRuby size="100px"/>
          <DiJavascript size="100px"/>
          <DiPostgresql size="100px"/>
        </div>
      </div>
    </div>
  </div>
    </>
)}

export default AboutMe