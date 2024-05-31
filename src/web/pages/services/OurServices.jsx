import React, { useEffect } from "react";
import HeroPages from "../../../components/HeroPages";
import { Link } from "react-router-dom";

const OurServices = () => {
  useEffect(() => {
    document.title = "BTI - Nos Services";
  }, []);
  return (
    <>
      <HeroPages
        nameOfPage="nos services"
        path={
          <ul className="breadcrumb">
            <li>
              <Link to="/home">Accueil</Link>
            </li>
            <li className="active">nos services</li>
          </ul>
        }
      />
      <div
        id="services"
        className="services-area bg-gray default-padding bottom-less"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h2>Ce que nous faisons</h2>
                <p>
                  Chez <b>BTI</b>, nous sommes passionnés par l'avenir de la
                  maison intelligente. Depuis notre création, nous nous
                  engageons à fournir des solutions innovantes et personnalisées
                  pour rendre les maisons plus sûres, plus confortables et plus
                  connectées que jamais.
                </p>
              </div>
            </div>
          </div>
          <div className="services-box text-center">
            <div className="row">
              {/* Élément unique */}
              <div className="col-lg-4 col-md-6 single-item">
                <div className="item" style={{ minHeight: "386px" }}>
                  <i className="flaticon-scroll" />
                  <h5>Caméra de surveillance</h5>
                  <p>
                    Gardez un œil sur votre maison où que vous soyez avec nos
                    systèmes de caméras de surveillance haute définition.
                    Protégez votre foyer et votre famille grâce à une
                    surveillance continue et une technologie de pointe.
                  </p>
                </div>
              </div>
              {/* Fin de l'élément unique */}
              {/* Élément unique */}
              <div className="col-lg-4 col-md-6 single-item">
                <div className="item" style={{ minHeight: "386px" }}>
                  <i className="flaticon-feature" />
                  <h5>Vidéophone</h5>
                  <p>
                    Simplifiez l'accès à votre domicile avec nos vidéophones
                    intuitifs. Contrôlez qui entre chez vous et communiquez
                    facilement avec les visiteurs, offrant ainsi une sécurité
                    supplémentaire et une tranquillité d'esprit.
                  </p>
                </div>
              </div>
              {/* Fin de l'élément unique */}
              {/* Élément unique */}
              <div className="col-lg-4 col-md-6 single-item">
                <div className="item" style={{ minHeight: "386px" }}>
                  <i className="flaticon-intersect" />
                  <h5>Automatisme de portes</h5>
                  <p>
                    Oubliez les tracas liés à l'ouverture et à la fermeture
                    manuelle de vos portes. Nos systèmes d'automatisation de
                    portes offrent commodité, sécurité et élégance, vous
                    permettant de contrôler l'accès à votre propriété en toute
                    simplicité.
                  </p>
                </div>
              </div>
              {/* Fin de l'élément unique */}
              {/* Élément unique */}
              <div className="col-lg-6 col-md-6 single-item">
                <div className="item" style={{ minHeight: "386px" }}>
                  <i className="flaticon-intersection" />
                  <h5>Précablage Informatique</h5>
                  <p>
                    Le précablage informatique est une étape cruciale dans la
                    mise en place de l'infrastructure réseau d'une entreprise.
                    Il consiste à installer l'ensemble des câbles nécessaires
                    pour connecter tous les équipements informatiques, tels que
                    les ordinateurs, les serveurs, les imprimantes, et autres
                    périphériques, à un réseau commun.
                  </p>
                </div>
              </div>
              {/* Fin de l'élément unique */}
              {/* Élément unique */}
              <div className="col-lg-6 col-md-6 single-item">
                <div className="item" style={{ minHeight: "386px" }}>
                  <i className="flaticon-resolution" />
                  <h5>Sytéme anti-incendie / Intrusion Découvrez</h5>
                  <p>
                    Protégez votre famille et vos biens avec nos systèmes de
                    sécurité avancés. Grâce à nos solutions anti-incendie et
                    anti-intrusion, vous pouvez dormir sur vos deux oreilles en
                    sachant que votre maison est entre de bonnes mains.
                  </p>
                </div>
              </div>
              {/* Fin de l'élément unique */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
