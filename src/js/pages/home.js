import React from "react";
import Navbar from "../components/navbar.js";
import backgroundImage from '../../assets/img/site-background.jpg';

export default function Home() {

    return (
        <div className="home pageContainer">
            <img className="background_image" src={backgroundImage} alt="" />
            <div className="white_space">
                
            </div>
            <Navbar />
            <div className="projeto">
                <button className="btnProject">
                    <span className="btnAddProject">
                        +
                    </span>

                    Novo projeto

                </button>
            </div>
    
        </div>
    )
}