const _header = () => {
  return (
    <header id="home">
      <nav className="navbar navbar-default navbar-fixed dark no-background bootsnav">
        <div className="container">
          <div className="attr-nav button">
            <ul>
              <li>
                <a href="#">try it free</a>
              </li>
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
            <a className="navbar-brand" href="index.html">
              <img
                src="/assets/img/logo.png"
                className="logo logo-display"
                alt="Logo"
              />
              <img
                src="/assets/img/logo.png"
                className="logo logo-scrolled"
                alt="Logo"
              />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav navbar-right"
              data-in="#"
              data-out="#"
            >
              <li className="dropdown dropdown-right">
                <a
                  href="#home"
                  className="dropdown-toggle smooth-menu"
                  data-toggle="dropdown"
                >
                  Home
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="index.html">Home Version One</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home Version Two</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home Version Three</a>
                  </li>
                  <li>
                    <a href="index-4.html">Home Version Four</a>
                  </li>
                  <li>
                    <a href="index-5.html">Home Version Five</a>
                  </li>
                  <li>
                    <a href="index-6.html">Home Version Six</a>
                  </li>
                  <li>
                    <a href="index-7.html">Home Version Seven</a>
                  </li>
                  <li>
                    <a href="index-8.html">Home Version Eight</a>
                  </li>
                  <li>
                    <a href="index-9.html">
                      Home Version Nine <span className="badge">Trending</span>
                    </a>
                  </li>
                  <li>
                    <a href="index-10.html">
                      Home Version Ten <span className="badge">New</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="smooth-menu" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="smooth-menu" href="#overview">
                  Overview
                </a>
              </li>
              <li>
                <a className="smooth-menu" href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="smooth-menu" href="#blog">
                  Blog
                </a>
              </li>
              <li className="dropdown dropdown-right">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a target="_blank" href="blog-2-colum.html">
                      Blog Grid
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="single.html">
                      Blog Single
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="login.html">
                      Login
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="register.html">
                      Register
                    </a>
                  </li>
                  <li>
                    <a href="404.html">Error 404</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="smooth-menu" href="#contact">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default _header;
