import React from "react"
import  {BsGithub, BsLinkedin} from "react-icons/bs"

const Home = () =>{
  
  const OpenInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer")
  }
    return(
      <div className='background'>
      <div className="title-column">
        <div className="Quote">"Believe you can and you're halfway there." - Theodore Roosevelt</div>
        <div className="animate__animated animate__flipInY">
          <h1 className="title" fontSize="300%">HI, I'm Oscar Gomez Barragan | Software Developer</h1>
        </div>
          <div className="social-icons">
            <BsGithub onClick={() => {OpenInNewTab("https://github.com/oagomezz")}} className="github"color="black" size="3%" />
            <BsLinkedin onClick={() => {OpenInNewTab("https://www.linkedin.com/in/oscar-gomez-barragan/")}}className="linkedin"color="black" size="3%" />
          </div>
      </div>
      </div>
    )}
    
    export default Home