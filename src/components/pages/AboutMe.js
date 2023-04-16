import React from "react";
import AboutMePhoto from "../assets/AboutMePhoto.jpg"

const AboutMe = () =>{
return(
  <div className="page-content">
    <img alt="Oscar overlooking the Grand Canyon"className="about-me-image" src={AboutMePhoto}></img>
    <div className="text-container">
      <h3> Biography
        <p className="aboutme">
          Welcome&#44; my name is Oscar Gomez&#44; and I am a Full Stack developer currently pursuing my education at Learn Academy&#46; I am enthusiastic about applying my skillset to secure a job within the industry that will allow me to utilize my strength&#39;s to their fullest potential&#46;
        </p>
        <p className="aboutme">
          My passion for coding stems from its ability to create anything imaginable through careful planning and implementation&#46; As an individual who strongly believes in the power of technology for good&#44; I am convinced that software development, under the right circumstances&#44; can have a profound and positive impact on society&#46;
        </p>
      </h3>
    </div>
  </div>

)}

export default AboutMe