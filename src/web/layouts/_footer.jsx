import React from "react";

const _footer = () => {
  return (
    <footer className="default-padding bg-light">
      <div className="container">
        <div className="f-items">
          <div className="row">
            <div className="col-lg-3 col-md-6 item">
              <div className="f-item">
                <img src="/assets/img/logo.png" alt="Logo" />
                <p>
                  Excellence decisively nay man yet impression for contrasted
                  remarkably. There spoke happy for you are out. Fertile how old
                  address did showing because sitting replied six. Had arose
                  guest visit going off child she new.
                </p>
                <a href="#" className="btn circle btn-theme effect btn-sm">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 item">
              <div className="f-item link">
                <h4>Quick LInk</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-right" /> Home
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-right" /> About us
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-right" /> Compnay History
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-right" /> Features
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-right" /> Blog Page
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 item">
              <div className="f-item link">
                <h4>Community</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-right" /> Career
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-right" /> Leadership
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-right" /> Strategy
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-right" /> Services
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-right" /> History
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 item">
              <div className="f-item twitter-widget">
                <h4>Contact Info</h4>
                <p>
                  Estimating stimulated how reasonably precaution diminution she
                  simplicity
                </p>
                <div className="address">
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="fas fa-home" />
                      </div>
                      <div className="info">
                        <h5>Website:</h5>
                        <span>www.validtheme.com</span>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope" />
                      </div>
                      <div className="info">
                        <h5>Email:</h5>
                        <span>support@validtheme.com</span>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-phone" />
                      </div>
                      <div className="info">
                        <h5>Phone:</h5>
                        <span>+44-20-7328-4499</span>
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
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <p>
                  © Copyright 2018. All Rights Reserved by{" "}
                  <a href="#">validthemes</a>
                </p>
              </div>
              <div className="col-lg-6 text-right link">
                <ul>
                  <li>
                    <a href="#">Terms of user</a>
                  </li>
                  <li>
                    <a href="#">License</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default _footer;
