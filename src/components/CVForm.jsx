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
  newEdFn,
  newJobFn,
  destroyEducation,
  destroyJob,
}) {
  let educations = [];
  let jobs = [];

  let elen = edData.length;
  let jlen = jobData.length;

  //make forms for education
  for (let i = 0; i < elen; i++) {
    const {
      university = "",
      degree = "",
      startDate = "",
      endDate = "",
      key,
    } = edData[i];

    educations.push(
      <div key={key} className="group">
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
        <button
          className="del span"
          onClick={() => {
            destroyEducation(i);
          }}
        >
          Remove entry
        </button>
      </div>
    );
  }

  //make forms for jobs
  for (let j = 0; j < jlen; j++) {
    const {
      company = "",
      jobTitle = "",
      description = "",
      startDate = "",
      endDate = "",
      key,
    } = jobData[j];

    jobs.push(
      <div key={key} className="group">
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
        <button className="del single" onClick={() => destroyJob(j)}>
          Remove entry
        </button>
      </div>
    );
  }

  return (
    <div className="CVForm">
      <InputWrapper title="Personal Information">
        <div className="group">
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
        </div>
      </InputWrapper>

      <InputWrapper title="Education">
        {educations}
        <button className="add" onClick={newEdFn}>
          + Add Education
        </button>
      </InputWrapper>

      <InputWrapper title="Experience">
        {jobs}
        <button className="add" onClick={newJobFn}>
          + Add Experience
        </button>
      </InputWrapper>
    </div>
  );
}
