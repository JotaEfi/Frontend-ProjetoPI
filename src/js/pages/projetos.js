
import Navbar from "../components/navbar";
import StartedProject from "../components/startedProject.js";
import StartProject from "../components/startProject.js";
import DoneProject from "../components/doneProjects.js";

function Projetos() {
 
  return (
    <>
      <Navbar />
      <div className="mainProjects">

      <StartProject />
      <StartedProject />
      <DoneProject />
      </div>
     
    </>
  );
}

export default Projetos;
