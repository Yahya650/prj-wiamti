import React from "react";
import _footer from "./../../layouts/_footer";
import _header from "./../../layouts/_header";

const HomeIndex = () => {
  return (
    <>
      <_header />

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
                        We're building <span>software</span> for you
                      </h1>
                      <p>
                        Celebrated delightful an especially increasing
                        instrument am. Indulgence contrasted sufficient to
                        unpleasant in in insensible favourable.
                      </p>
                      <div className="button">
                        <a
                          className="btn circle btn-theme border btn-md"
                          href="#"
                        >
                          Get Started
                        </a>
                        <a href="#" className="btn-simple">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 right-info">
                    <img src="assets/img/illustration/3.png" alt="Thumb" />
                  </div>
                </div>
              </div>
            </div>
            <div className="wavesshape">
              <img src="assets/img/shape/1.png" alt="Shape" />
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
                <h2>What We Do</h2>
                <p>
                  Learning day desirous informed expenses material returned six
                  the. She enabled invited exposed him another. Reasonably
                  conviction solicitude me mr at discretion reasonable. Age out
                  full gate bed day lose.
                </p>
              </div>
            </div>
          </div>
          <div className="services-box text-center">
            <div className="row">
              {/* Single Item */}
              <div className="col-lg-3 col-md-6 single-item">
                <div className="item">
                  <i className="flaticon-scroll" />
                  <h5>Drag and drop</h5>
                  <p>
                    Pianoforte principles our unaffected not for astonished.
                  </p>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-lg-3 col-md-6 single-item">
                <div className="item">
                  <i className="flaticon-feature" />
                  <h5>Fully customizable</h5>
                  <p>
                    Pianoforte principles our unaffected not for astonished.
                  </p>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-lg-3 col-md-6 single-item">
                <div className="item">
                  <i className="flaticon-intersect" />
                  <h5>App integration</h5>
                  <p>
                    Pianoforte principles our unaffected not for astonished.
                  </p>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-lg-3 col-md-6 single-item">
                <div className="item">
                  <i className="flaticon-intersection" />
                  <h5>Color Schemes</h5>
                  <p>
                    Pianoforte principles our unaffected not for astonished.
                  </p>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-lg-3 col-md-6 single-item">
                <div className="item">
                  <i className="flaticon-resolution" />
                  <h5>High Resolution</h5>
                  <p>
                    Pianoforte principles our unaffected not for astonished.
                  </p>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-lg-3 col-md-6 single-item">
                <div className="item">
                  <i className="flaticon-showcase" />
                  <h5>Perfect Showcase</h5>
                  <p>
                    Pianoforte principles our unaffected not for astonished.
                  </p>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-lg-3 col-md-6 single-item">
                <div className="item">
                  <i className="flaticon-conversation" />
                  <h5>Helping Support</h5>
                  <p>
                    Pianoforte principles our unaffected not for astonished.
                  </p>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-lg-3 col-md-6 single-item">
                <div className="item">
                  <i className="flaticon-customer-support" />
                  <h5>Trusted Service</h5>
                  <p>
                    Pianoforte principles our unaffected not for astonished.
                  </p>
                </div>
              </div>
              {/* End Single Item */}
            </div>
          </div>
        </div>
      </div>

      <_footer />
    </>
  );
};

export default HomeIndex;
