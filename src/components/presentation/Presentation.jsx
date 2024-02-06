import "./presentation.css";
import Swal from "sweetalert2";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

const Presentation = () => {
  const openModal = () => {
    Swal.fire({
      imageUrl: "/img/cv.png",
      imageAlt: "A tall image",
      confirmButtonColor: "#4a95d2",
      confirmButtonText: "Fechar",
    });
  };

  return (
    <main>
      <div className="container">
        <div className="presentation" data-aos="fade-right">
          <h5>Bem-vindo ao meu Portfólio</h5>
          <h2>Olá, eu sou</h2>
          <h1 className="h1Color">Rodolpho Reis</h1>
          <h2>Desenvolvedor Front-end</h2>
          <button data-aos="fade-right" onClick={openModal}>
            Curriculo
          </button>
        </div>
        <div data-aos="fade-left" className="image">
          <img src="./img/Foto.png" alt="Minha Foto de Apresentação" />
        </div>
      </div>
    </main>
  );
};

export default Presentation;
