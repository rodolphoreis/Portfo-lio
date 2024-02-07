import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div id="contatos" className="footer-container">
        <h1 className="logo-footer">
          <a href="#">RReis</a>
        </h1>
        <div class="contact-info">
          <p>Email: rodolphoreis@live.com</p>
          <p>Telefone: +351938343482</p>
        </div>
        <div className="social-links">
          <a href="mailto:rodolphoreis@live.com">
            <FaEnvelope />
          </a>
          <a
            href="https://web.whatsapp.com/send?phone=351938343482"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
          <a href="https://www.linkedin.com/in/rodolphoreis/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/rodolphoreis" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
