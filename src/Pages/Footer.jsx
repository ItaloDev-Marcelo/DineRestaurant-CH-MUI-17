import { Stack, Typography, Link } from '@mui/material';
import bankGalery from '../components/bankGalery';
import  Img from '../components/image'
export default function Rodape()  {


  const {logo} = bankGalery
   
    
  return (
    <Stack component='footer'  padding={{xs: '2em', lg: '4em 2em'}} sx={{background: 'hsl(0, 0.00%, 6.30%);',color: 'white', display: 'flex',textAlign: {xs: 'center', lg: 'left'}, flexDirection: {lg: 'row'}}} >
      <Stack component='div' className='reveal'  marginLeft={{xs: '7em' , md: '7em', lg: '6em'}} width={{xs: '30%',sm: '15%', lg: '10%'}} alignSelf={{xs: 'center', lg: 'flex-start'}} margin='1em 7em 0 5em'>
        <Img url={logo}  />
      </Stack>
      <Stack display='flex' flexDirection={{xs: 'column', lg: 'row'}} >
      <Stack component='div'   className='address-area reveal ' margin='1em 0'>
         <Typography component='p' marginBottom='.2em'>Marthwaite, Sedbergh</Typography>
         <Typography component='p' marginBottom='.3em'>Cumbria</Typography>
         <Link href='tel:+00441234567' sx={{textDecoration: 'none', color: '#fff'}}  >00 44 123 4567</Link>
      </Stack>
      <Stack component='div' className='reveal'  margin={{xs: '1em 0', lg: '1em 1.5em 0 5em'}}>
            <Typography component='p' marginBottom='.7em'>Open Times</Typography>
            <Typography component='p'>Mon - Fri: 09:00 AM - 10:00 PM</Typography>
            <Typography component='p'>Sat - Sun: 09:00 AM - 11:30 PM</Typography>
      </Stack>
      </Stack>
    </Stack>
  )
}
