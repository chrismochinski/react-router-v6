import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Lasagna, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <Lasagna>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
  </Lasagna>,
  document.getElementById("root")
);

function Home() {
  return (
    <div>
      <h1>Home Route</h1>
    </div>
  );
}

reportWebVitals();
