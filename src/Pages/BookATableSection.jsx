import { Stack, Typography, Box, Button } from '@mui/material';
import { useState} from 'react';
import bankGalery from '../components/bankGalery';
import {useNavigate } from 'react-router-dom'
import Img from '../components/image'


export default function BookATableSection() {
  const {Gt0 , Gt1, Gt2, SpE0, SpE1, SpE2, SpEvents0, SpEvents1, SpEvents2} = bankGalery;
  const Navigate = useNavigate()
  const [slideItem, setSlideItem] = useState('Slider-one')
  return (
    <Stack component='section' my='4em'  padding={{xs: '0' , lg: '4em 2.5em'}} display='flex' flexDirection={{xs: 'column', lg: 'row'}} >
      <Stack className='slideArea-section reveal'  component='div' display='flex'    textAlign={{xs: 'center', lg: 'left'}} position='relative' left={{lg: '5em' }}    >
       <Stack className='slideArea-01 ' display={slideItem === 'Slider-one'  ? 'flex' : 'none'} flexDirection={{xs: 'column', lg: 'row'}}  >
       <Stack component='picture' >
          <Box component='div' className='mobile '  >
            <Img url={Gt0}  />
          </Box>
          <Box component='div' className='tablet '  >
            <Img url={Gt1}  />
          </Box>
          <Box component='div' className='desktop ' >
            <Img url={Gt2}  />
          </Box>
        </Stack>
        
        </Stack>

       <Stack className='slideArea-02 ' display={slideItem === 'Slider-two'  ? 'flex' : 'none'} flexDirection={{xs: 'column', lg: 'row'}}>
       <Stack component='picture' >
          <Box component='div' className='mobile '  >
            <Img url={SpEvents0}  />
          </Box>
          <Box component='div' className='tablet ' >
            <Img url={SpEvents1}  />
          </Box>
          <Box component='div' className='desktop ' >
            <Img url={SpEvents2}  />
          </Box>
        </Stack>
      
        </Stack>

       <Stack className='slideArea-03 ' display={slideItem === 'Slider-three'  ? 'flex' : 'none'} flexDirection={{xs: 'column', lg: 'row'}}>
       <Stack component='picture' >
          <Box component='div' className='mobile '  >
            <Img url={SpE0}  />
          </Box>
          <Box component='div' className='tablet ' >
            <Img url={SpE1}  />
          </Box>
          <Box component='div' className='desktop ' >
            <Img url={SpE2}  />
          </Box>
        </Stack>
     
       </Stack>
       

      </Stack>

      <Stack className='slideArea-section-info reveal ' position='relative' left={{lg: '-8.9em' }} display='flex' textAlign={{xs: 'center', lg: 'left'}}  >
        <Stack component='div' display={slideItem === 'Slider-one'  ? 'flex' : 'none'} padding={{xs:'1.5em 4em', md: '1.5em 10em' }}  alignItems={{xs: 'center', lg: 'flex-start'}} flexDirection={{lg:'column-reverse'}} >
        
        <Stack marginTop='3em' spacing={{xs: 1, sm: 0}} flexDirection={{sm: 'row', lg: 'column'}} alignItems={{lg: 'flex-start'}} >
        <Button sx={{background: 'trasparent', border: 'none'}} className='btn0 active' onClick={() => setSlideItem('Slider-one')} >Family Gathering </Button>
        <Button sx={{background: 'trasparent', border: 'none'}} className='btn1 ' onClick={() => setSlideItem('Slider-two')}>Special Events</Button>
        <Button sx={{background: 'trasparent', border: 'none'}} className='btn2 ' onClick={() => setSlideItem('Slider-three')}>Social Events</Button>
        </Stack>

        <Stack>
        <Typography component='h4'>Family Gathering</Typography>
          <Typography component='p'>We love catering for entire families. So please bring everyone along for a special meal with your 
          loved ones. We’ll provide a memorable experience for all.</Typography>
          <Button onClick={() => Navigate('/Book')} sx={{ background: 'black', width: {xs: '200', lg: '325px'}, height: '50px', fontWeight: '600', position: 'relative', top: '2em', border: 'none', color: 'white', '&:hover': { background: 'white', color: 'black' }, alignSelf: {xs: 'center', lg: 'flex-start'}}}>Book a table</Button>
   
        </Stack>
       
              </Stack>

        <Stack component='div' display={slideItem === 'Slider-two'  ? 'flex' : 'none' }padding={{xs:'1.5em 4em', md: '1.5em 10em' }}  alignItems={{xs: 'center', lg: 'flex-start'}}  flexDirection={{lg:'column-reverse'}}  >
        <Stack marginTop='3em' spacing={{xs: 1, sm: 0}}  flexDirection={{sm: 'row', lg: 'column'}}  alignItems={{lg: 'flex-start'}}>
        <Button sx={{background: 'trasparent', border: 'none'}} className='btn0 ' onClick={() => setSlideItem('Slider-one')} >Family Gathering </Button>
        <Button sx={{background: 'trasparent', border: 'none'}} className='btn1 active' onClick={() => setSlideItem('Slider-two')}>Special Events</Button>
        <Button sx={{background: 'trasparent', border: 'none'}} className='btn2  ' onClick={() => setSlideItem('Slider-three')}>Social Events</Button>
        </Stack>

        <Stack>
        <Typography component='h4'>Special Events</Typography>
          <Typography component='p'>Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. 
          We’ll be sure to mark your special date with an unforgettable meal.</Typography>
          <Button onClick={() => Navigate('/Book')} sx={{ background: 'black', width: {xs: '200', lg: '325px'}, height: '50px', fontWeight: '600', position: 'relative', top: '2em', border: 'none', color: 'white', '&:hover': { background: 'white', color: 'black' },  alignSelf: {xs: 'center', lg: 'flex-start'} }}>Book a table</Button> 
       
        </Stack>
         </Stack>


        <Stack component='div' display={slideItem === 'Slider-three'  ? 'flex' : 'none'} padding={{xs:'1.5em 4em', md: '1.5em 10em' }}  alignItems={{xs: 'center', lg: 'flex-start'}} flexDirection={{lg:'column-reverse'}}   >
        <Stack marginTop='3em' spacing={{xs: 1, sm: 0}}  flexDirection={{sm: 'row', lg: 'column'}} alignItems={{lg: 'flex-start'}} >
        <Button sx={{background: 'trasparent', border: 'none'}} className='btn0 ' onClick={() => setSlideItem('Slider-one')} >Family Gathering </Button>
        <Button sx={{background: 'trasparent', border: 'none'}} className='btn1 ' onClick={() => setSlideItem('Slider-two')}>Special Events</Button>
        <Button sx={{background: 'trasparent', border: 'none'}} className='btn2 active' onClick={() => setSlideItem('Slider-three')}>Social Events</Button>
        </Stack>
        <Stack >
        <Typography component='h4'>Social Events</Typography>
          <Typography component='p'>Are you looking to have a larger social event? No problem! We’re more than happy to cater for big
          parties. We’ll work with you to make your event a hit with everyone.</Typography>
          <Button onClick={() => Navigate('/Book')} sx={{ background: 'black', width: {xs: '200', lg: '325px'}, height: '50px', fontWeight: '600', position: 'relative', top: '2em', border: 'none', color: 'white', '&:hover': { background: 'white', color: 'black' },  alignSelf: {xs: 'center', lg: 'flex-start'} }}>Book a table</Button>
       
        </Stack>
         </Stack>
      </Stack>
    </Stack>
  )
}
