import React from "react";
import { Routes,Route } from "react-router-dom";
import Featured from "./component/Featured";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Signup from "./component/Signup";
import Crypto from "../src/Coinpage/Crypto"

function App() {
  return (
    <div >
      <Routes>
      <Route path='/' element=
  {<>
    <Navbar />
    <Hero />
    <Featured />
    <Signup />
    <Footer/>
  </>}
 />
     
        <Route path='/show/*' element={<Crypto/>}/>
        

  </Routes>
    </div>
  );
}

export default App;
