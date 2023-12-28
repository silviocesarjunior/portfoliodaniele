import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <footer class="footer">
          <div class="box-container-footer">
            <div class="box-footer">
              <h3>Links rápidos</h3>
              <a class="links" href="#home">
                Home
              </a>
              <a class="links" href="#features">
                Serviços
              </a>
              <a class="links" href="#portfolio">
                Portfólio
              </a>
            </div>
            <div class="boxfooter">
              <h3>Contatos</h3>
              <p>
                <i class="fas fa-phone"></i> +12 99102-6146
              </p>
              <p>
                <i class="fas fa-envelope"></i> danimoraesgalvani@gmail.com
              </p>
              <p>
                <i class="fas fa-map"></i> São Paulo, Brasil
              </p>
              </div>
            </div>
            <div class="boxfooter2">
              <h3>Reflexão</h3>
              <p>
                "se os teus sonhos não te assustam, eles não são grandes o
                suficiente."
              </p>
              <p>Ellen Johnson Sirleaf</p>
            </div>
        </footer>
      </section>
    </>
  );
};

export default Contact;
