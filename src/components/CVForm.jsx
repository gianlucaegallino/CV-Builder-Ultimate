import "../styles/CVForm.css";

import InputWrapper from "./InputWrapper";
import LabeledInput from "./LabeledInput";

export default function CVForm({
  personalFn,
  educationFn,
  jobFn,
  perData,
  edData,
  jobData,
}) {
  let educations = [];
  let jobs = [];

  let elen = edData.length;
  let jlen = edData.length;

  //make forms for education
  for (let i = 0; i < elen; i++) {
    let {
      university = false,
      degree = false,
      startDate = false,
      endDate = false,
      key,
    } = edData[i];

    educations.push(
      <div key={key}>
        <LabeledInput
          label="University Name"
          field="university"
          initialValue={university}
          extraFunction={educationFn}
          index={i}
        ></LabeledInput>
        <LabeledInput
          label="Degree"
          field="degree"
          initialValue={degree}
          extraFunction={educationFn}
          index={i}
        ></LabeledInput>
        <LabeledInput
          label="Start Date"
          field="startDate"
          initialValue={startDate}
          extraFunction={educationFn}
          index={i}
        ></LabeledInput>
        <LabeledInput
          label="Graduation Date"
          field="endDate"
          initialValue={endDate}
          extraFunction={educationFn}
          index={i}
        ></LabeledInput>
      </div>
    );
  }

  //make forms for jobs
  for (let j = 0; j < jlen; j++) {
    let {
      company = false,
      jobTitle = false,
      description = false,
      startDate = false,
      endDate = false,
      key,
    } = jobData[j];

    jobs.push(
      <div key={key}>
        <LabeledInput
          label="Company Name"
          field="company"
          initialValue={company}
          extraFunction={jobFn}
          index={j}
        ></LabeledInput>
        <LabeledInput
          label="Job Title"
          field="jobTitle"
          initialValue={jobTitle}
          extraFunction={jobFn}
          index={j}
        ></LabeledInput>
        <LabeledInput
          label="Start Date"
          field="startDate"
          initialValue={startDate}
          extraFunction={jobFn}
          index={j}
        ></LabeledInput>
        <LabeledInput
          label="End Date"
          field="endDate"
          initialValue={endDate}
          extraFunction={jobFn}
          index={j}
        ></LabeledInput>
        <LabeledInput
          label="Description"
          field="description"
          initialValue={description}
          extraFunction={jobFn}
          index={j}
        ></LabeledInput>
      </div>
    );
  }

  function addNewEducation() {}

  function addNewJob() {}

  return (
    <div className="CVForm">
      <InputWrapper title="Personal Information">
        <LabeledInput
          label="Full Name"
          field="name"
          extraFunction={personalFn}
          initialValue={perData.name}
        ></LabeledInput>
        <LabeledInput
          label="Email"
          field="email"
          extraFunction={personalFn}
          initialValue={perData.email}
        ></LabeledInput>
        <LabeledInput
          label="Phone Number"
          field="phone"
          extraFunction={personalFn}
          initialValue={perData.phone}
        ></LabeledInput>
        <LabeledInput
          label="Address"
          field="address"
          extraFunction={personalFn}
          initialValue={perData.address}
        ></LabeledInput>
      </InputWrapper>

      <InputWrapper title="Education">
        {educations}
        <button onClick={addNewEducation}></button>
      </InputWrapper>

      <InputWrapper title="Experience">
        {jobs}
        <button onClick={addNewJob}></button>
      </InputWrapper>
    </div>
  );
}
