import "../styles/CustomHeader.css";
export default function CustomHeader({ func }) {
  return (
    <header className="hdr">
      <p className="Title">Ultimate CV Builder</p>
      {/*  This button opens a can of worms. TODO: Fix functionality, someday.                
 <button onClick={func}>Wipe Data</button> */}
    </header>
  );
}
