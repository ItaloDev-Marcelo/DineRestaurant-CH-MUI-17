import { Box, Paper, Stack, Typography } from "@mui/material";

import CheepImage1 from '../assets/images/homepage/enjoyable-place-mobile@2x.jpg';
import CheepImage2 from '../assets/images/homepage/enjoyable-place-tablet@2x.jpg';
import CheepImage3 from '../assets/images/homepage/enjoyable-place-desktop@2x.jpg';

import FoodPlate1 from '../assets/images/homepage/locally-sourced-mobile@2x.jpg'
import FoodPlate2 from '../assets/images/homepage/locally-sourced-tablet@2x.jpg'
import FoodPlate3 from '../assets/images/homepage/locally-sourced-desktop@2x.jpg'

export default function AboutUs() {
  return (
    <Stack component='section' className="Travel-plates" padding='1em' textAlign='center'
     >
       <Stack component='article'  flexDirection={{lg: 'row'}} sx={{position: 'relative', top: '-5em'}}>
              <Box className='mobile'  >
              <img src={CheepImage1} alt="" />
              </Box>
              <Box className='tablet' >
              <img src={CheepImage2} alt="" />
              </Box>
              <Box className='desktop' >
              <img src={CheepImage3} alt="" />
              </Box>
          <Stack component='div' margin='1em 0'>
              <Box className='line-image'position='relative'>
                 <Box className='bubble'>○</Box>
                 <Box className='line'></Box>
              </Box>
              <Typography component='h2'><Typography component='strong' >Enjoyable place for all the family</Typography> </Typography>
              <Typography component='p'>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange 
              a tour of the farm before your meal.</Typography>
          </Stack>
       </Stack>
       <Stack component='article' flexDirection={{lg: 'row'}} >
          <Box className='mobile'>
              <img src={FoodPlate1} alt="" />
              </Box>
              <Box className='tablet'>
              <img src={FoodPlate2} alt="" />
              </Box>
              <Box className='desktop'>
              <img src={FoodPlate3} alt="" />
              </Box>
          <Stack component='div' margin='1em 0'>
              <Box className='line-image' position='relative'>
              <Box className='bubble'>○</Box>
              <Box className='line'></Box>
              </Box>
              <Typography component='h2'><Typography component='strong'>The most locally sourced food</Typography></Typography>
              <Typography component='p'>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re 
              eating the freshest, most sustainable food.</Typography>
          </Stack>
       </Stack>
    </Stack>
  )
}
