import "../styles/CVEducation.css";

export default function CVEducation({ data = null}) {
  let contents = [];
  let len = data.length;
  for (let i = 0; i< len; i++){
    let {
      university = false,
      degree = false,
      startDate = false,
      endDate = false,
      key,
    } = data[i];

    contents.push(
      <div key={key}>
        <h3>{university}</h3>
        <h4>{degree}</h4>
        <p>{startDate && "From: " + startDate}</p>
        <p>{endDate && "To: " + endDate}</p>
      </div>
    );
  }


  return (
    <>
      <hr></hr>
      <div className="education">
        <h2>Education</h2>
        {contents}
      </div>
    </>
  );
}
