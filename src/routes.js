import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home/Home.js";
import About from "./pages/about/About.js"

const Routes = () => {
   return(
       <BrowserRouter>
           <Route element={Home}  path="/" exact />
           <Route element={About}  path="/about"  />
       </BrowserRouter>
   )
}

export default Routes;