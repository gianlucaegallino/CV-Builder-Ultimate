import "../styles/CVHeading.css"
export default function CvHeading({data = null}){
    const {name=false, email = false, phone = false, address = false} = data;
    return(
        <div className="cvHeading">
            <h1 className="title">{name}</h1>
            <div className="lineContainer">
                <p>{email && "✉ " + email}</p>
                <p>{phone && "☎ " + phone}</p>
                <p>{address && "🗺 " + address}</p>
                
            </div>
        </div> 
    )
}