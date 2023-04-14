import ResumePDF from "../assets/ResumePDF.pdf"

const Resume = () =>{
    return(
      <div className="resume-content">
        <a href={ResumePDF} download="ResumePDF"> Click to Download Resume </a>
      <main className="resume-container">
        <embed className="resume" src={ResumePDF} width="750" height="560px" />
    </main>
      </div>
    )}
    export default Resume;