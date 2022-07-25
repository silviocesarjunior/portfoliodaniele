import React, { useState } from 'react';
import "./contact.css";
import contact from "../pic/contact.png";

const Contact = () => {
  const [data, setData] = useState({
    nome: "",
    telefone: "",
    email: "",
    assunto: "",
    meensagem: "",
  })

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `Meu nome é: ${data.nome}. 
        Meu telefone é: ${data.telefone}. 
        Meu email é: ${data.email}. 
        O assunto seria: ${data.assunto}. 
        Sua mensagem é: ${data.mensagem}. 
        `
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>Contato</h4>
            <h1>Entre em contato</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact} alt='' />
                </div>
                <div className='details'>
                  <h1>Daniele Galvani</h1>
                  <p>Arquiteta e designer de interiores</p>
                  <p>Disponível para trabalhos freelancer, PJ e com carteira assinada</p> <br />
                  <p>Email: danimoraesgalvani@gmail.com</p> <br />
                  <span>Contate através</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                      <a href="https://www.linkedin.com/in/daniele-de-moraes-galvani-santos-41023b114/"><abbr title="Linkedin">
                        <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt="Linkedin" />
                      </abbr></a>
                    </button>
                   
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>Seu nome</span>
                    <input type='text' name='nome' value={data.nome} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>Telefone</span>
                    <input type='number' name='telefone' value={data.telefone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>E-mail </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>Assunto </span>
                  <input type='text' name='assunto' value={data.assunto} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>Sua mensagem </span>
                  <textarea cols='30' rows='10' name='mensagem' value={data.mensagem} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  Enviar mensagem <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default Contact