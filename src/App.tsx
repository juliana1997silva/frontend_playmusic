import React from "react";
import { Router } from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
import "simple-datatables/src/css/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  );
};
export default App;
