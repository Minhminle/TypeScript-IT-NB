import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box'; // Thêm import
import Link from 'next/link';
import { styled } from '@mui/system';
import { Grid } from '@mui/material';

const StyledCircle = styled('div')({
  width: '884px',
  height: '900px',
  borderRadius: '50%',
  border: '3px solid #DAE952',
  top: '-80px',
  left: '9px',
  position: 'absolute',
  zIndex: 0,
  overflow: 'hidden',
});


const Header: React.FC = () => {
  return (
    <React.Fragment>
      <Box>
      <AppBar position="static" sx={{ backgroundColor: 'white', height: '80px', color: 'black'}}>
        <Toolbar sx={{ marginTop:'20px'}}>
          <img
            src="/images/logo.svg"
            alt="Logo"
            style={{ marginLeft: '95px', width: '65px', height: '65px' }}
          />
          <Typography variant="h6" component="div" sx={{fontWeight: 600}}>
            Dhabi Restaurant
          </Typography>
        <Grid  sx={{marginLeft: '75px', color: '#000', fontFamily: 'Inter', fontSize: '15px', fontWeight: 500}}>
          <Link href="#">Product</Link>
        </Grid>
        <Grid  sx={{marginLeft: '26px', color: '#000', fontFamily: 'Inter', fontSize: '15px', fontWeight: 500}}>
          <Link href="#">Recipe</Link>
        </Grid>
        <Grid  sx={{marginLeft: '30px', color: '#000', fontFamily: 'Inter', fontSize: '15px', fontWeight: 500}}>
          <Link href="#">About</Link>
        </Grid>
          

          <Button sx={{position: 'relative', zIndex: 1, marginLeft: '135px', borderRadius: '10px', color: '#000',fontSize: '14px',  fontWeight: 700, background: '#DAE952', 
          '&:hover': {background: '#33691e'}}} variant="contained">
            Special Offer
          </Button>

          {/* Icon Điện Thoại và Số Điện Thoại */}
          <IconButton color="inherit" edge="end" sx={{ ml: 2 }}>
            {/* <PhoneIcon /> */}
            <Typography variant="body2" sx={{fontSize: '16px',  fontWeight: 700, marginLeft: '25px', position: 'relative', zIndex: 1 }}>
              +923351263561
            </Typography>
          </IconButton>

          {/* Icon Bạn Bè và Giỏ Hàng */}
          <IconButton color="inherit" edge="end">
            {/* <PeopleIcon /> */}
          </IconButton>
          <IconButton color="inherit" edge="end">
            {/* <ShoppingCartIcon /> */}
          </IconButton>
        </Toolbar>
      </AppBar>

    <Box
      sx={{
        display: 'flex',
        height: '800px',
      }}
    >
      {/* Phần bên trái (30%) */}
      <Box
        sx={{
          flex: '0 0 41%',
          backgroundColor: 'white',
          paddingLeft: '110px',
          paddingTop: '210px'
        }}
      >
        <Typography variant="h1" sx={{position:'relative', width:'440px', color: '#000', fontFamily: 'Inter', fontSize: '85px', fontWeight: 300 }}>
          All Delicious
        </Typography>
        <Typography variant="h1" sx={{ color: '#000', fontFamily: 'Inter', fontSize: '85px', fontWeight: 600 }}>
          Asian
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '-20px', color: '#000', fontFamily: 'Inter', fontSize: '20px', fontWeight: 600 }}>
          Eggs, Salad, fruits, pasta
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontSize: '25px',
            fontStyle: 'normal',
            fontWeight: 600,
            borderRadius: '50px',
            background: '#DAE952',
            color: '#000',
            flexShrink: 0,
            marginTop: '45px',
            '&:hover': {background: '#33691e'}}}>
          Find Me More
        </Button>
      </Box>
      <Box
        sx={{
          flex: '0 0 60%',
          position: 'relative',
          backgroundColor: 'white'
        }}
      >
        <Box>
        <StyledCircle />
        <img
            src="/images/green_header.png"
            alt="Salad"
            style={{ width: '666px', height: '905px', left:'90px', float: 'right', top:'-85px', position:'relative', zIndex: 0}}
          />
          <img
            src="/images/salad1.png"
            alt="Salad"
            style={{ width: '673.504px', height: '651.5px', marginTop:'55px', marginLeft:'110px', position: 'absolute'}}
          />
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            Your Content Goes Here
          </Typography>
        </Box>
      </Box>
    </Box>
    </Box>
    </React.Fragment>
  );
}

export default Header;
