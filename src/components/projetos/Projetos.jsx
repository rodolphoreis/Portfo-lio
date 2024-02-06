import "./projetos.css";
import "aos/dist/aos.css";
import HoverCard from "../card/HoverCard";

const Projetos = () => {
  return (
    <div className="container">
      <div className="projetos" data-aos="fade-right">
        <div className="projetos_text">
          <h1 id="projetos">Projetos</h1>
          <p id="projetos">
            Os projetos a seguir mostram minhas habilidades e experiência por
            meio de exemplos do mundo real do meu trabalho. Cada projeto é
            brevemente descrito com links para repositórios de código e
            demonstrações ao vivo. Isso reflete minha capacidade de resolver
            problemas complexos, trabalhar com diferentes tecnologias e
            gerenciar projetos de forma eficaz.
          </p>
        </div>
        <div className="projetos_cards">
          <HoverCard />
        </div>
      </div>
    </div>
  );
};

export default Projetos;
