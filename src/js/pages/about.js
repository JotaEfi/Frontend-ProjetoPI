import React from "react";
import Navbar from "../components/navbar.js";
import backgroundImage from '../../assets/img/site-background.jpg';
import Footer from "../components/footer.js"
export default function About() {

    return (
        <div className="home pageContainer">
            <img className="background_image" src={backgroundImage} alt="" />
            <div className="white_space">
                
            </div>
            <Navbar />
            <div className="home_container">
                <section className="section_project">
                    <div className="text_project_explanation"><h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque ipsam dicta rem rerum ullam nemo assumenda minima? Necessitatibus dolorem error voluptatem consectetur ullam aliquid aliquam at, delectus maiores quam.</h1>
               <h2    h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor maiores nisi quibusdam nesciunt, amet obcaecati. Cum quis nihil sint nesciunt quod, facilis ullam. Ducimus tempore sit accusamus minus dolorem error.</h2>
               <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sed ullam veritatis suscipit eaque. Eveniet quod reiciendis similique vitae ipsum explicabo, illo consequuntur sapiente. Non ratione illo cupiditate laboriosam illum?</h3>
               </div>
                     </section>
            </div>
        <Footer/>
        </div>
    )
}