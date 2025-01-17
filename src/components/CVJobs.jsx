export default function CVJobs({data}){
    //TODO: Make dynamic y Handle errors
    const {company=false, jobTitle = false, description = false, startDate = false, endDate = false} = data;
    return (
        <div className="work">
        <h2>Experience</h2>
        <h3>{company}</h3>
        <h4>{jobTitle}</h4>
        <p>{description}</p>
        <p>{startDate}</p>
        <p>{endDate}</p>
    </div>
    );
}