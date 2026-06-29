import Footer  from '../Footer'
import bgMobile from '../../assets/images/homepage/ready-bg-mobile@2x.jpg'
import bgTablet from '../../assets/images/homepage/ready-bg-tablet@2x.jpg'
import bgDesktop from '../../assets/images/homepage/ready-bg-desktop@2x.jpg'
import Form from './components/Form'

export default function bookYourTable()  {
 
  return (
    <>
    <section className='flex flex-col py-50 md:py-99  xl:py-40 xl:flex-row text-center xl:text-left items-center justify-center p-[1em] relative  min-h-[50vh]  
    md:pb-10 xl:justify-between md:px-[3em] xl:px-[7.5em] xl:gap-0 '>
      <img src={bgMobile} className='absolute inset-0 w-full h-[60vh] bg-center  block md:hidden' alt=''/>
      <img src={bgTablet} className='absolute inset-0 w-full h-[50vh] bg-center  hidden md:block lg:hidden' alt=''/>
      <img src={bgDesktop} className='absolute inset-0 w-full h-[75vh] bg-center  hidden lg:block' alt=''/>
      <div className='flex flex-col absolute top-0 p-10 gap-5 md:gap-10  text-white'>
         <div className=''>
              <nav>
                        <h1 className='text-[4em]'>dine</h1>
               </nav>
        </div>
      <section className=''>
             <div className=' '>
                   <h2 className='text-3xl font-bold mb-4'>Reservations</h2>
                   <p className='md:text-[1.3em] px-5 md:px-20 xl:px-0 xl:w-[50%]'>We can’t wait to host you. If you have any special requirements please feel free to 
                   call on the phone number below. We’ll be happy to accommodate you.</p>
                   <button className='bg-transparent w-50 md:top-10 lg:scale-100 lg:w-50  h-12.5 font-semibold relative top-[1em] rounded-md cursor-pointer outline-1 outline-white text-white hover:bg-white hover:text-black'>Reserve Place</button>
          </div>
      </section>
      </div>
      <section className='h-125'>
           <Form />
      </section>
     </section>
    <Footer/>
    </>
  )
}
