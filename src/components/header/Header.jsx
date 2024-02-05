import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./header.css";

const Header = () => {
  const [classOn, setClassOn] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>RReis</h1>
        </div>

        <div
          className={classOn ? "menu-section on" : "menu-section"}
          onClick={() => setClassOn(!classOn)}
        >
          <div className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>

          <nav>
            <ul>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#skills">Habilidades</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
              <li>
                <a href="/">Contatos</a>
              </li>
              <li>
                <a
                  className="whatsapp-link"
                  href="https://web.whatsapp.com/send?phone=351938343482"
                  target="_blank"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
