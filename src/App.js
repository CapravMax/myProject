import React from "react";
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./pages/Main/Main";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";
import Shop from "./pages/Shop/Shop";
import {Page404} from "./pages/Page404/Page404";
import "./App.css"


function App() {
  
  return (
    
    <>
       
            <Routes>

             <Route element = {<Layout/>}>
                <Route path="/" element={<Main />} />
                <Route path="Services" element={<Services />} />
                <Route path="Projects" element={<Projects />} />
                <Route path="Contacts" element={<Contacts />} />
                <Route path="Shop" element = {<Shop/>} />
                <Route path="*" element = {<Page404/>} />
              </Route>
                        
              </Routes>
          
</>

  )
}


export default App