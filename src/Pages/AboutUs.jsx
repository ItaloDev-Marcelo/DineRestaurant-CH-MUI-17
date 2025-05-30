import { Box,  Stack, Typography } from '@mui/material';
import bankGalery from '../components/bankGalery';
import  Img from '../components/image'

export default function AboutUs() {

   const {CheepImage1, CheepImage3, FoodPlate1, FoodPlate3, Line} = bankGalery

   
  return (
    <Stack component='section' className='Travel-plates'
    padding={{xs: '1em', lg: '1em 5em'}} textAlign={{xs: 'center' , lg: 'left'}}
     >
       <Stack component='article'   display={'flex'}
        flexDirection={{lg: 'row'}} sx={{position: 'relative', top: {xs: '-5em', sm: '-4.5em'}
         ,  left: {lg: '4.5em'},
          justifyContent:'center',  alignItems:'center'}} >
              <Box component='div' className='mobile reveal'  >
              <Img url={CheepImage1} />
              </Box>
              
              <Box  component='div' className='desktop spacific-fix reveal' >
              <Img url={CheepImage3} />
              </Box>
          <Stack component='div' className='reveal' margin='1em 0' maxWidth='500px' position='relative' left={{lg: '-12em'}} >
              <Box className='line-image' >
                 <Box className='bubble'>○</Box>
                 <Box className='line'></Box>
              </Box>
              <Typography component='h2' fontSize={{xs: '2em',md: '3em', lg: '3.2em'}} padding='0 1.5em' margin='.5em 0 1em 0'>Enjoyable place for all the family </Typography>
              <Typography component='p' color='#4C4C4' padding={{xs: '0 1.4em', md: '0 3.5em', lg: '0 4em'}} margin={{xs: '.5em 0 .5em 0', lg: '-1.5em 0 .5em .5em'}} fontSize={{xs: '1.3em', sm: '1.1em'}}  >Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange 
              a tour of the farm before your meal.</Typography>
          </Stack>
       </Stack>


       <Stack component='article' className='L1'  display='flex' flexDirection={{lg: 'row-reverse'}}   justifyContent={{xs: 'center', lg: 'flex-end'}} alignItems='center'   >
              <Box className='mobile reveal'>
              <Img  url={FoodPlate1} />
              </Box>


              <Box className='line-L1' width='700px' display={{xs: 'none', md: 'block'}}>
                <Img  url={Line}  />
              </Box>
            
              <Box className='desktop reveal' position='relative' top={{md: '-7em', lg: '5em'}} right='-10em'>
              <Img  url={FoodPlate3} />
              </Box>

             

          <Stack component='div' className='reveal'  margin={{xs: '1em 0', lg: '0'}} maxWidth='500px'>
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
