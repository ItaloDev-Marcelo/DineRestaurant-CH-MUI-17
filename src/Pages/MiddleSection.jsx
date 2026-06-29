import Button  from '../components/Button'
import bgMobile from '../assets/images/homepage/ready-bg-mobile@2x.jpg'
import bgTablet from '../assets/images/homepage/ready-bg-tablet@2x.jpg'
import bgDesktop from '../assets/images/homepage/ready-bg-desktop@2x.jpg'
export default  function MiddleSection() {
  return (
    <section className='flex flex-col xl:flex-row text-center xl:text-left items-center justify-center p-[1em] relative  min-h-[50vh] md:min-h-full
    md:pb-10 xl:justify-between md:px-[3em] xl:px-[7.5em] xl:gap-0'>

     <img src={bgMobile} className='absolute inset-0 w-full h-[50vh] bg-center  block md:hidden' alt=''/>
           <img src={bgTablet} className='absolute inset-0 w-full h-full bg-center  hidden md:block lg:hidden' alt=''/>
           <img src={bgDesktop} className='absolute inset-0 w-full h-full object-cover hidden lg:block' alt=''/>

          <div className='relative z-10 flex flex-col md:flex-row md:justify-between w-full'>
              <h5 className='text-[2.5em] md:text-[2em] relative md:top-5 -top-10 xl:top-2 leading-10 xl:text-[2.5em] mt-[.2em] text-white'>Ready to make a reservation?</h5>
       <div className='relative -top-10 md:scale-65 xl:scale-100  md:-top-7 xl:-top-16 '><Button /></div>
          </div>
    </section>
  )
}
