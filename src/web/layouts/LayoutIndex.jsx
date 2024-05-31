import React from "react";
import _header from "./_header";
import { Outlet } from "react-router-dom";
import _footer from "./_footer";

const LayoutIndex = () => {
  return (
    <>
      <_header />
      <Outlet />
      <_footer />
    </>
  );
};

export default LayoutIndex;
