import "../../styles/index.css";
import "../../styles/styles.css";
import React from "react";
import Navbar from "../components/navbar.js";
import WaitingComponent from "../components/waitingComponent.js";
import StartComponent from "../components/startComponent.js";
import FinishedComponent from "../components/finishedComponent.js";
import backgroundImage from "../../assets/img/site-background.jpg";
import { Textarea } from "@chakra-ui/react";
import Footer from "../components/footer.js"

function Home() {
  return (
    <div className="pageContainer">
      <img className="background_image" src={backgroundImage} alt="" />
      <div className="white_space"></div>
      <Navbar />
      <section className="toDoContainer">
        <StartComponent />
        <WaitingComponent />
        <FinishedComponent />
      </section>
      <Footer />
    </div>
  );
}
export default Home;

const tasks = [
  {
    id: 1,
    title: "Task 1",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 2,
    title: "Task 2",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 3,
    title: "Task 3",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
];
