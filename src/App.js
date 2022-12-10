import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Signup from "./Signup";

const App=()=>{
return(
  <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<MainPage/>}/>
  <Route path="/signup" element={<Signup/>}/>
</Routes>
</BrowserRouter>
</>
  )
}

export default App;
