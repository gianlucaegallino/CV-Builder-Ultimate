import "../styles/normalize.css";
import "../styles/App.css";
import Curriculum from "./Curriculum";
import CustomHeader from "./CustomHeader";
import CVForm from "./CVForm";
import { useState } from "react";

function App() {
  //TODO: Add values to this state to test stuff. 
  const [personalData, setPersonalData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+1 234-567-8901",
    city: "Buenos Aires",
    country: "Argentina",
  });
  const [educationData, setEducationData] = useState({
    university: "University of Example",
    degree: "Bachelor of Science in Computer Science",
    startDate: "2018-08-15",
    endDate: "2022-05-20",
  });
  const [jobData, setJobDataData] = useState({
    company: "Tech Solutions Inc.",
    jobTitle: "Software Developer",
    description: "Developed and maintained web applications, ensuring optimal performance and user experience.",
    startDate: "2022-06-01",
    endDate: "2024-12-31",
  });
  return (
    <>
      <CustomHeader />

      <main>
        <Curriculum personalData={personalData} educationData={educationData} jobData = {jobData}/>
        <CVForm />
      </main>
    </>
  );
}

export default App;
