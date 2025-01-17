import "../styles/Curriculum.css"
import CvHeading from "./CvHeading.jsx"
import CVEducation from "./CVEducation.jsx"
import CVJobs from "./CVJobs.jsx"

export default function Curriculum({personalData=false, educationData=false, jobData=false}){
    return(
        <div className="curriculum">
            <div className="curriculumPage">
                <CvHeading data={personalData}/>
                <div className="cvBody">
                    <CVEducation data={educationData}></CVEducation>
                    <CVJobs data={jobData}></CVJobs>
                </div>
            </div>
        </div>
    )

}