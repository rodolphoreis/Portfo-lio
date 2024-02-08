import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import "./styles.css";

const HoverCard = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
    });
  }, []);

  return (
    <>
      <div className="containerCard">
        <div className="card">
          <img src="/img-projetos/teste.png" alt="projetos" />

          <div className="content">
            <h2>Clínica Odontológica</h2>
            <p>
              Esta aplicação web, construída com React, serve como uma interface
              para gerenciar os serviços de uma clínica odontológica. Apresenta
              design responsivo, animações AOS e uma experiência amigável ao
              usuário.
            </p>
            <a
              href="https://github.com/rodolphoreis/Dental-Clinic"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://dental-clinic-rafaella.vercel.app/"
              target="_blank"
            >
              Deploy
            </a>
          </div>
        </div>

        <div className="card">
          <img src="/img-projetos/portugal.png" alt="projeto" />
          <div className="content">
            <h2>Portugal</h2>
            <p>
              Explore a beleza de Portugal com este aplicativo React. Cada foto
              cativante abre uma nova rota, permitindo que você descubra a rica
              herança e as paisagens deslumbrantes deste país encantador.
            </p>
            <a
              href="https://github.com/rodolphoreis/album-portugal"
              target="_blank"
            >
              GitHub
            </a>
            <a href="https://album-portugal.vercel.app/" target="_blank">
              Deploy
            </a>
          </div>
        </div>

        <div className="card">
          <img src="/img-projetos/contatos.png" alt="projeto" />
          <div className="content">
            <h2>Contatos</h2>
            <p>
              É um aplicativo desenvolvido com React Router, oferecendo uma
              experiência de gerenciamento simples e eficaz para contatos, com
              navegação intuitiva e funcionalidades completas.
            </p>
            <a href="https://github.com/rodolphoreis/contacts" target="_blank">
              GitHub
            </a>
            <a href="https://contacts-navy-chi.vercel.app/" target="_blank">
              Deploy
            </a>
          </div>
        </div>

        <div className="card">
          <img src="/img-projetos/form.png" alt="projetos" />

          <div className="content">
            <h2>Formulário React</h2>
            <p>
              Feito com react-hook-form, para proporcionar a melhor experiência
              ao usuário e trazer estratégias de validação consistentes, com
              campos inteligentes e um design agradável.
            </p>
            <a
              href="https://github.com/rodolphoreis/Form-React/tree/main"
              target="_blank"
            >
              GitHub
            </a>
            <a href="https://form-react-kohl.vercel.app/" target="_blank">
              Deploy
            </a>
          </div>
        </div>

        <div className="card">
          <img src="/img-projetos/lista.png" alt="projeto" />
          <div className="content">
            <h2>Lista</h2>
            <p>
              O aplicativo 'Lista de Viagem' é uma ferramenta simples para
              ajudar os viajantes a organizarem seus itens essenciais de forma
              conveniente, com a capacidade de filtrar por categoria.
            </p>
            <a
              href="https://github.com/rodolphoreis/to_do_list"
              target="_blank"
            >
              GitHub
            </a>
            <a href="https://to-do-list-omega-rose.vercel.app/" target="_blank">
              Deploy
            </a>
          </div>
        </div>

        <div className="card">
          <img src="/img-projetos/api.png" alt="projeto" />
          <div className="content">
            <h2>API Formulário</h2>
            <p>
              Projeto backend referente ao Formulário de Candidatura! Este
              servidor Node.js e Express gerencia as operações CRUD para
              usuários, fornecendo uma API robusta para interagir com o
              frontend.
            </p>
            <a
              href="https://github.com/rodolphoreis/api-usuarios-rodolpho"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverCard;
