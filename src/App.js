import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Login from "./components/Pages/Login";
import Registration from "./components/Pages/Registration";


function Params() {
  const params = useParams();
  return (
    <div>
      <h1>My name is {params.username}</h1>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <p>Page not found</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="/registration/:username" element={<Params />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
}

export default App;
