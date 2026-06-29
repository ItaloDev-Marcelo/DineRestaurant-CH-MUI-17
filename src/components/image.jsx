export default function Img({url1, url2,url3}) {
    return (
       <>
         <img src={url1} alt="" className='md:hidden p-10' />
         <img src={url2} alt="" className='hidden md:block w-[90%] p-5  xl:hidden'/>
         <img src={url3} alt="" className='hidden xl:block w-[60%] relative z-100' />
       </>
    )
}