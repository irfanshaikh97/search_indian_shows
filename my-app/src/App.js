import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import ShowDetails from "./components/ShowDetails";
import Shows from "./components/Shows";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState } from "react";

function App() {
  

  return (
    <div className="App">
      
        <Navbar />
          <Routes>
          <Route path="" element={<Shows />} />
          <Route path="show/:id" element={<ShowDetails />} />
          </Routes>
    </div>
  );
}

export default App;
