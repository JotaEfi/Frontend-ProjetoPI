import "../../styles/index.css";
import "../../styles/styles.css";
import React from "react";
import Navbar from "../components/navbar.js";
import WaitingComponent from "../components/waitingComponent.js";
import ToDoComponents from "../components/startComponent.js";
// import FinishedComponent from "../components/finishedComponent.js";
import backgroundImage from "../../assets/img/site-background.jpg";
// import { Textarea } from "@chakra-ui/react";
// import Footer from "../components/footer.js"
import { TaskProvider } from "../../services/taskContext.js";

function Tasks() {
  return (
    <div className="pageContainer">
      <img className="background_image" src={backgroundImage} alt="" />
      <div className="white_space"></div>
      <Navbar />
      <TaskProvider>
      <section className="toDoContainer">
     
        <ToDoComponents />
        <WaitingComponent />
        {/* <FinishedComponent /> */}
   
      </section>
      </TaskProvider>
      {/* <Footer /> */}
    </div>
  );
}
export default Tasks;

// const tasks = [
//   {
//     id: 1,
//     title: "Task 1",
//     info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
//   },
//   {
//     id: 2,
//     title: "Task 2",
//     info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
//   },
//   {
//     id: 3,
//     title: "Task 3",
//     info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
//   },
// ];
