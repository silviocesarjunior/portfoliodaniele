import React, { useState } from 'react';
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || (email === "") | (message === "")) {
      alert("please fill in all fields");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };
    emailjs
      .send(
        "service_kb3vskm",
        "template_17j4yrp",
        templateParams,
        "dXnl2Ho1Wixl32gU3"
      )
      .then(
        (response) => {
          console.log("Email sent", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Error: ", err);
        }
      );
  }
  return (
    <>
      <section id="contact">
        <div className="divContact">
      <h1 className="titleContact">Formulário de contato</h1>
      <div className="containerContact">
        <form className="form" onSubmit={sendEmail}>
          <input
            className="input"
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className="input"
            type="text"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className="textarea"
            placeholder="Mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className="buttonContact" type="submit" value="Send" />
        </form>
      </div>
      <div className="icons_footer">
      </div>
      </div>
    </section>
    </>
  )
}


export default Contact