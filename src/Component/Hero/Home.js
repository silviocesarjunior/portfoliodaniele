import React from "react"
import "./home.css"
import hero from "../pic/hero.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>Bem vindo ao meu mundo</h3>
            <h2>
              Oi, eu sou a </h2><h1> Daniele Galvani
            </h1>
            <h2>

              <span>
                <Typewriter words={[" Arquiteta.", " Designer de interiores.", " Cadista."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>Arquiteta, Designer de interiores, cadista - faço trabalhos de freelancer, na página portfólios tem alguns dos projetos que realizei ao longo dos estudos e do estágio.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>Encontre-me nas redes sociais</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <a href=""><abbr title="facebook">
                      <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook" />
                      </abbr></a>
                  </button>
                  <button className='btn_shadow'>
                    <a href=""><abbr title="Instagram">
                      <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="Instagram" />
                    </abbr></a>
                  </button>
                  <button className='btn_shadow'>
                    <a href="https://www.linkedin.com/in/daniele-de-moraes-galvani-santos-41023b114/"><abbr title="Linkedin">
                      <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt="Linkedin" />
                    </abbr></a>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>Minhas principais skills abaixo</h4>
                <button className='btn_shadow'><abbr title="Autocad">
                  <img src="https://img.icons8.com/fluency/48/000000/autocad.png" alt="Autocad" />
                </abbr></button>
                <button className='btn_shadow'><abbr title="Revit">
                  <img src="https://img.icons8.com/color/48/000000/autodesk-revit.png" alt="Revit" />
                </abbr></button>
                <button className='btn_shadow'><abbr title="Photoshop">
                  <img src="https://img.icons8.com/color/48/000000/adobe-photoshop--v1.png" alt="Photoshop" />
                </abbr></button>

              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home