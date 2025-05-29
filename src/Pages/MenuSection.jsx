import { Box, Stack, Typography } from "@mui/material";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

import bankGalery from "../components/bankGalery";


export default function MenuSection() {

    const {Salmon0, Salmon1,Beef0 , Beef1, Snack0, Snack1} = bankGalery ;

      useEffect(() => {
        ScrollReveal().reveal(".revealLeft", {
          distance: "5px",
          duration: 1000,
          easing: "ease-in-out",
          origin: "left",
          reset: true, // Se quiser que a animação ocorra toda vez que o elemento entrar na tela
        });

        ScrollReveal().reveal(".revealRight", {
            distance: "5px",
            duration: 2000,
            easing: "ease-in-out",
            origin: "right",
            reset: true, // Se quiser que a animação ocorra toda vez que o elemento entrar na tela
          });
       }, []) 


    return (
        <Stack display='flex' flexDirection={{xs: 'column', lg: 'row'}} sx={{background: '  #101010;',color: 'white', justifyContent: 'center', padding: {xs: '4em 1em', lg:  '10em 7em 2.5em 7em'}}}>
            <Stack className='menuHeader--info revealLeft' textAlign={{xs: 'center', lg: 'left'}} padding='1em 1.5em' >
                <Box className='line-row'>
                    <Box className='bubble'>○</Box>
                    <Box className='line'></Box>
                </Box>
                <Typography component='h2' fontSize={{xs:'2em', md: '3em' ,lg: '3.1em'}} margin={{xs: '1em 0 .5em 0', md: '1em 5em .5em 5em', lg: '1em 0 .5em 0'}} >A few highlights from our menu</Typography>
                <Typography component='p' margin={{xs: '1em 0 4em 0', md: '1em 17em 4em 17em', lg: '1em 0 4em 0',}}  maxWidth={{lg: '350px'}} lineHeight={{lg: '2em'}} >We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites.
                    Our menu is revamped every season.</Typography>

            </Stack>


            <Stack className="foodList" padding={{md: '4em 6em'}} display='flex' flexDirection='column'>
                <Box className='revealRight' sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, textAlign: {xs: 'center', md: 'left'} }}>
                    <Box className='image-container'>
                        <Box className='mobile' zIndex='2 ' position='relative'>
                            <img src={Salmon0} alt="" />
                        </Box>
                        <Box className='tablet desktop ' zIndex='2' position='relative'>
                            <img src={Salmon1} alt="" />
                        </Box>
                      
                    </Box>
                    <Box className='list-info'>
                        <Typography component='h3'>Seared Salmon Fillet</Typography>
                        <Typography component='p'>Our locally sourced salmon served with a refreshing buckwheat summer salad</Typography>
                    </Box>
                </Box>
                <hr />
                <Box className='revealRight' sx={{ display: 'flex',  flexDirection: {xs: 'column', md: 'row'}, textAlign: {xs: 'center', md: 'left'} }}>
                <Box className='image-container'>
                        <Box className='mobile'  zIndex='2 ' position='relative'>
                            <img src={Beef0} alt="" />
                        </Box>
                        <Box className='tablet desktop'  zIndex='2 ' position='relative'>
                            <img src={Beef1} alt="" />
                        </Box>
                    
                    </Box>
                    <Box className='list-info'>
                        <Typography component='h3'>Rosemary Filet Mignon</Typography>
                        <Typography component='p'>Our prime beef served to your taste with a delicious choice of seasonal sides.</Typography>
                    </Box>
                </Box>
                <hr />
                <Box className='revealRight' sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'},textAlign: {xs: 'center', md: 'left'}  }}>
                <Box className='image-container'>
                        <Box className='mobile'  zIndex='2 ' position='relative'>
                            <img src={ Snack0} alt="" />
                        </Box>
                        <Box className='tablet desktop'   zIndex='2 ' position='relative'>
                            <img src={ Snack1} alt="" />
                        </Box>
                    </Box>
                    <Box className='list-info'>
                        <Typography component='h3'>Summer Fruit Chocolate Mousse</Typography>
                        <Typography component='p'>Creamy mousse combined with  summer fruits and dark chocolate shavings.</Typography>
                    </Box>
                </Box>

            </Stack>

        </Stack>
    )
}
