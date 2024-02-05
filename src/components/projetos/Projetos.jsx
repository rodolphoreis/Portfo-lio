import "./projetos.css";
import Swal from "sweetalert2";
import "aos/dist/aos.css";
import AOS from "aos";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

AOS.init();

const Projetos = () => {
  const openModal = () => {
    Swal.fire({
      imageUrl: "/img/cv.png",
      imageAlt: "A tall image",
      confirmButtonColor: "#4a95d2",
      confirmButtonText: "Fechar",
    });
  };

  return (
    <div className="container">
      <div className="projetos" data-aos="fade-right">
        <div className="projetos_text">
          <h1>Projetos</h1>
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
          <Card className="custom-card">
            <CardMedia
              className="custom-card-img"
              component="img"
              alt="green iguana"
              height="170"
              image="/img/img1.png"
            />
            <CardContent className="custom-card-content">
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="custom-card-content_p custom-modified-text"
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <a href="#" className="custom-button share-button" size="small">
                GITHUB
              </a>
              <a
                href="#"
                className="custom-button learn-more-button"
                size="small"
              >
                DEPLOY
              </a>
            </CardActions>
          </Card>

          <Card className="custom-card">
            <CardMedia
              className="custom-card-img"
              component="img"
              alt="green iguana"
              height="170"
              image="/img/img1.png"
            />
            <CardContent className="custom-card-content">
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="custom-card-content_p custom-modified-text"
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <a href="#" className="custom-button share-button" size="small">
                GITHUB
              </a>
              <a
                href="#"
                className="custom-button learn-more-button"
                size="small"
              >
                DEPLOY
              </a>
            </CardActions>
          </Card>
        </div>

        {/* <button data-aos="fade-right" onClick={openModal}>
          Curriculo
        </button> */}
      </div>
    </div>
  );
};

export default Projetos;
