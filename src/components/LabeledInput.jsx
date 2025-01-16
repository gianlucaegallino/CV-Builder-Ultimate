import "../styles/LabeledInput.css"
import { useState } from "react";
import ControlledInput from "./ControlledInput.jsx";

export default function LabeledInput({
  label = "Input Label",
  initialValue = "",
  validation = "",
  extraFunction = "null",
}) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    //TODO: Use the validation here
    //TODO: Add the extra functions here
    setValue(e.target.value);
  };

  return (
    <div className="myInput">
      <label>
        {label}
        <ControlledInput value={value} onChange={handleChange}/>
      </label>
    </div>
  );
}
