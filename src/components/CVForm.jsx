import "../styles/CVForm.css"

import InputWrapper from "./InputWrapper";
import LabeledInput from "./LabeledInput";

export default function CVForm() {
  return (
    <div className="CVForm">
      <InputWrapper title="Personal Information">
        <LabeledInput label="Full Name"></LabeledInput>
        <LabeledInput label="Email"></LabeledInput>
        <LabeledInput label="Phone Number"></LabeledInput>
        <LabeledInput label="City"></LabeledInput>
        <LabeledInput label="Country"></LabeledInput>
      </InputWrapper>

      {/*         TODO: Make this support multiples. */}
      <InputWrapper title="Educational Experience">
        <LabeledInput label="University Name"></LabeledInput>
        <LabeledInput label="Degree"></LabeledInput>
        <LabeledInput label="Start Date"></LabeledInput>
        <LabeledInput label="Graduation Date"></LabeledInput>
      </InputWrapper>


      {/*         TODO: Make this support multiples. */}
      <InputWrapper title="Experience">
      <LabeledInput label="Company Name"></LabeledInput>
        <LabeledInput label="Position Title"></LabeledInput>
        <LabeledInput label="Start Date"></LabeledInput>
        <LabeledInput label="End Date"></LabeledInput>
        <LabeledInput label="Description"></LabeledInput>
      </InputWrapper>
    </div>
  );
}
