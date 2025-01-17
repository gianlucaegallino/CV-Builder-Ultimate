export default function CvHeading({data=false}){
    //TODO: Make dynamic y Handle errors
    return(
        <div className="cvHeading">
            <h1>{data.name}</h1>
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.city}</p>
            <p>{data.country}</p>
        </div>
    )
}