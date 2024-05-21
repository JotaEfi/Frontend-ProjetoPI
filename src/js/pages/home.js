import React from "react";
import Navbar from "../components/navbar.js";
import backgroundImage from "../../assets/img/site-background.jpg";
import Footer from "../components/footer.js";
export default function Home() {
  return (
    <div className="home pageContainer">
      <img className="background_image" src={backgroundImage} alt="" />
      <div className="white_space"></div>
      <Navbar />
      <div className="home_container">
        <section className="section_project">
          <div className="text_project_explanation">
            <h1>
              <h1>
                <strong>Projeto e desenvolvimento:</strong>
              </h1>
            </h1>
            <h1>
              Somos estudantes de sistema, e de acordo com o proposto pela nossa
              matéria de Projeto Integrador do 3º semestre, estamos
              desenvolvendo uma aplicaçção web de gerenciamento de Tasks.
            </h1>
            <h1>
              <strong>Projeto e desenvolvimento:</strong>
            </h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
              maiores nisi quibusdam nesciunt, amet obcaecati. Cum quis nihil
              sint nesciunt quod, facilis ullam. Ducimus tempore sit accusamus
              minus dolorem error.
            </h2>
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sed
              ullam veritatis suscipit eaque. Eveniet quod reiciendis similique
              vitae ipsum explicabo, illo consequuntur sapiente. Non ratione
              illo cupiditate laboriosam illum?
            </h3>
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
              maiores nisi quibusdam nesciunt, amet obcaecati. Cum quis nihil
              sint nesciunt quod, facilis ullam. Ducimus tempore sit accusamus
              minus dolorem error.
            </h2>
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sed
              ullam veritatis suscipit eaque. Eveniet quod reiciendis similique
              vitae ipsum explicabo, illo consequuntur sapiente. Non ratione
              illo cupiditate laboriosam illum?
            </h3>
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
              maiores nisi quibusdam nesciunt, amet obcaecati. Cum quis nihil
              sint nesciunt quod, facilis ullam. Ducimus tempore sit accusamus
              minus dolorem error.
            </h2>
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sed
              ullam veritatis suscipit eaque. Eveniet quod reiciendis similique
              vitae ipsum explicabo, illo consequuntur sapiente. Non ratione
              illo cupiditate laboriosam illum?
            </h3>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
