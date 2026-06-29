import Button from '../components/Button';
import DinnerHeroMobile from '../assets/images/homepage/hero-bg-mobile@2x.jpg'
import DinnerHeroTablet from '../assets/images/homepage/hero-bg-tablet@2x.jpg'
import DinnerHeroDesktop from '../assets/images/homepage/hero-bg-desktop@2x.jpg'
import { communData } from '../data/communData';

export default function Home() {

        const {Logo} = communData
      
        

  return (
     <header className='relative min-h-screen'>
        <img src={DinnerHeroMobile} className='absolute inset-0 w-full h-[80vh] bg-center  block md:hidden' alt=''/>
        <img src={DinnerHeroTablet} className='absolute inset-0 w-full h-full bg-center  hidden md:block lg:hidden' alt=''/>
        <img src={DinnerHeroDesktop} className='absolute inset-0 w-full h-full object-cover hidden lg:block' alt=''/>
         
      
          <div className='relative z-10 -top-3 lg:-top-7 xl:-top-3 p-10 md:py-20 md:-top-5' >
         <nav className='p-10 hidden md:block'>
           <a href='index.html'><img src={Logo} alt='logo' /></a>
        </nav>
        <div className='flex flex-col justify-center items-center  gap-2 md:gap-7 lg:gap-5 lg:items-start text-center lg:text-justify relative  top-40  md:px-10 xl:top-2'>
           <h1 className='text-white pb-2.5 md:hidden'><strong className='text-[1.5em]'>dine</strong></h1>
           <h2 className='text-white lg:leading-19 text-[1.7em] px-10 lg:px-0 md:text-[5rem] lg:text-6xl'>Exquisite dining <br className='hidden lg:block' /> since 1989</h2>
           <p className='text-white xl:w-[40%]  lg:w-[50%] md:text-2xl lg:text-[1.2em] xl:text-2xl'>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from 
           the comfort of our farmhouse.</p>
          <div className='relative md:scale-75 xl:-top-10 xl:scale-100'>
             <Button/>
          </div>
        </div>
          </div>
       
     </header>
  )
}
 