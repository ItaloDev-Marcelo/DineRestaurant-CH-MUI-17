import menuData from '../data/menuData.json'
import LineRow from '../components/LineRow';
import FoodItem from '../components/Fooditem'

export default function MenuSection() {

    return (
        <section  className='p-[1em] xl:py-30 md:px-26  flex flex-col xl:flex-row justify-center items-center py-20 xl:items-baseline
        lg:px-[5em] text-center lg:text-justify bg-[#101010] text-white gap-5'>
            <section className='text-center flex flex-col items-center xl:items-start xl:text-left py-[1em] px-[1.5em] xl:w-[50%]' >
                <LineRow color='white'/>
                <h3 className='text-[2em] leading-15 mt-2 md:px-10 xl:px-0 md:text-[3em] xl:text-[3.2em]' >A few highlights from our menu</h3>
                <p className='md:w-[60%] xl:w-[80%] py-2'>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites.
                    Our menu is revamped every season.</p>
            </section>
            <section className='flex flex-col justify-center items-center '>
                 {
                menuData.map((item) => (
                    <FoodItem key={item.id} id={item.id} imageMobile={item.img.mobile} imageDesk={item.img.tabletToDesk} 
                    title={item.title} info={item.info} />
                ))
            }
            </section>
        </section>
    )
}
