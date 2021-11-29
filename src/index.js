import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes, //new version of Switch
  Route,
  Navigate, //similar to redirect
  Link, //better than an <a> tag - does not reload entire page
  Outlet, //end of the pipe - where component physically mounts
  useParams, //ol' friend!
  NavLink, //similar to Link but you can use properties, classes, styles, etc
  useNavigate, //IMPORTANT use instead of history, apparently??? (also, everything i serialized - only passes stuff as strings)
  useLocation,
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />
      <Route path="/learn" element={<Learn />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseid" element={<CourseId />} />
        </Route>
        <Route path="bundles" element={<Bundles />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
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
      <Link
        className="btn btn-success"
        style={{ margin: "4px", borderRadius: "10px" }}
        to="/learn/courses"
      >
        Courses
      </Link>
      <Link
        className="btn btn-primary"
        style={{ margin: "4px", borderRadius: "10px" }}
        to="/learn/bundles"
      >
        Bundle
      </Link>
      <Outlet />
    </div>
  );
}

function Courses() {
  const courseList = ["React", "Angular", "Vue", "NodeJS"];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];

  return (
    <div>
      <h1>Courses:</h1>
      <h4>Courses Card</h4>

      <p>More Test</p>
      <NavLink
        // className="btn btn-lg"
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "pink" : "yellow",
          };
        }}
        to={`/learn/courses/${randomCourseName}`}
      >
        {randomCourseName}
      </NavLink>
      <NavLink className="btn btn-light" to={`/learn/courses/tests`}>
        {randomCourseName}
      </NavLink>

      <Outlet />
    </div>
  );
}

function Bundles() {
  return (
    <div>
      <h1>Bundles:</h1>
      <h4>Bundles Card</h4>
    </div>
  );
}

function CourseId() {
  const navigate = useNavigate();
  const { courseid } = useParams();

  return (
    <div>
      <h1>URL Params is : {courseid} </h1>
      <button
        onClick={() => {
          navigate("/dashboard", { state: courseid }); //important here's that navigate hook!
        }}
        className="btn btn-warning"
      >
        Price
      </button>
      <Link to="/dashboard" state={"DJANGO"}>
        Test Link
      </Link>
    </div>
  );
}

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <h1>Info that I have here is {location.state} </h1>
      <button
        className="btn btn-lg btn-success"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
}

reportWebVitals();
