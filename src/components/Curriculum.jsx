import "../styles/Curriculum.css"
export default function Curriculum(){
    return(
        <div className="curriculum">
            <div className="curriculumPage">
                <div className="cvHeading">
                    <h1>[Name]</h1>
                    <p>[Email]</p>
                    <p>[Phone Number]</p>
                    <p>[City, Country]</p>
                </div>
                <div className="cvBody">
                    <div className="education">
                        <h2>Education</h2>
                        <h3>[University]</h3>
                        <h4>[Degree]</h4>
                        <p>[Start, grad]</p>
                    </div>
                    <div className="work">
                        <h2>Experience</h2>
                        <h3>[Company]</h3>
                        <h4>[Job Title]</h4>
                        <p>[Description]</p>
                        <p>[Start, end]</p>
                    </div>
                </div>
            </div>
        </div>
    )

}