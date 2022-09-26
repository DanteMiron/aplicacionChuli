import React from "react";
import Home from "./components/Home/Home";
import Consultorio from "./components/Consultorio/Consultorio";
import Nav from "./components/Nav/Nav";
import {Routes, Route} from "react-router-dom"



function App() {
  return (
      <>
      {/* <Nav/> */}
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/consultorio' element={<Consultorio/>}/>
      </Routes>
      </>
  );
}

export default App;
