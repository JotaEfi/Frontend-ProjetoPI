import React from "react";
import Navbar from "../components/navbar.js";
import backgroundImage from '../../assets/img/site-background.jpg';
export default function Home() {

    return (
        <div className="home">
            <img className="background_image" src={backgroundImage} alt="" />
            <Navbar />
            <div className="home_container">
                <section className="section_project">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque ipsam dicta rem rerum ullam nemo assumenda minima? Necessitatibus dolorem error voluptatem consectetur ullam aliquid aliquam at, delectus maiores quam.</h1>
                </section>
            </div>
        </div>
    )
}