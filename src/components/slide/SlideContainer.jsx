
import { useState} from 'react';
import slideDate from '../slide/data/slideData.json'
import Slide from './Slide';

const SlideContainer = () => {

    const [slideItem, setSlideItem] = useState('Family Gathering');
    const nextSlide = (value) => setSlideItem(value)
    
  return (
    <section className='py-20 md:py-40'>
        {
            slideDate.map((item) => (
                <Slide key={item.id} NextSlide={nextSlide}
                text={item.text} title={item.title} options={item.options}
                 next={slideItem} images={item.images} 
                 />
            ))
        }
    </section>
  )
}

export default SlideContainer