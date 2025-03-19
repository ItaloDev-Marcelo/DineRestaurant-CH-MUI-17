
import './App.css'
import MainPag from './Pages/nextPage/MainPa'
import BookYourTable from './Pages/nextPage/bookYourTable'
import { Navigate, Route, Routes } from "react-router-dom"

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
