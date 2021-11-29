import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />
      <Route path="/learn" element={<Learn />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

function Home() {
  return (
    <div>
      <h1>Home Route</h1>
    </div>
  );
}

function Learn() {
  return (
    <div>
      <h1>Learn Route</h1>
      <h4>All apps listed HERE! </h4>
      <Link className="btn btn-success" style={{margin: '4px', borderRadius: '10px'}} to="/learn/course">courses</Link> 
      <Link className="btn btn-primary" style={{margin: '4px', borderRadius: '10px'}} to="/learn/bundle">bundle</Link>
    </div>
  );
}

reportWebVitals();
 