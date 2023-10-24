import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const bgMoviment = document.querySelectorAll('body');
bgMoviment.forEach(bgMoviment => {
  bgMoviment.addEventListener('mousemove', (e) => {
    const react = bgMoviment.getBoundingClientRect();

    const left = e.clientX - react.left;
    const top = e.clientY - react.top;

    bgMoviment.style.setProperty("--left", `${left}px`);
    bgMoviment.style.setProperty("--top", `${top}px`);

  });
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
