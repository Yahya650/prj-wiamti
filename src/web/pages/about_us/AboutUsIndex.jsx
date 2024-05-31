import React, { useEffect } from "react";
import HeroPages from "../../../components/HeroPages";
import { Link } from "react-router-dom";

const AboutUsIndex = () => {
  useEffect(() => {
    document.title = "BTI - À Propos de Nous";
  }, []);
  return (
    <>
      <HeroPages
        nameOfPage="À Propos de Nous"
        path={
          <ul className="breadcrumb">
            <li>
              <Link to="/home">Accueil</Link>
            </li>
            <li className="active">À Propos de Nous</li>
          </ul>
        }
      />
      <div id="about" className="about-area bg-gray default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 default info">
              <h4>À propos de BTI</h4>
              <h2>
                Façonnons l'avenir dès aujourd'hui <br />
                avec BTI
              </h2>
              <p>
                BTI s'engage à rendre votre quotidien plus sûr, plus confortable
                et plus intelligent que jamais. Nous combinons une expertise de
                pointe avec une approche centrée sur le client pour offrir des
                solutions innovantes qui répondent à vos besoins les plus
                pressants. Avec BTI, vous avez un partenaire fiable pour
                atteindre vos objectifs et réaliser votre vision pour l'avenir.
              </p>
              <a href="#" className="btn circle btn-theme effect btn-md">
                En savoir plus
              </a>
              <div className="bottom-info">
                <h3>Pourquoi nous choisir</h3>
                <ul>
                  <li>
                    <i className="fas fa-shield-alt" />{" "}
                    <span>Expertise de pointe dans le domaine</span>
                  </li>
                  <li>
                    <i className="fas fa-user-check" />{" "}
                    <span>Approche centrée sur le client</span>
                  </li>
                  <li>
                    <i className="fas fa-lightbulb" />{" "}
                    <span>Innovation constante</span>
                  </li>
                  <li>
                    <i className="fas fa-award" />{" "}
                    <span>Engagement envers l'excellence</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 services-info">
              <div className="row">
                <div className="col-lg-6 col-md-6 single-item">
                  <div className="item" style={{ minHeight: "338px" }}>
                    <i className="fas fa-shield-alt" />
                    <h4>Sécurité renforcée</h4>
                    <p>
                      Votre sécurité est notre priorité absolue. Nous utilisons
                      les dernières technologies pour garantir la protection de
                      vos données.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 single-item">
                  <div className="item" style={{ minHeight: "338px" }}>
                    <i className="fas fa-cogs" />
                    <h4>Personnalisation</h4>
                    <p>
                      Nous vous offrons des solutions sur mesure pour répondre à
                      vos besoins spécifiques, garantissant ainsi une expérience
                      utilisateur optimale.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 single-item">
                  <div className="item" style={{ minHeight: "338px" }}>
                    <i className="fas fa-mobile-alt" />
                    <h4>Technologie de pointe</h4>
                    <p>
                      Nous utilisons les dernières avancées technologiques pour
                      vous fournir des solutions de haute qualité et à la pointe
                      de l'innovation.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 single-item">
                  <div className="item" style={{ minHeight: "338px" }}>
                    <i className="fas fa-headset" />
                    <h4>Support 24/7</h4>
                    <p>
                      Notre équipe dévouée est disponible 24 heures sur 24, 7
                      jours sur 7, pour répondre à toutes vos questions et vous
                      offrir une assistance complète.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsIndex;
