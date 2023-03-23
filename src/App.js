import React from "react";
import Header from "./Component/Head/Header";
import Home from "./Component/Hero/Home";
import Features from "./Component/Features/Features";
import Portfolio from "./Component/Portfolio/Portfolio";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App