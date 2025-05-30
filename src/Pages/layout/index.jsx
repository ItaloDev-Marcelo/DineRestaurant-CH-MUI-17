import Home from '../Home'
import AboutUs from '../AboutUs'
import MenuSection from '../MenuSection'
import MiddleSection from '../MiddleSection'
import BookATableSection from '../BookATableSection'
import Rodape from '../Footer'
import ScrollReveal from "scrollreveal";
import {useEffect} from 'react'
export default function MainPag()  {

     useEffect(() => {
        ScrollReveal().reveal(".reveal", {
          distance: "10px",
          duration: 1000,
          easing: "ease-in-out",
          origin: "left",
          reset: true, // Se quiser que a animação ocorra toda vez que o elemento entrar na tela
        });

        ScrollReveal().reveal(".revealR", {
          distance: "10px",
          duration: 1000,
          easing: "ease-in-out",
          origin: "right",
          reset: true, // Se quiser que a animação ocorra toda vez que o elemento entrar na tela
        });
       }, []) 


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