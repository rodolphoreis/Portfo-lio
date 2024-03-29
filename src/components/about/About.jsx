import "./about.css";

const About = () => {
  return (
    <div className="container_about">
      <div className="photo_about_left" data-aos="fade-right">
        <img src="/img/fotoAbout.png" alt="Desenvolvedor" />
      </div>
      <div className="text_about" data-aos="fade-right">
        <h1 id="about">Sobre</h1>
        <p>
          Sou um profissional apaixonado por números, desafios, lógica e
          solucionar problemas, formado em Matemática e Engenharia Civil. Minha
          jornada na programação começou durante a Engenharia Civil, onde me
          envolvi com lógica e linguagem de programação. Resido em Guimarães há
          cinco anos, dedicando meus dias à programação. Utilizo meu
          conhecimento em matemática e engenharia para solucionar problemas de
          forma prática, aplicando raciocínio lógico em meus projetos.
          <br />
          Sou um desenvolvedor de software qualificado com experiência,
          JavaScript, Typescript, React, Node, Express, entre outras. Aprendo
          rápido e colaboro junto com os clientes para criar soluções
          eficientes, escaláveis e fáceis de usar que resolvem problemas do
          mundo real. Vamos trabalhar juntos para dar vida às suas ideias!
        </p>
      </div>
      <div className="photo_about_right" data-aos="fade-left">
        <img src="/img/fotoAbout.png" alt="Desenvolvedor" />
      </div>
    </div>
  );
};

export default About;
