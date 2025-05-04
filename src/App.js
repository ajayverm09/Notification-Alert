import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Restro from "./Components/Restro";
import Menu from "./Components/Menu";
import About from "./Components/About"
import Contact from "./Components/Contact";

  function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Restro />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}
export default App;