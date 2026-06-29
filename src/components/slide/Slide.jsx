import { useNavigate } from 'react-router-dom'
import Img from '../image'
import SlideBtn from  '../slide/Slidebtn'


const Slide = ({title,text,images, NextSlide, next,options}) => {
    const Navigate = useNavigate() 
    console.log(title,next)
  return (
    <section className={title == next ? 'flex flex-col xl:flex-row justify-center xl:p-10 content-center' : 'hidden'}>
         <div className='my-5 relative xl:-left-20 xl:pr-20 flex flex-col items-center'>
          <Img url1={images?.mobile} url2={images?.tablet} url3={images?.desktop} />
         </div>
         <div className='flex flex-col-reverse xl:flex-col  items-center text-center xl:text-justify relative xl:-left-60'>
          <div className='w-82.5 md:w-112.5 pt-15 relative '>
            <h4 className='text-3xl font-semibold py-5'>{title}</h4>
          <p className='text-[1.5em] xl:text-[1.3em]'>{text}</p> 
           <button onClick={Navigate} className='bg-black w-50  lg:w-50 md:top-20 xl:top-2 h-12.5 font-semibold relative top-[2em] rounded-md outline-white text-white hover:bg-gray-600 xl:-left-5'>Book a table</button>
      
          </div>
          <div className='flex flex-col md:flex-row xl:flex-col gap-2 md:gap-x-10 xl:gap-y-2 relative xl:-left-32 xl:top-10 '>
            
          <div  className='cursor-pointer flex flex-col  xl:flex-row-reverse items-center xl:justify-center'>
             <SlideBtn NextSlide={NextSlide} next={options.op1} />
            {
                next == 'Family Gathering' &&
     <hr className='underline text-red-700 relative -top-2 xl:top-0 xl:-left-6 xl:w-25 w-4 '/>
     }
          </div>
          <div className='cursor-pointer  flex flex-col xl:flex-row-reverse items-center xl:justify-center'>
            
          <div className='relative xl:-left-4 xl:-top-2'><SlideBtn NextSlide={NextSlide} next={options.op2} /></div>
          {
                next == 'Special Events' &&
     <hr className='underline relative -top-2  xl:-left-10  xl:w-25 text-red-700 w-4 '/>
     }
          </div>
          <div className='cursor-pointer flex flex-col xl:flex-row-reverse items-center xl:justify-center'>
            <div  className='relative xl:-left-5 md:top-0 -top-2'>
          <SlideBtn NextSlide={NextSlide} next={options.op3} />
            </div>
           {
                next == 'Social Events' &&
     <hr className='underline relative -top-2 xl:-left-10  xl:w-25 text-red-700 w-4 '/>
     } 
          </div>
         
          </div>
         </div>
     </section>
  )
}

export default Slide