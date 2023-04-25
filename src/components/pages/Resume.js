import ResumePDF from "../assets/ResumePDF.pdf"

const Resume = () =>{
    return(
      <div className="resume-content">
        <a className="download-link"href={ResumePDF} download="ResumePDF"> Click to Download Resume </a>
      <main className="resume-container">
        <embed className="resume" src={ResumePDF}  />
    </main>
      </div>
    )}
    export default Resume;