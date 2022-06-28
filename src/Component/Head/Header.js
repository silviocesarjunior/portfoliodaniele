import React from 'react';
import "./header.css";
const Header = () => {
    return (
        <header className="header">
            <div className="container d_flex">
                <div className="logo"></div>
                <img src="" alt="" />
            </div>
            <div className="navlink">
                <ul className="link f_flex uppercase">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">features</a></li>
                    <li><a href="#portfolio">portfolio</a></li>
                    <li><a href="#resume">resume</a></li>
                    <li><a href="#clients">clients</a></li>
                    <li><a href="#blog">blog</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
                <button className="toggle"></button>
            </div>

        </header >
    )
}

export default Header