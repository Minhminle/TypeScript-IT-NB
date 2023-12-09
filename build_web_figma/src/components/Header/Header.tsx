import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo và Tên Trang Web */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Logo & Name
        </Typography>

        {/* Menu */}
        <Button color="inherit">Product</Button>
        <Button color="inherit">Recipe</Button>
        <Button color="inherit">About</Button>

        {/* Button Special Offer */}
        <Button color="secondary" variant="contained">
          Special Offer
        </Button>

        {/* Icon Điện Thoại và Số Điện Thoại */}
        <IconButton color="inherit" edge="end" sx={{ ml: 2 }}>
          {/* <PhoneIcon /> */}
          <Typography variant="body2" sx={{ ml: 1 }}>
            +123456789
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
  );
}

export default Header;
