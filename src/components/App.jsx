import "../styles/normalize.css";
import "../styles/App.css";
import Curriculum from "./Curriculum";
import CustomHeader from "./CustomHeader";
import CVForm from "./CVForm";
import { useState } from "react";

function App() {
  
  const [personalData, setPersonalData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+1 234-567-8901",
    address: "Buenos Aires, Argentina"
  });
  const [educationData, setEducationData] = useState({
    university: "University of Example",
    degree: "Bachelor of Science in Computer Science",
    startDate: "2018-08-15",
    endDate: "2022-05-20",
  });
  const [jobData, setJobData] = useState({
    company: "Tech Solutions Inc.",
    jobTitle: "Software Developer",
    description:
      "Developed and maintained web applications, ensuring optimal performance and user experience.",
    startDate: "2022-06-01",
    endDate: "2024-12-31",
  });

  function handlePersonalDataChange(field, value){
    if (field){
      setPersonalData({...personalData, [`${field}`]:value})
    }
  }

  function handleEducationDataChange(field, value){
    if (field){
      setEducationData({...educationData, [`${field}`]:value})
    }
  }

  function handleJobDataChange(field, value){
    if (field){
      setJobData({...jobData, [`${field}`]:value})
    }
  }

  function wipeData(){
    setPersonalData({});
    setEducationData({});
    setJobData({});
  }


  return (
    <>
      <CustomHeader func={wipeData}/>

      <main>
        <Curriculum
          personalData={personalData}
          educationData={educationData}
          jobData={jobData}
        />
        <CVForm 
        personalFn = {handlePersonalDataChange}
        educationFn = {handleEducationDataChange}
        jobFn = {handleJobDataChange}
        />
      </main>
    </>
  );
}

export default App;
