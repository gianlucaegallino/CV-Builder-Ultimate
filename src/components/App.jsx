import "../styles/normalize.css";
import "../styles/App.css";
import Curriculum from "./Curriculum";
import CustomHeader from "./CustomHeader";
import CVForm from "./CVForm";

function App() {
  return (
    <>
      <CustomHeader />

      <main>
        <Curriculum />
        <CVForm />
      </main>
    </>
  );
}

export default App;
