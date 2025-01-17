import "../styles/normalize.css";
import "../styles/App.css";
import Curriculum from "./Curriculum";
import CustomHeader from "./CustomHeader";
import CVForm from "./CVForm";
import { useState } from "react";

function App() {
  // Defines initial dataset

  const [personalData, setPersonalData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+1 234-567-8901",
    address: "Buenos Aires, Argentina",
  });
  const [educationData, setEducationData] = useState([
    {
      university: "Example Institute of Technology",
      degree: "Master of Science in Data Science",
      startDate: "2023-09-01",
      endDate: "2025-06-30",
      key: crypto.randomUUID(),
    },
    {
      university: "University of Example",
      degree: "Bachelor of Science in Computer Science",
      startDate: "2018-08-15",
      endDate: "2022-05-20",
      key: crypto.randomUUID(),
    },
  ]);
  const [jobData, setJobData] = useState([
    {
      company: "Tech Solutions Inc.",
      jobTitle: "Software Developer",
      description:
        "Developed and maintained web applications, ensuring optimal performance and user experience.",
      startDate: "2022-06-01",
      endDate: "2024-12-31",
      key: crypto.randomUUID(),
    },
    {
      company: "Innovatech Solutions",
      jobTitle: "Data Analyst Intern",
      description:
        "Analyzed datasets to provide actionable insights, optimized reporting processes, and contributed to predictive modeling projects.",
      startDate: "2021-05-01",
      endDate: "2021-08-31",
      key: crypto.randomUUID(),
    },
  ]);

  // Defines event handlers

  function handlePersonalDataChange(field, index, value) {
    if (field) {
      setPersonalData({ ...personalData, [`${field}`]: value });
    }
  }

  function handleEducationDataChange(field, index, value) {
    if (field && index != null) {
      let newData = [...educationData];
      newData[index] = { ...newData[index], [`${field}`]: value };
      setEducationData(newData);
    }
  }

  function handleJobDataChange(field, index, value) {
    if (field && index != null) {
      let newData = [...jobData];
      newData[index] = { ...newData[index], [`${field}`]: value };
      setJobData(newData);
    }
  }

  function wipeData() {
    setPersonalData({});
    setEducationData({});
    setJobData({});
  }

  function addNewEducation() {
    if (educationData.length < 3) {
      let newData = [...educationData];
      newData.push({ key: crypto.randomUUID() });
      console.log(newData);
      setEducationData(newData);
    } else alert("Cant add more than 3 educations.");
  }

  function addNewJob() {
    if (jobData.length < 3) {
      let newData = [...jobData];
      newData.push({ key: crypto.randomUUID() });
      console.log(newData);
      setJobData(newData);
    } else alert("Cant add more than 3 jobs.");
  }

  return (
    <>
      <CustomHeader func={wipeData} />

      <main>
        <Curriculum
          personalData={personalData}
          educationData={educationData}
          jobData={jobData}
        />
        <CVForm
          personalFn={handlePersonalDataChange}
          educationFn={handleEducationDataChange}
          jobFn={handleJobDataChange}
          perData={personalData}
          edData={educationData}
          jobData={jobData}
          newEdFn={addNewEducation}
          newJobFn={addNewJob}
        />
      </main>
    </>
  );
}

export default App;
