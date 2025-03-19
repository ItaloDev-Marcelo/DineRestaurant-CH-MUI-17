import AboutUs from '../AboutUs'
import BookATableSection from '../BookATableSection'
import Rodape from '../Footer'
import Home from '../Home'
import MenuSection from '../MenuSection'
import MiddleSection from '../MiddleSection'


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