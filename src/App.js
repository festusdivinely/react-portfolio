import React from "react";
import "./app.css";
import ChangeAppComponent from "./ChangeAppComponent.js";
import Home from "./templates/template1/pages/home/Home";
import Home2 from "./templates/template2/pages/home/Home2";
import {
  createBrowserRouter as Router,
  RouterProvider as Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const router = Router([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "home2",
      element: <Home2 />,
    },
  ]);

  return (
    <>
      <ChangeAppComponent />
      <div className="container">
        <Routes router={router} />
      </div>
    </>
  );
}

export default App;
