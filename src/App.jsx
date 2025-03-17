
import './App.css'
import AboutUs from './Pages/AboutUs'
import BookATableSection from './Pages/BookATableSection'
import Rodape from './Pages/Footer'
import Home from './Pages/Home'
import MenuSection from './Pages/MenuSection'
import MiddleSection from './Pages/MiddleSection'

function App() {

  return (
    <>
     <Home/>
     <main>
        <AboutUs/>
        <MenuSection/>
        <BookATableSection/>
        <MiddleSection/>
     </main>
     <Rodape/>
    </>
  )
}

export default App
