import { Link } from "react-router-dom";

const _header = () => {
  return (
    <header id="home">
      <nav className="navbar navbar-default dark no-background bootsnav bg-light fixed-top">
        <div className="container">
          <div className="attr-nav button">
            <ul>
              <li>{/* <a href="#">try it free</a> */}</li>
            </ul>
          </div>
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i className="fa fa-bars" />
            </button>
            <Link className="navbar-brand" to="/home">
              <img
                src="/assets/img/Untitled design (2) (1) (1).png"
                className="logo logo-display"
                alt="Logo"
              />
              {/* <img
                src="/assets/img/Untitled design (2) (1) (1).png"
                className="logo logo-scrolled"
                alt="Logo"
              /> */}
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav navbar-right"
              data-in="#"
              data-out="#"
            >
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
      </nav>
    </header>
  );
};

export default _header;
