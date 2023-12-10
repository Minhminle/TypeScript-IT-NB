import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box'; // Thêm import


const Header: React.FC = () => {
  return (
    <React.Fragment>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          {/* Logo và Tên Trang Web */}
          <img
            src="../assets/images/logo.svg"
            alt="Logo"
            style={{ marginRight: '10px', width: '50px', height: '50px' }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dhabi Restaurant
          </Typography>

          {/* Menu */}
          <Button color="inherit">Product</Button>
          <Button color="inherit">Recipe</Button>
          <Button color="inherit">About</Button>

          {/* Button Special Offer */}
          <Button sx={{borderRadius: '10px', background: '#DAE952', 
          '&:hover': {background: '#33691e'}}} variant="contained">
            Special Offer
          </Button>

          {/* Icon Điện Thoại và Số Điện Thoại */}
          <IconButton color="inherit" edge="end" sx={{ ml: 2 }}>
            {/* <PhoneIcon /> */}
            <Typography variant="body2" sx={{ ml: 1 }}>
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

      {/* Container màu trắng ở dưới */}
      <Box sx={{ backgroundColor: 'white', padding: '20px' }}>
        {/* Nội dung của container */}
        <img
            src="../assets/images/salad1.png"
            alt="Logo"
            style={{ marginRight: '10px', width: '50px', height: '50px' }}
          />
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Your Content Goes Here
        </Typography>
      </Box>
    </React.Fragment>
  );
}

export default Header;
