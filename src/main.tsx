import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ToastProvider } from "react-toast-notifications";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider autoDismiss autoDismissTimeout={2000} placement="bottom-center">
      <App />
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
