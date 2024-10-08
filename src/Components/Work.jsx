import React from "react";
import Plomberie from "../Assets/plomberie.png";
import Electricite from "../Assets/electricite.png";
import Serrurerie from "../Assets/serrure.png";

const Work = () => {
  const workInfoData = [
    {
      image: Plomberie,
      title: "🔧 Plomberie",
      text: "Nos plombiers sont des as du tuyau ! Que ce soit pour une fuite imprévue ou une installation complexe, ils s'attaquent à tout avec précision et rapidité.",
    },
    {
      image: Electricite,
      title: "⚡ Électricité",
      text: "Nos électriciens sont des magiciens du courant ! Ils s’occupent de tout, des pannes électriques aux nouvelles installations, avec une expertise qui assure sécurité et performance.",
    },
    {
      image: Serrurerie,
      title: "🔐 Serrurerie",
      text: "Nos serruriers sont des experts des clés et des serrures ! Que vous soyez enfermé dehors ou que vous ayez besoin d'une nouvelle serrure, ils interviennent rapidement pour garantir votre sécurité et votre tranquillité d'esprit.",
    },
  ];

  return (
    <section className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-text">
          Votre partenaire de confiance à Paris et en Petite Couronne pour des dépannages rapides,
          efficaces, et toujours dans la bonne humeur!
        </p>
        <h1 className="primary-heading">Passez-nous un appel.</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <article className="work-section-info" key={data.title}>
            <figure className="info-boxes-img-container">
              <img src={data.image} alt={data.title} />
            </figure>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
