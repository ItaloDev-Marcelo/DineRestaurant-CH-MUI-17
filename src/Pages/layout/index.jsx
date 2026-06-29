import Home from '../Home'
import AboutUs from '../AboutUs'
import MenuSection from '../MenuSection'
import MiddleSection from '../MiddleSection'
import BookATableSection from '../BookATableSection'
import Rodape from '../Footer'
export default function MainPag()  {

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