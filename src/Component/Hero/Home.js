import React from 'react';
import "./home.css";
import { Typewriter } from "react-simple-typewriter";
import hero from "../pic/hero.png";

const Home = () => {
    return (
        <>
            <section className="hero" id="home">
                <div className="container f_flex top">
                    <div className="left top">
                        <h3>Bem vindo a minha página</h3>
                        <h1>Olá, Eu sou a <span>Daniele Galvani</span></h1>
                        <h2>
                            'sou
                            <span>
                                <Typewriter words={[" Arquiteta.'", " Designer de interiores.'", " Paisagista.'", " Cadista.'"]}
                                    loop={0}
                                    cursor cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>
                        </h2>
                        <p>Sou arquiteta formada e focada em tornar o seu sonho realidade</p>
                        <div className="hero_btn d_flex">
                            <div className="col_1">
                                <h4>Visite minhas páginas</h4>
                                <div className="button">
                                    <button className="btn_shadow">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>
                                    <button className="btn_shadow">
                                        <i className="fab fa-instagram"></i>
                                    </button>
                                    <button className="btn_shadow">
                                        <i className="fab fa-linkedin-in"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="col_1">
                                <h4>Minhas habilidades</h4>
                                <button className="btn_shadow">
                                    <i className="fab fa-linkedin-in"></i>
                                </button>
                                <button className="btn_shadow">
                                    <i className="fab fa-linkedin-in"></i>
                                </button>
                                <button className="btn_shadow">
                                    <i className="fab fa-linkedin-in"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="right">
                            <div className="right_img">
                                <img src={hero} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home