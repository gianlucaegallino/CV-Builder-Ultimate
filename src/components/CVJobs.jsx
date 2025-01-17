import "../styles/CVJobs.css";
export default function CVJobs({ data = null }) {
  //TODO: Make dynamic
  const {
    company = false,
    jobTitle = false,
    description = false,
    startDate = false,
    endDate = false,
  } = data;
  return (
    <>
      <hr></hr>
      <div className="work">
        <h2>Experience</h2>
        <h3>{company}</h3>
        <h4>{jobTitle}</h4>
        <p className="thick">{description && "• " + description}</p>
        <p>{startDate && "From: " + startDate}</p>
        <p>{endDate && "To: " + endDate}</p>
      </div>
    </>
  );
}
