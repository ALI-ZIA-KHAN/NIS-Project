import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import MainPage from "./MainPage";
import Signup from "./Signup";
import NextPage from './NextPage'
import Duplicate from "./Duplicate";
import Premium from './Premium'
import PlanSelection from './PlanSelection'
import CreditCard from "./CreditCard";
import LastPage from "./LastPage";
import Login2 from "./Login2";
import Signup2 from './Signup2'

const App=()=>{
return(
  <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<MainPage/>}/>
  <Route path="/duplicate" element={<Duplicate/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/loogin" element={<Login/>}/>
  <Route path="/nextpage" element={<NextPage/>}/>
  <Route path="/premium" element={<Premium/>}/>
  <Route path="/plan" element={<PlanSelection/>}/>
  <Route path="/credit" element={<CreditCard/>}/>
  <Route path="/last" element={<LastPage/>}/>
  <Route path="/login2" element={<Login2/>}/>
  <Route path="/signup2" element={<Signup2/>}/>

  
</Routes>
</BrowserRouter>
</>
  )
}

export default App;
