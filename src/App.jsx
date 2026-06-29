import MainPag from './Pages/layout/index'
import BookYourTable from './Pages/nextPage/bookYourTable'
import { Navigate, Route, Routes } from "react-router-dom";

function App() {

  const RoutesWay = [
    {
      path:'/',
      element: <Navigate to='DineHomePage'/>
    },
    {
      path:'/DineHomePage',
      element: <MainPag />
    },
    {
      path:'/Book',
      element: <BookYourTable/>
    }
  ]
  
  return (
     <Routes>
        {
          RoutesWay.map((item,index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))
        }
     </Routes>
  )
}

export default App
