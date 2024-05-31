import React, { useEffect } from "react";
import HeroPages from "../../../components/HeroPages";
import { Link } from "react-router-dom";
import { successToast } from "../../../config/Toasts/toasts";

const ContactIndex = () => {
  useEffect(() => {
    document.title = "BTI - Contactez Nous";
  }, []);

  const [loadingSendEmail, setLoadingSendEmail] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoadingSendEmail(true);

    // Simulate sending email asynchronously
    setTimeout(() => {
      setLoadingSendEmail(false);
      successToast("Email envoyé avec Succès");
      // e.target.reset();
    }, 1000);
  };

  return (
    <>
      <HeroPages
        nameOfPage="CONTACTEZ NOUS"
        path={
          <ul className="breadcrumb">
            <li>
              <Link to="/home">Accueil</Link>
            </li>
            <li className="active">CONTACTEZ-NOUS</li>
          </ul>
        }
      />
      <div id="contact" className="contact-us-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h2>CONTACTEZ-NOUS</h2>
                <p>
                  Apprenez-en plus sur la manière de nous contacter. Nous sommes
                  là pour répondre à toutes vos questions et vous fournir les
                  informations nécessaires.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 address">
              <div className="address-items">
                <h4>Notre Adresse</h4>
                <ul className="info">
                  <li>
                    <i className="fas fa-map-marked-alt" />
                    <span>
                      hay raja 2 rue 3,
                      <br /> Casablanca, Morocco,
                      <br /> 25000
                    </span>
                  </li>
                  <li>
                    <a href="tel:+212666364567">
                      <i className="fas fa-phone" />
                      <span>+212 666 364567</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:bti.technologie@gmail.com">
                      <i className="fas fa-envelope-open" />
                      <span>bti.technologie@gmail.com</span>
                    </a>
                  </li>
                </ul>
                <h4>Réseaux Sociaux</h4>
                <ul className="social">
                  <li className="facebook">
                    <Link
                      to="https://www.facebook.com/p/Boothman-Techno-Informatique-100042391847882/?_rdr"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li className="twitter">
                    <Link to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li className="pinterest">
                    <Link to="#">
                      <i className="fab fa-pinterest" />
                    </Link>
                  </li>
                  <li className="instagram">
                    <Link to="#">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                </ul>
                <div className="google-maps">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.254394417064!2d-7.5489506245501135!3d33.57274357334132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd43ca488463%3A0xd008b6b43f8a76a6!2sHay%20raja!5e0!3m2!1sen!2sma!4v1717171510717!5m2!1sen!2sma"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 contact-form">
              <h2>Parlons de votre idée</h2>
              <form onSubmit={sendEmail} className="contact-form">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Nom"
                        type="text"
                        required
                      />
                      <span className="alert-error" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="row">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email*"
                        type="email"
                        required
                      />
                      <span className="alert-error" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="row">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Téléphone"
                        type="text"
                        required
                      />
                      <span className="alert-error" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="row">
                    <div className="form-group comments">
                      <textarea
                        className="form-control"
                        id="comments"
                        name="comments"
                        placeholder="Parlez-nous de votre projet *"
                        required
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="row">
                    <button type="submit" name="submit" id="submit">
                      {loadingSendEmail ? (
                        <>
                          <i className="fa fa-spinner fa-spin" />
                          <span> Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          Envoyer le Message
                          <i className="fa fa-paper-plane" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
                {/* Alert Message */}
                <div className="col-lg-12 alert-notification">
                  <div id="message" className="alert-msg" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactIndex;
