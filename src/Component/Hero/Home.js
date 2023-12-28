import React from "react";
import "./home.css";
import hero from "../pic/hero.png";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>Bem vindo ao meu mundo</h3>
            <h2>Olá, eu sou a </h2>
            <h1> Daniele Galvani</h1>
            <h2>
              <span>
                <Typewriter
                  words={[
                    " Arquiteta.",
                    " Designer de Interiores.",
                    " Cadista.",
                    "Projetista.",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              Possuo habilidades em Autocad, Sketchup, Revit, com proficiência
              em inglês em nível B1. Dedico-me diariamente à prática em
              projetos, aprofundando-me no universo do design de interiores e na
              construção civil como um todo. <br />
              Para me manter atualizada, aproveito cursos gratuitos na Udemy,
              participo de transmissões ao vivo na área da construção civil e
              mantenho-me atualizada por meio da leitura de artigos e materiais
              relacionados."
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>Encontre-me nas redes sociais</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <a href="https://www.linkedin.com/in/danielegalvanisantos/">
                      <abbr title="Linkedin">
                        <img
                          src="https://img.icons8.com/fluency/48/000000/linkedin.png"
                          alt="Linkedin"
                        />
                      </abbr>
                    </a>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>Minhas principais skills:</h4>
                <button className="btn_shadow">
                  <abbr title="Autocad">
                    <img
                      src="https://img.icons8.com/fluency/48/000000/autocad.png"
                      alt="Autocad"
                    />
                  </abbr>
                </button>
                <button className="btn_shadow">
                  <abbr title="Revit">
                    <img
                      src="https://img.icons8.com/color/48/000000/autodesk-revit.png"
                      alt="Revit"
                    />
                  </abbr>
                </button>
                <button className="btn_shadow">
                  <abbr title="Sketchup">
                    <img
                      src="https://img.icons8.com/color/48/google-sketchup.png"
                      alt="Sketchup"
                    />
                  </abbr>
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
