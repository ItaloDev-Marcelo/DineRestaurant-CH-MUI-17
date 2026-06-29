import Home from '../Home'
import AboutUs from '../AboutUs'
import MenuSection from '../MenuSection'
import MiddleSection from '../MiddleSection'
import Rodape from '../Footer'
import SlideContainer from '../../components/slide/SlideContainer'
export default function MainPages()  {

     return (
       <>
        <Home/>
        <main>
           <AboutUs/>
           <MenuSection/>
           <SlideContainer/>
           <MiddleSection/>
        </main>
        <Rodape/>
       </>
     )
}