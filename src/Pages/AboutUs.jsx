import LineRow from '../components/LineRow';
import { AboutData } from '../data/aboutData';
import { communData } from '../data/communData';

export default function AboutUs() {

   const {Line} = communData
   const {EnjoyablePlace1,
       EnjoyablePlace2,
       LocallySourced1,
       LocallySourced2} = AboutData

   
  return (
    <section className='px-10 py-25 xl:py-30 md:px-26  lg:px-[5em] text-center lg:text-justify'
     >

       <section className='flex flex-col pb-20 xl:my-0 xl:flex-row justify-center items-center gap-5 xl:mt-5 xl:px-10 relative xl:top-7 lg:justify-start '>
              <div className='hidden xl:block absolute  w-170 top-50 -left-20 h-95 bg-gray-100'>
              </div>
              <div  className='mobile relative-top-5 xl:top-10 p-5 xl:p-2 left-0'  >
              <img src={EnjoyablePlace1} alt='' className='xl:hidden' />
              <img src={EnjoyablePlace2} alt='' className='hidden xl:block w-[60%] relative z-1000' />
              </div>
          <div className='py-10'>
              <LineRow color='text-red-900'/>
              <h3 className='text-[2em] leading-15 xl:leading-15 md:leading-10 md:py-10 xl:pb-0  md:text-[2.5em] md:px-20 xl:px-0 xl:text-[3.2em]'>Enjoyable place for all the family </h3>
              <p className='text-[#4C4C4] mx-[1.4em] md:mx-[3.5em] md:text-[1.3em] xl:text-[1em] xl:mx-0'>Our relaxed surroundings make dining with us a great experience for everyone. <br className=' hidden xl:block'/> We can even arrange 
              a tour of the farm before your meal.</p>
          </div>
       </section>



       <section className='flex flex-col xl:flex-row-reverse justify-between items-center   xl:mt-10 xl:px-10 relative xl:top-14 xl:left-10 lg:justify-start'  >
              <div className='relative'>
              <img  src={LocallySourced1} alt='' className='xl:hidden'/>
              <img  src={LocallySourced2} alt='' className='hidden relative z-1 xl:block xl:left-50 w-[60%]'  />
              <img  src={Line} alt='' className='hidden xl:block absolute top-[75%] left-120 z-10'  />
            
              <div className='hidden xl:block absolute w-170 top-50 xl:left-10 h-95 rounded-tl-[100px] bg-gray-100'>
              </div>

              </div>

          <div className='py-10 xl:pl-2 md:px-25 xl:px-0'>
              <LineRow color='text-red-900' />
              <h3 className='text-[2em] xl:text-[3.2em] text-center xl:text-left
              xl:leading-15 md:leading-10 md:py-10 xl:pb-0  md:text-[2.5em]
              '>The most locally sourced food</h3>
              <p className='text-[#4C4C4]'>All our ingredients come directly from our farm or local fishery.  So you can be sure that you’re 
              eating the freshest,  <br className=' hidden xl:block'/> most sustainable food.</p>
          </div>

       </section>

    </section>
  )
}
