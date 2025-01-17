export default function CVJobs({data=false}){
    return (
        <div className="work">
        <h2>Experience</h2>
        <h3>{data.company}</h3>
        <h4>{data.jobTitle}</h4>
        <p>{data.description}</p>
        <p>{data.startDate}</p>
        <p>{data.endDate}</p>
    </div>
    );
}