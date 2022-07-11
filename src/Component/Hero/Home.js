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
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>Segue minhas skills abaixo</h4>
                <button className='btn_shadow'>
                <i class='fab fa-facebook-f'></i>
                </button>
                <button className='btn_shadow'>
                <i class='fab fa-instagram'></i>
                </button>
                <button className='btn_shadow'>
                <i class='fab fa-linkedin-in'></i>
                </button>
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