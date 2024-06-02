
import Navbar from "../components/navbar";
import StartedProject from "../components/startedProject.js";
import StartProject from "../components/startProject.js";
import DoneProject from "../components/doneProjects.js";

function Projetos() {
 
  return (
    <>
      <Navbar />
      <StartProject />
      <StartedProject />
      <DoneProject />
    </>
  );
}

export default Projetos;
