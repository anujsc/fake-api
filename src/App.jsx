import React from "react";
import Home from "./assets/components/Home";
import { Route, Routes } from "react-router-dom";
import Details from "./assets/components/Details";
import Create from "./assets/components/Create";

function App() {
  return (
    <div className="h-screen w-screen flex  ">
     
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/create" element={<Create/>}/>
     <Route path="/details/:id" element={<Details/>}/>
     </Routes>
             
    </div>

    
    
  );
}

export default App;
