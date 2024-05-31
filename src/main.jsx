import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="wrapper">
        <div className="se-pre-con"></div>
        <App />
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "green",
            },
          },
          error: {
            style: {
              background: "#CC0000",
            },
          },
          style: {
            color: "white",
            zIndex: 99999,
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>
);
