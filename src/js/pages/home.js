import React from "react";
import Navbar from "../components/navbar.js";
import backgroundImage from '../../assets/img/site-background.jpg';
import Projeto from '../components/criarProjeto.js'

export default function Home() {

    return (
        <div className="home pageContainer">
            <img className="background_image" src={backgroundImage} alt="" />
            <div className="white_space">
                
            </div>
            <Navbar />
            <Projeto />
           
    
        </div>
    )
}
