import React from "react";
import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";

function Params(){
  const params=useParams();
  return(
    <div>
      <h1>My name is {params.username}</h1>
    </div>
  )
}

function App() {
  return(
  <div className="App">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/registration/:username" element={<Params/>} />
    </Routes>
  </div>);
}

export default App;
