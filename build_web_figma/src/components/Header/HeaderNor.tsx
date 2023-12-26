import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box"; // Thêm import
import Link from "next/link";
import { styled } from "@mui/system";
import { Grid, Stack } from "@mui/material";
import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Box>
        <AppBar
          position="static"
          sx={{ backgroundColor: "gray", height: "80px", color: "black" }}
        >
          <Toolbar sx={{ marginTop: "20px" }}>
            <img
              src="/images/logo.svg"
              alt="Logo"
              style={{
                marginLeft: "95px",
                width: "65px",
                height: "65px",
                marginTop: "-30px",
              }}
            />
            <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
              Dhabi Restaurant
            </Typography>
            <Stack
              direction={"row"}
              spacing={4}
              sx={{
                marginLeft: "75px",
                color: "#000",
                fontFamily: "Inter",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              <Link href="#">Product</Link>
              <Link href="#">Recipe</Link>
              <Link href="#">About</Link>
            </Stack>

            <Button
              sx={{
                position: "relative",
                zIndex: 1,
                marginLeft: "135px",
                borderRadius: "10px",
                color: "#000",
                fontSize: "14px",
                fontWeight: 700,
                background: "#DAE952",
                "&:hover": { background: "#33691e" },
              }}
              variant="contained"
            >
              Special Offer
            </Button>

            {/* Icon Điện Thoại và Số Điện Thoại */}
            <IconButton color="inherit" edge="end" sx={{ ml: 2 }}>
              {/* <PhoneIcon /> */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                  marginLeft: "25px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
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
            display: "flex",
            height: "800px",
          }}
        >
          {/* Phần bên trái (30%) */}
          <Box
            sx={{
              flex: "0 0 41%",
              backgroundColor: "white",
              paddingLeft: "110px",
              paddingTop: "210px",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                position: "relative",
                width: "440px",
                color: "#000",
                fontFamily: "Inter",
                fontSize: "85px",
                fontWeight: 300,
              }}
            >
              All Delicious
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: "#000",
                fontFamily: "Inter",
                fontSize: "85px",
                fontWeight: 600,
              }}
            >
              Asian
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "-20px",
                color: "#000",
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Eggs, Salad, fruits, pasta
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: 600,
                borderRadius: "50px",
                background: "#DAE952",
                color: "#000",
                flexShrink: 0,
                marginTop: "45px",
                "&:hover": { background: "#33691e" },
              }}
            >
              Find Me More
            </Button>
          </Box>
          <Box
            sx={{
              flex: "0 0 60%",
              position: "relative",
              backgroundColor: "white",
            }}
          >
            <Box>
              <img
                src="/images/salad1.png"
                alt="Salad"
                style={{
                  width: "673.504px",
                  height: "651.5px",
                  marginTop: "55px",
                  marginLeft: "110px",
                  position: "absolute",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Header;
