import React, { useEffect } from "react";
import _footer from "./../../layouts/_footer";
import _header from "./../../layouts/_header";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import CountUp from "react-countup";
import { successToast } from "../../../config/Toasts/toasts";

const HomeIndex = () => {
  useEffect(() => {
    document.title = "BTI - Accueil";
  }, []);
  const [loadingSendEmail, setLoadingSendEmail] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoadingSendEmail(true);

    // Simulate sending email asynchronously
    setTimeout(() => {
      setLoadingSendEmail(false);
      successToast("Email envoyé avec Succès");
      e.target.reset();
    }, 1000);
  };

  return (
    <>
      <div className="banner-area shape-index transparent-nav content-double text-medium">
        <div className="box-table">
          <div className="box-cell">
            <div className="container">
              <div className="double-items thumb-140">
                <div className="row align-center">
                  <div className="col-lg-6 left-info simple-video">
                    <div
                      className="content"
                      data-animation="animated fadeInUpBig"
                    >
                      <h1>
                        L'avenir dès aujourd'hui avec <span>BTI</span>{" "}
                        <small>
                          <span className="h4" style={{ color: "#232323" }}>
                            (Boothman techno Informatique)
                          </span>
                        </small>
                      </h1>

                      <p>
                        l'avenir dès aujourd'hui avec BTI ,pour rendre votre
                        quotidien plus sûr,plus confortable et plus intelligente
                        que jamais
                      </p>
                      <div className="button">
                        <Link
                          className="btn circle btn-theme border btn-md"
                          to="/our-services"
                        >
                          Commencer
                        </Link>
                        <Link to="/about-us" className="btn-simple">
                          En savoir plus
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 right-info">
                    <img src="/assets/img/illustration/3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
            <div className="wavesshape">
              <img src="/assets/img/shape/1.png" alt="Shape" />
            </div>
          </div>
        </div>
      </div>

      <div
        id="services"
        className="services-area bg-theme-small default-padding bottom-less"
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

      <div id="about" className="choseus-area default-padding">
        <div className="container">
          <div className="choseus-items">
            <div className="row">
              <div className="col-lg-6 thumb">
                <img src="/assets/img/illustration/1.png" alt="Illustration" />
              </div>
              <div className="col-lg-6 info">
                <h2>
                  Créez votre page d'application <br />
                  avec des développeurs experts
                </h2>
                <p>
                  Chez BTI, nous nous engageons à transformer vos idées en
                  applications innovantes et efficaces. Nos développeurs experts
                  utilisent les technologies les plus récentes pour créer des
                  solutions sur mesure qui répondent parfaitement à vos besoins.
                </p>
                <ul>
                  <li>
                    Nous cultivons une sollicitude agréable pour nos clients.
                  </li>
                  <li>Nous offrons des bénédictions propres et améliorées.</li>
                  <li>Chaque moment est consacré à la famille.</li>
                  <li>Les opinions et les propriétés sont fournies.</li>
                </ul>
                <div className="row">
                  <div className="col-lg-6 col-md-6 item">
                    <div className="fun-fact">
                      <div className="timer" data-to={230} data-speed={5000}>
                        <CountUp start={0} end={230} duration={5} />
                      </div>
                      <span className="medium">Clients satisfaits</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 item">
                    <div className="fun-fact">
                      <div className="timer" data-to={89} data-speed={5000}>
                        <CountUp start={0} end={89} duration={5} />
                      </div>
                      <span className="medium">Agents professionnels</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="work-process-area bg-gray default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h2>Notre Processus</h2>
                <p>
                  Découvrez comment nous travaillons pour vous offrir les
                  meilleures solutions. Chaque étape est soigneusement planifiée
                  et exécutée pour garantir des résultats optimaux.
                </p>
              </div>
            </div>
          </div>
          <div className="works-process-items text-center">
            <div className="row">
              {/* Single Item */}
              <div className="col-lg-4 single-item">
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-chess" />
                    <span>01</span>
                  </div>
                  <div className="info">
                    <h4>Discussion</h4>
                    <p>
                      Nous commençons par une discussion approfondie pour
                      comprendre vos besoins et objectifs. Cette phase nous
                      permet de définir une direction claire.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-lg-4 single-item">
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-bong" />
                    <span>02</span>
                  </div>
                  <div className="info">
                    <h4>Stratégie &amp; Tests</h4>
                    <p>
                      Nous élaborons une stratégie détaillée et effectuons des
                      tests rigoureux pour assurer la qualité et l'efficacité de
                      notre solution avant de la déployer.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-lg-4 single-item">
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-copy" />
                    <span>03</span>
                  </div>
                  <div className="info">
                    <h4>Rapports</h4>
                    <p>
                      Nous fournissons des rapports détaillés pour vous tenir
                      informé de l'avancement et des résultats. Cette
                      transparence vous permet de suivre chaque étape du projet.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading single text-center">
                <h2>Avis des clients</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="testimonial-items text-center">
                <div
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval={500000}
                  id="testimonial-carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item">
                      <span className="quote" />
                      <p>
                        BTI a transformé notre infrastructure informatique.
                        Leurs solutions sont innovantes et efficaces. Nous avons
                        constaté une amélioration significative de notre
                        productivité.
                      </p>
                      <h4>Saad Khaled</h4>
                      <span>Directeur Technique</span>
                    </div>

                    <div className="carousel-item active">
                      <span className="quote" />
                      <p>
                        J'ai été très impressionné par la qualité du service
                        fourni par BTI. Leur équipe est très professionnelle et
                        réactive. Je recommande vivement leurs services.
                      </p>
                      <h4>Ahmed Nassim</h4>
                      <span>Responsable Marketing</span>
                    </div>

                    <div className="carousel-item">
                      <span className="quote" />
                      <p>
                        L'équipe de BTI est formidable! Leur support client est
                        exceptionnel et toujours prêt à aider. Nous sommes très
                        satisfaits de notre collaboration avec eux.
                      </p>
                      <h4>Amina Yassine</h4>
                      <span>Chef de Projet</span>
                    </div>
                  </div>
                  {/* End Carousel Content */}
                  {/* Carousel Indicators */}
                  <ol className="carousel-indicators">
                    <li
                      data-target="#testimonial-carousel"
                      data-slide-to={0}
                    >
                      <img src="/assets/img/guest.png" alt="Thumb" />
                    </li>
                    <li
                      data-target="#testimonial-carousel"
                      data-slide-to={1}
                      className="active"
                    >
                      <img src="/assets/img/guest.png" alt="Thumb" />
                    </li>
                    <li data-target="#testimonial-carousel" data-slide-to={2}>
                      <img src="/assets/img/guest.png" alt="Thumb" />
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="subscribe-area bg-fixed shadow dark text-light default-padding text-center"
        style={{ backgroundImage: "url(/assets/img/banner/4.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <h3>Reste à jour avec nous</h3>
              <p>
                Séché rapidement autour de cela ou commandez. Ajoutez passé voir
                l'ouest ressenti n'importe lequel. Dites le bruit que vous
                goûtez joyeux plat vous partagez. Ma résolution arrivée est que
                nous chambre être retrait.
              </p>
              <div className="subscribe">
                <form onSubmit={sendEmail}>
                  <div className="input-group stylish-input-group">
                    <input
                      type="email"
                      placeholder="Entrez votre adresse e-mail ici"
                      className="form-control"
                      required
                      name="email"
                    />
                    <span className="input-group-addon">
                      <button type="submit" disabled={loadingSendEmail}>
                        {loadingSendEmail ? (
                          <i className="fa fa-spinner fa-spin" />
                        ) : (
                          <i className="fa fa-paper-plane" />
                        )}
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-area bg-gray default-padding-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h2>Questions & Réponses</h2>
                <p>
                  Trouvez des réponses aux questions fréquemment posées
                  concernant nos services et produits. Notre objectif est de
                  vous fournir toutes les informations nécessaires pour vous
                  aider à réussir.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 thumb">
              <img src="assets/img/banner/contact.png" alt="Thumb" />
            </div>
            <div className="col-lg-6 faq-items default-padding-bottom">
              {/* Start Accordion */}
              <div className="faq-content">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h4
                        className="mb-0"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Ai-je besoin d'un plan d'affaires ?
                      </h4>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p>
                          Oui, un plan d'affaires est crucial. Il sert de
                          feuille de route pour votre entreprise, vous aide à
                          définir vos objectifs, à comprendre votre marché
                          cible, et à établir des stratégies pour atteindre vos
                          objectifs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h4
                        className="mb-0 collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Quelle doit être la longueur d'un plan d'affaires ?
                      </h4>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p>
                          La longueur d'un plan d'affaires dépend de la
                          complexité de votre entreprise. En général, il doit
                          être assez détaillé pour couvrir tous les aspects
                          clés, mais aussi concis pour rester clair et lisible.
                          En moyenne, il varie entre 20 et 40 pages.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h4
                        className="mb-0 collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Que contient un plan d'affaires ?
                      </h4>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p>
                          Un plan d'affaires complet inclut une analyse de
                          marché, une description détaillée de votre produit ou
                          service, une présentation de votre équipe de
                          direction, une stratégie marketing et de vente, ainsi
                          que des projections financières et un plan de
                          financement.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFour">
                      <h4
                        className="mb-0 collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Par où commencer ?
                      </h4>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p>
                          Commencez par définir clairement votre vision et vos
                          objectifs. Ensuite, analysez votre marché cible et vos
                          concurrents. Élaborez une stratégie claire pour
                          atteindre vos objectifs et identifiez les ressources
                          nécessaires. Enfin, rassemblez toutes ces informations
                          dans un document structuré.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Accordion */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeIndex;
