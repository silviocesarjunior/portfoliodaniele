import React, { useState } from 'react';
import "./header.css";
const Header = () => {

    window.addEventListener("scrool", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scroolY > 100)
    })

    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <header className="header">
                <div className="container d_flex">
                    <div className="logo"></div>
                    <img src="" alt="" />
                </div>
                <div className="navlink">
                    {/*<ul className="link f_flex uppercase">*/}
                    <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#features">features</a></li>
                        <li><a href="#portfolio">portfolio</a></li>
                        <li><a href="#resume">resume</a></li>
                        <li><a href="#clients">clients</a></li>
                        <li><a href="#blog">blog</a></li>
                        <li><a href="#contact">contact</a></li>
                        <li><button className='home-btn'>Clique aqui</button>
                        </li>
                    </ul>
                    <button className="toggle" onClick={() => setMobile(Mobile)}>
                        {Mobile ?
                            <i className="fas fa-times close home-btn"></i> :
                            <i className="fas fa-bars open"></i>
                        }
                    </button>
                </div>
            </header >
        </>
    )
}

export default Header