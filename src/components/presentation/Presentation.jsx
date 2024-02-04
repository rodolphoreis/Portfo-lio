import "./presentation.css";

const Presentation = () => {
  return (
    <main>
      <div className="container">
        <div className="presentation" data-aos="fade-right">
          <h5>Bem-vindo ao meu Portfólio</h5>
          <h2>Olá, eu sou</h2>
          <h1 className="h1Color">Rodolpho Reis</h1>
          <h2>Desenvolvedor Front-end</h2>
        </div>
        <div data-aos="fade-left" className="image">
          <img src="./img/img2.png" alt="Minha Foto de Apresentação" />
        </div>
      </div>
    </main>
  );
};

export default Presentation;
