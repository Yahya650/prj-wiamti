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
        id="features"
        className="features-area cell-items default-padding bg-gray"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h2>Nos fonctionnalités</h2>
                <p>
                  Journée d'apprentissage désirant des dépenses informées
                  matérielles renvoyées six. Elle lui a permis de l'inviter à
                  exposer un autre. Conviction raisonnablement sollicitude me mr
                  à la discrétion raisonnable. Âge sorti lit complet jour perdu.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-lg-5 features-thumb">
              <img src="assets/img/app/app-1.png" alt="Thumb" />
            </div> */}
            <div className="col-lg-12 features-items">
              <div className="row">
                <div className="col-lg-6 col-md-6 single-item">
                  <div className="item">
                    <div className="icon">
                      <i className="fas fa-mouse-pointer" />
                    </div>
                    <div className="info">
                      <h4>Glisser-déposer</h4>
                      <p>
                        Journée d'apprentissage désirant des dépenses informées
                        matérielles renvoyées six. Elle lui a permis de
                        l'inviter à exposer un autre. Conviction raisonnablement
                        sollicitude me mr à la discrétion raisonnable. Âge sorti
                        lit complet jour perdu.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 single-item">
                  <div className="item">
                    <div className="icon">
                      <i className="fas fa-layer-group" />
                    </div>
                    <div className="info">
                      <h4>Intégration d'application</h4>
                      <p>
                        Journée d'apprentissage désirant des dépenses informées
                        matérielles renvoyées six. Elle lui a permis de
                        l'inviter à exposer un autre. Conviction raisonnablement
                        sollicitude me mr à la discrétion raisonnable. Âge sorti
                        lit complet jour perdu.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 single-item">
                  <div className="item">
                    <div className="icon">
                      <i className="fas fa-paint-brush" />
                    </div>
                    <div className="info">
                      <h4>Palettes de couleurs</h4>
                      <p>
                        Journée d'apprentissage désirant des dépenses informées
                        matérielles renvoyées six. Elle lui a permis de
                        l'inviter à exposer un autre. Conviction raisonnablement
                        sollicitude me mr à la discrétion raisonnable. Âge sorti
                        lit complet jour perdu.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 single-item">
                  <div className="item">
                    <div className="icon">
                      <i className="fas fa-image" />
                    </div>
                    <div className="info">
                      <h4>Haute Résolution</h4>
                      <p>
                        Journée d'apprentissage désirant des dépenses informées
                        matérielles renvoyées six. Elle lui a permis de
                        l'inviter à exposer un autre. Conviction raisonnablement
                        sollicitude me mr à la discrétion raisonnable. Âge sorti
                        lit complet jour perdu.
                      </p>
                    </div>
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

export default OurServices;
