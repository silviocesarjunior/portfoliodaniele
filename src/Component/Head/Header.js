import React, { useState } from 'react';
import "./header.css";
import logo from "../pic/daniele.png";

const Header = () => {

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })

    //toggle menu
    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <header className="header">
                <div className="container d_flex">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="navlist">
                        {/*<ul className="link f_flex uppercase">*/}
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase "} onClick={() => setMobile(false)}>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#recursos">recursos</a></li>
                            <li><a href="#portfolio">portfolio</a></li>
                            <li><a href="#curriculo">curriculo</a></li>
                            <li><a href="#clientes">clientes</a></li>
                            <li><a href="#blog">blog</a></li>
                            <li><a href="#contato">contato</a></li>
                            <li><button className="home-btn">Orçamento</button>
                            </li>
                        </ul>
                        <button className="toggle" onClick={() => setMobile(!Mobile)}>
                            {Mobile ?
                                <i className="fas fa-times close home-btn"></i> :
                                <i className="fas fa-bars open"></i>
                            }
                        </button>
                    </div>
                </div>
            </header >
            <section className="demo"></section>
        </>
    )
}

export default Header