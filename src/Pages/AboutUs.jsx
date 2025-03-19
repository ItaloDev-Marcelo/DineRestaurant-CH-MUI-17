import { Box,  Stack, Typography } from "@mui/material";

import CheepImage1 from '../assets/images/homepage/enjoyable-place-mobile@2x.jpg';
import CheepImage3 from '../assets/images/homepage/enjoyable-place-desktop@2x.jpg';

import FoodPlate1 from '../assets/images/homepage/locally-sourced-mobile@2x.jpg'
import FoodPlate3 from '../assets/images/homepage/locally-sourced-desktop@2x.jpg'

import Line from '../assets/images/patterns/pattern-lines.svg';


import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

export default function AboutUs() {

   useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "5px",
      duration: 1000,
      easing: "ease-in-out",
      origin: "left",
      reset: true, // Se quiser que a animação ocorra toda vez que o elemento entrar na tela
    });
   }, []) 

 

  return (
    <Stack component='section' className="Travel-plates"
    padding={{xs: '1em', lg: '1em 5em'}} textAlign={{xs: 'center' , lg: 'left'}}
     >


       <Stack component='article'   display={'flex'}
        flexDirection={{lg: 'row'}} sx={{position: 'relative', top: '-5em', left: {lg: '4.5em'},
          justifyContent:'center',  alignItems:'center'}} >
              <Box component='div' className='mobile reveal'  >
              <img src={CheepImage1} alt="" />
              </Box>
              
              <Box  component='div' className='desktop reveal' >
              <img src={CheepImage3} alt="" />
              </Box>
          <Stack component='div' className="reveal" margin='1em 0' maxWidth='500px' position='relative' left={{lg: '-12em'}} >
              <Box className='line-image' >
                 <Box className='bubble'>○</Box>
                 <Box className='line'></Box>
              </Box>
              <Typography component='h2' fontSize={{xs: '2em',md: '3em', lg: '3.2em'}} padding='0 1.5em' margin='.5em 0 1em 0'>Enjoyable place for all the family </Typography>
              <Typography component='p' color='#4C4C4' padding={{xs: '0 1.4em', md: '0 3.5em', lg: '0 4em'}} margin={{xs: '.5em 0 .5em 0', lg: '-1.5em 0 .5em .5em'}} fontSize={{xs: '1.3em', sm: '1.1em'}}  >Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange 
              a tour of the farm before your meal.</Typography>
          </Stack>
       </Stack>


       <Stack component='article' className="L1"  display='flex' flexDirection={{lg: 'row-reverse'}}   justifyContent={{xs: 'center', lg: 'flex-end'}} alignItems='center'   >
              <Box className='mobile reveal'>
              <img src={FoodPlate1} alt="" />
              </Box>


              <Box className='line-L1' width='700px' display={{xs: 'none', md: 'block'}}>
                <img src={Line} alt='' />
              </Box>
            
              <Box className='desktop reveal' position='relative' top={{md: '-7em', lg: '5em'}} right='-10em'>
              <img src={FoodPlate3} alt="" />
              </Box>

             

          <Stack component='div' className="reveal"  margin={{xs: '1em 0', lg: '0'}} maxWidth='500px'>
              <Box className='line-image' position='relative'>
              <Box className='bubble'>○</Box>
              <Box className='line'></Box>
              </Box>
              <Typography component='h2' fontSize={{xs: '2em',md: '3em', lg: '3em'}} padding='0 1.5em' margin='1em 0'>The most locally sourced food</Typography>
              <Typography component='p' color='#4C4C4' padding={{xs: '0 1.4em', md: '0 3.5em' , lg: '0 4em'}} margin={{xs: '.5em 0', lg: '-1.5em 0 .5em 0'}}  fontSize={{xs: '1.3em', sm: '1.2em'}} >All our ingredients come directly from our farm or local fishery. So you can be sure that you’re 
              eating the freshest, most sustainable food.</Typography>
          </Stack>
       </Stack>
    </Stack>
  )
}
