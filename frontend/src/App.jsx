import React from "react";
import Card from "./card";
import Student from "./Student";
import LanguageApp from "./Language";
import Commentsss from "./comment/CommentSections"
import Register from "./courses/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ConformationTable from "./courses/ConformationTable"
import Sidebar from "./Sidebar";
import ALL from "./ALL";

function App()
{
  return <>
  <BrowserRouter>
  <Sidebar/>
  <Routes>
    <Route path='/' element={<Card/>}/>
    <Route path="/useEffect" element={<Student/>} />
    <Route path="/useContext" element={<LanguageApp/>} />
    <Route path="/nestedprops" element={<Commentsss/>} />
    <Route path="/Router" element={<Register/>} />
    <Route path="/conform" element={<ConformationTable />} />
    <Route path="/allinone" element={<ALL/>} />
  </Routes>
  </BrowserRouter>
  </>
}

export default App;