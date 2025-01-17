export default function CVEducation({data=false}) {
  return (
       //TODO: Make dynamic y Handle errors
    <div className="education">
      <h2>Education</h2>
      <h3>{data.university}</h3>
      <h4>{data.degree}</h4>
      <p>{data.startDate}</p>
      <p>{data.endDate}</p>
    </div>
  );
}
