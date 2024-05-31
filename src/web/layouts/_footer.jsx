import React from "react";
import { Link } from "react-router-dom";

const _footer = () => {
  return (
    <footer className="default-padding bg-light mb-0 pb-4">
      <div className="container">
        <div className="f-items">
          <div className="row">
            <div className="col-lg-3 col-md-6 item">
              <div className="f-item">
                <img
                  src="/assets/img/Untitled design (2) (1) (1).png"
                  alt="Logo"
                />
                <p>
                  société implanté sur Casablanca, et spécialisée dans Nouvelle
                  technologie. Nous sommes leader du marché dans le domaine de
                  la domatique et nous proposons les meilleures solutions à nos
                  clients.
                </p>
                <Link
                  className="btn circle btn-theme effect btn-sm"
                  to="/our-services"
                >
                  Commencer
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 item">
              <div className="f-item link">
                <h4>Quick Link</h4>
                <ul>
                  <li>
                    <Link className="smooth-menu" to="/home">
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link className="smooth-menu" to="/about-us">
                      À Propos de Nous
                    </Link>
                  </li>
                  <li>
                    <Link className="smooth-menu" to="/our-services">
                      Nos Services
                    </Link>
                  </li>
                  <li>
                    <Link className="smooth-menu" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 item">
              <div className="f-item link">
                <h4>CE QUE NOUS FAISONS</h4>
                <ul>
                  <li>
                    <Link to="#">Caméra De Surveillance</Link>
                  </li>
                  <li>
                    <Link to="#">Vidéophone</Link>
                  </li>
                  <li>
                    <Link to="#">Automatisme De Portes</Link>
                  </li>
                  <li>
                    <Link to="#">Précablage Informatique</Link>
                  </li>
                  <li>
                    <Link to="#">
                      Sytéme Anti-Incendie / Intrusion Découvrez
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 item">
              <div className="f-item twitter-widget">
                <h4>Infos de Contact</h4>
                <p>
                  {/* société implanté sur Casablanca, et spécialisée dans Nouvelle
                  technologie. Nous sommes leader du marché dans le domaine de
                  la domatique et nous proposons les meilleures solutions à nos
                  clients. */}
                </p>
                <div className="address">
                  <ul>
                    <li className="d-flex align-items-center">
                      <div className="icon">
                        <i className="fas fa-home" />
                      </div>
                      <div className="info">
                        <h5>Address:</h5>
                        <span>
                          hay raja 2 rue 3, Casablanca, Morocco, 25000
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope" />
                      </div>
                      <div className="info">
                        <h5>Email:</h5>
                        <a href="mailto:bti.technologie@gmail.com">
                          <span>bti.technologie@gmail.com</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-phone" />
                      </div>
                      <div className="info">
                        <h5>Phone:</h5>
                        <a href="tel:+212666364567">
                          <span>+212 666 364567</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Footer Bottom */}
        <div className="footer-bottom">
          <div className="col-lg-12 text text-center">
            <p>
              © Copyright {new Date().getFullYear()}. All Rights Reserved by{" "}
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCExZrxka4cs-e2yKMzsC-dg"
              >
                skaydi
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default _footer;
