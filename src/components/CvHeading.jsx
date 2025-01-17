export default function CvHeading({data}){
    const {name=false, email = false, phone = false, city = false, country = false} = data;
    //TODO: Make dynamic y Handle errors
    return(
        <div className="cvHeading">
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{city}</p>
            <p>{country}</p>
        </div>
    )
}