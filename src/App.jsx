
import './App.css'
import MainPag from './Pages/layout/index'
import BookYourTable from './Pages/nextPage/bookYourTable'
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
     <Routes>
        <Route path="/" element={<Navigate to='DineHomePage'/>} />
        <Route path="/DineHomePage" element={<MainPag />} />
        <Route path='/Book' element={<BookYourTable/>} />
     </Routes>
    </>
  )
}

export default App
