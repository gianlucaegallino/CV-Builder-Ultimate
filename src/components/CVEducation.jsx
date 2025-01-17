import "../styles/CVEducation.css";

export default function CVEducation({ data }) {
  const {
    university = false,
    degree = false,
    startDate = false,
    endDate = false,
  } = data;
  return (
    //TODO: Make dynamic
    <>
      <hr></hr>
      <div className="education">
        <div>
          <h2>Education</h2>
          <h3>{university}</h3>
          <h4>{degree}</h4>
          <p>{startDate && "From: " + startDate}</p>
          <p>{endDate && "To: " + endDate}</p>
        </div>
      </div>
    </>
  );
}
