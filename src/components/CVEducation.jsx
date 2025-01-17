export default function CVEducation({data}) {

const {university=false, degree = false, startDate = false, endDate = false} = data;
  return (
       //TODO: Make dynamic 
    <div className="education">
      <h2>Education</h2>
      <h3>{university}</h3>
      <h4>{degree}</h4>
      <p>{startDate}</p>
      <p>{endDate}</p>
    </div>
  );
}
