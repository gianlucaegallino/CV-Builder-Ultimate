import "../styles/CVJobs.css";
export default function CVJobs({ data = null }) {

  let contents = [];
  let len = data.length;
  for (let i = 0; i< len; i++){
    let {
      company = false,
      jobTitle = false,
      description = false,
      startDate = false,
      endDate = false,
      key,
    } = data[i];

    contents.push(
      <div key={key}>
<h3>{company}</h3>
        <h4>{jobTitle}</h4>
        <p className="thick">{description && "• " + description}</p>
        <p>{startDate && "From: " + startDate}</p>
        <p>{endDate && "To: " + endDate}</p>
      </div>
    );
  }

  return (
    <>
      <hr></hr>
      <div className="work">
        <h2>Experience</h2>
        {contents}
      </div>
    </>
  );
}
