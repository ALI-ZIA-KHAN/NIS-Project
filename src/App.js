import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import MainPage from "./MainPage";
import Signup from "./Signup";

const App=()=>{
return(
  <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<MainPage/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/loogin" element={<Login/>}/>

  
</Routes>
</BrowserRouter>
</>
  )
}

export default App;
