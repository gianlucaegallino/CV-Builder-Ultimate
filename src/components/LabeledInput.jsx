import "../styles/LabeledInput.css"
import { useState } from "react";
import ControlledInput from "./ControlledInput.jsx";

export default function LabeledInput({
  label = "Input Label",
  initialValue = "",
  extraFunction = null,
  field = null
}) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
    extraFunction(field, e.target.value);
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
