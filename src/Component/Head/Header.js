import React, { useState } from 'react';
import "./header.css";

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
                       <a href="#home"><h2>Daniele Galvani</h2></a> 
                    </div>
                    <div className="navlist">
                        {/*<ul className="link f_flex uppercase">*/}
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase "} onClick={() => setMobile(false)}>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#features">Serviços</a></li>
                            <li><a href="#portfolio">portfolio</a></li>
                            <li><a href="#contact">contato</a></li>
                            <li><a href="https://wa.me/55012991026146">
                                <button className="home-btn">Orçamento</button></a>
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