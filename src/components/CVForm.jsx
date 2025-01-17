import "../styles/CVForm.css"

import InputWrapper from "./InputWrapper";
import LabeledInput from "./LabeledInput";

export default function CVForm({personalFn, educationFn, jobFn}) {
  return (
    <div className="CVForm">
      <InputWrapper title="Personal Information">
        <LabeledInput label="Full Name" field="name" extraFunction={personalFn}></LabeledInput>
        <LabeledInput label="Email" field="email" extraFunction={personalFn}></LabeledInput>
        <LabeledInput label="Phone Number" field="phone" extraFunction={personalFn}></LabeledInput>
        <LabeledInput label="City" field="city" extraFunction={personalFn}></LabeledInput>
        <LabeledInput label="Country" field="country" extraFunction={personalFn}></LabeledInput>
      </InputWrapper>

      {/*         TODO: Make this support multiples. */}
      <InputWrapper title="Educational Experience">
        <LabeledInput label="University Name" field="university" extraFunction={educationFn}></LabeledInput>
        <LabeledInput label="Degree" field="degree" extraFunction={educationFn}></LabeledInput>
        <LabeledInput label="Start Date" field="startDate" extraFunction={educationFn}></LabeledInput>
        <LabeledInput label="Graduation Date" field="endDate" extraFunction={educationFn}></LabeledInput>
      </InputWrapper>


      {/*         TODO: Make this support multiples. */}
      <InputWrapper title="Experience">
      <LabeledInput label="Company Name" field="company" extraFunction={jobFn}></LabeledInput>
        <LabeledInput label="Job Title" field="jobTitle" extraFunction={jobFn}></LabeledInput>
        <LabeledInput label="Start Date" field="startDate" extraFunction={jobFn}></LabeledInput>
        <LabeledInput label="End Date" field="endDate" extraFunction={jobFn}></LabeledInput>
        <LabeledInput label="Description" field="description" extraFunction={jobFn}></LabeledInput>
      </InputWrapper>
    </div>
  );
}
