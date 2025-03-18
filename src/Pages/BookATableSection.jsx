
import Gt0 from '../assets/images/homepage/family-gathering-mobile@2x.jpg';
import Gt1 from '../assets/images/homepage/family-gathering-tablet@2x.jpg';
import Gt2 from '../assets/images/homepage/family-gathering-desktop@2x.jpg';

import SpE0 from '../assets/images/homepage/social-events-mobile@2x.jpg';
import SpE1 from '../assets/images/homepage/social-events-tablet@2x.jpg';
import SpE2 from '../assets/images/homepage/social-events-desktop@2x.jpg';

import SpEvents0 from '../assets/images/homepage/special-events-mobile@2x.jpg';
import SpEvents1 from '../assets/images/homepage/special-events-tablet@2x.jpg';
import SpEvents2 from '../assets/images/homepage/special-events-desktop@2x.jpg';

import { Stack, Typography, Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import ScrollReveal from "scrollreveal";

export default function BookATableSection() {

  const [slideItem, setSlideItem] = useState('Slider-one')

     useEffect(() => {
      ScrollReveal().reveal(".reveal", {
        distance: "5px",
        duration: 2000,
        easing: "ease-in-out",
        origin: "left",
        reset: true, // Se quiser que a animação ocorra toda vez que o elemento entrar na tela
      });
     }, []) 
  



  return (
    <Stack component='section' my='4em'  padding={{xs: '0' , lg: '4em 2.5em'}} display='flex' flexDirection={{xs: 'column', lg: 'row'}} >
      <Stack className='slideArea-section reveal'  component='div' display='flex'    textAlign={{xs: 'center', lg: 'left'}} position='relative' left={{lg: '5em' }}    >
       <Stack className='slideArea-01 ' display={slideItem === 'Slider-one'  ? 'flex' : 'none'} flexDirection={{xs: 'column', lg: 'row'}}  >
       <Stack component='picture' >
          <Box component='div' className='mobile '  >
            <img src={Gt0} alt="" />
          </Box>
          <Box component='div' className='tablet ' >
            <img src={Gt1} alt="" />
          </Box>
          <Box component='div' className='desktop ' >
            <img src={Gt2} alt="" />
          </Box>
        </Stack>
        
        </Stack>

       <Stack className='slideArea-02 ' display={slideItem === 'Slider-two'  ? 'flex' : 'none'} flexDirection={{xs: 'column', lg: 'row'}}>
       <Stack component='picture' >
          <Box component='div' className='mobile '  >
            <img src={SpEvents0} alt="" />
          </Box>
          <Box component='div' className='tablet ' >
            <img src={SpEvents1} alt="" />
          </Box>
          <Box component='div' className='desktop ' >
            <img src={SpEvents2} alt="" />
          </Box>
        </Stack>
      
        </Stack>

       <Stack className='slideArea-03 ' display={slideItem === 'Slider-three'  ? 'flex' : 'none'} flexDirection={{xs: 'column', lg: 'row'}}>
       <Stack component='picture' >
          <Box component='div' className='mobile '  >
            <img src={SpE0} alt="" />
          </Box>
          <Box component='div' className='tablet ' >
            <img src={SpE1} alt="" />
          </Box>
          <Box component='div' className='desktop ' >
            <img src={SpE2} alt="" />
          </Box>
        </Stack>
     
       </Stack>
       

      </Stack>

      <Stack className='slideArea-section-info reveal ' position='relative' left={{lg: '-8.9em' }} display='flex' textAlign={{xs: 'center', lg: 'left'}}  >
        <Stack component='div' display={slideItem === 'Slider-one'  ? 'flex' : 'none'} padding={{xs:'1.5em 4em', md: '1.5em 20em' }}  alignItems={{xs: 'center', lg: 'flex-start'}} flexDirection={{lg:'column-reverse'}} >
        
        <Stack marginTop='3em' spacing={{xs: 1, sm: 0}} flexDirection={{sm: 'row', lg: 'column'}} alignItems={{lg: 'flex-start'}} >
        <Button sx={{background: 'trasparent', border: 'none'}} className='btn0 active' onClick={() => setSlideItem('Slider-one')} >Family Gathering </Button>
        <Button sx={{background: 'trasparent', border: 'none'}} className='btn1 ' onClick={() => setSlideItem('Slider-two')}>Special Events</Button>
        <Button sx={{background: 'trasparent', border: 'none'}} className='btn2 ' onClick={() => setSlideItem('Slider-three')}>Social Events</Button>
        </Stack>

        <Stack>
        <Typography component='h4'>Family Gathering</Typography>
          <Typography component='p'>We love catering for entire families. So please bring everyone along for a special meal with your 
          loved ones. We’ll provide a memorable experience for all.</Typography>
          <Button sx={{ background: 'black', width: '200px', height: '50px', fontWeight: '600', position: 'relative', top: '2em', border: 'none', color: 'white', '&:hover': { background: 'white', color: 'black' }, alignSelf: {xs: 'center', lg: 'flex-start'}}}>Book a table</Button>
   
        </Stack>
       
              </Stack>

        <Stack component='div' display={slideItem === 'Slider-two'  ? 'flex' : 'none' }padding={{xs:'1.5em 4em', md: '1.5em 20em' }}  alignItems={{xs: 'center', lg: 'flex-start'}}  flexDirection={{lg:'column-reverse'}}  >
        <Stack marginTop='3em' spacing={{xs: 1, sm: 0}}  flexDirection={{sm: 'row', lg: 'column'}}  alignItems={{lg: 'flex-start'}}>
        <Button sx={{background: 'trasparent', border: 'none'}} className='btn0 ' onClick={() => setSlideItem('Slider-one')} >Family Gathering </Button>
        <Button sx={{background: 'trasparent', border: 'none'}} className='btn1 active' onClick={() => setSlideItem('Slider-two')}>Special Events</Button>
        <Button sx={{background: 'trasparent', border: 'none'}} className='btn2  ' onClick={() => setSlideItem('Slider-three')}>Social Events</Button>
        </Stack>

        <Stack>
        <Typography component='h4'>Special Events</Typography>
          <Typography component='p'>Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. 
          We’ll be sure to mark your special date with an unforgettable meal.</Typography>
          <Button sx={{ background: 'black', width: '200px', height: '50px', fontWeight: '600', position: 'relative', top: '2em', border: 'none', color: 'white', '&:hover': { background: 'white', color: 'black' },  alignSelf: {xs: 'center', lg: 'flex-start'} }}>Book a table</Button> 
       
        </Stack>
         </Stack>


        <Stack component='div' display={slideItem === 'Slider-three'  ? 'flex' : 'none'} padding={{xs:'1.5em 4em', md: '1.5em 20em' }}  alignItems={{xs: 'center', lg: 'flex-start'}} flexDirection={{lg:'column-reverse'}}   >
        <Stack marginTop='3em' spacing={{xs: 1, sm: 0}}  flexDirection={{sm: 'row', lg: 'column'}} alignItems={{lg: 'flex-start'}} >
        <Button sx={{background: 'trasparent', border: 'none'}} className='btn0 ' onClick={() => setSlideItem('Slider-one')} >Family Gathering </Button>
        <Button sx={{background: 'trasparent', border: 'none'}} className='btn1 ' onClick={() => setSlideItem('Slider-two')}>Special Events</Button>
        <Button sx={{background: 'trasparent', border: 'none'}} className='btn2 active' onClick={() => setSlideItem('Slider-three')}>Social Events</Button>
        </Stack>
        <Stack >
        <Typography component='h4'>Social Events</Typography>
          <Typography component='p'>Are you looking to have a larger social event? No problem! We’re more than happy to cater for big
          parties. We’ll work with you to make your event a hit with everyone.</Typography>
          <Button sx={{ background: 'black', width: '200px', height: '50px', fontWeight: '600', position: 'relative', top: '2em', border: 'none', color: 'white', '&:hover': { background: 'white', color: 'black' },  alignSelf: {xs: 'center', lg: 'flex-start'} }}>Book a table</Button>
       
        </Stack>
         </Stack>
      </Stack>
    </Stack>
  )
}
