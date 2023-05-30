import { React } from "react"
import  {BsGithub, BsLinkedin} from "react-icons/bs"
import { motion } from "framer-motion"
import "../../styles/BirdAnimation.scss"
import "../../styles/App.scss"
import "../../styles/Portfolio.scss"

const Home = () =>{
  const OpenInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer")
  }
    return(
      <motion.div 
        className='background'
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x: window.innerWidth, transition:  {duration: .15}}}
      >
        <div className='bird-container bird-container--one'>
        <div className='bird bird-1'>
          </div>  
          </div>  
        <div className='bird-container bird-container--two'>
        <div className='bird bird-2'>
          </div>  
          </div>  
        <div className='bird-container bird-container--three'>
        <div className='bird bird-3'>
          </div>  
          </div>  
        <div className='bird-container bird-container--four'>
        <div className='bird bird-4'>
          </div>  
          </div>  
        <div className="title-column">
          <div className="Quote">"Believe you can and you're halfway there." - Theodore Roosevelt</div>
            <div className="line-1 anim-typewriter">
              <h1 className="title" fontSize="300%">Hi, I'm Oscar Gomez Barragan | Software Developer</h1>
            </div>
          <div className="social-icons">
            <BsGithub onClick={() => {OpenInNewTab("https://github.com/oagomezz")}} className="github"color="black" size="3%" />
            <BsLinkedin onClick={() => {OpenInNewTab("https://www.linkedin.com/in/oscar-gomez-barragan/")}}className="linkedin"color="black" size="3%" />
          </div>
        </div>
      </motion.div>
    )}
    
    export default Home