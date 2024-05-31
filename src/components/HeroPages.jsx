import React from "react";

const HeroPages = ({ nameOfPage, path }) => {
  return (
    <div
      className="breadcrumb-area shadow dark bg-fixed text-center padding-xl text-light"
      style={{
        backgroundImage: "url(/assets/img/featured-image-smart-home.jpeg.webp)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h1>{nameOfPage}</h1>
            {path}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPages;
