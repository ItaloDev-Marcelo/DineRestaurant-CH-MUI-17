import { Box, Stack, Typography } from "@mui/material";

import Salmon0 from '../assets/images/homepage/salmon-mobile@2x.jpg';
import Salmon1 from '../assets/images/homepage/salmon-desktop-tablet@2x.jpg';

import Beef0 from '../assets/images/homepage/beef-mobile@2x.jpg';
import Beef1 from '../assets/images/homepage/beef-desktop-tablet@2x.jpg';

import Snack0 from '../assets/images/homepage/chocolate-mobile@2x.jpg';
import Snack1 from '../assets/images/homepage/chocolate-desktop-tablet@2x.jpg';

export default function MenuSection() {
    return (
        <Stack>
            <Stack className='menuHeader--info'>
                <Box className='line-image'>
                    <Box className='bubble'>○</Box>
                    <Box className='line'></Box>
                </Box>
                <Typography component='h2' >A few highlights from our menu</Typography>
                <Typography component='p'  >We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites.
                    Our menu is revamped every season.</Typography>

            </Stack>


            <Stack className="foodList">
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box className='image-container'>
                        <Box className='mobile'>
                            <img src={Salmon0} alt="" />
                        </Box>
                        <Box className='tablet desktop '>
                            <img src={Salmon1} alt="" />
                        </Box>
                      
                    </Box>
                    <Box className='list-info'>
                        <Typography component='h3'>Seared Salmon Fillet</Typography>
                        <Typography component='p'>Our locally sourced salmon served with a refreshing buckwheat summer salad</Typography>
                    </Box>
                </Box>
                <hr />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box className='image-container'>
                        <Box className='mobile'>
                            <img src={Beef0} alt="" />
                        </Box>
                        <Box className='tablet desktop  '>
                            <img src={Beef1} alt="" />
                        </Box>
                    
                    </Box>
                    <Box className='list-info'>
                        <Typography component='h3'>Rosemary Filet Mignon</Typography>
                        <Typography component='p'>Our prime beef served to your taste with a delicious choice of seasonal sides.</Typography>
                    </Box>
                </Box>
                <hr />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box className='image-container'>
                        <Box className='mobile'>
                            <img src={ Snack0} alt="" />
                        </Box>
                        <Box className='tablet desktop  '>
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
