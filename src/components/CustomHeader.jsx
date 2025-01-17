import "../styles/CustomHeader.css"
export default function CustomHeader({func}){
    return(
        <header className="hdr">
                <p className="Title">Ultimate CV Builder</p>
                <button onClick={func}>Wipe Data</button>
        </header>
    )
}