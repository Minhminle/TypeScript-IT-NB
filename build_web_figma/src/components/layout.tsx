import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { title } from "process";

interface MenuItemObject {
  title: string;
  url: string;
}
export default function Layout({ children }: { children: React.ReactNode }) {
  const menu: MenuItemObject[] = [
    { title: "Home", url: "/detail/home" },
    { title: "Product", url: "/detail/about/product" },
    { title: "About", url: "/detail/about/about" },
  ];

  const [currentMenu, setCurrentMenu] = useState(0);

  return (
    <main>
      <Box>
        {/* AppBar */}
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#20033B",
            height: "80px",
            zIndex: 1,
          }}
        >
          <Toolbar sx={{ marginLeft: "100px", marginTop: "20px" }}>
            {/* Nội dung của AppBar */}
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "#0277bd", fontWeight: 600 }}
            >
              TMDB Movie
            </Typography>
            <Stack direction="row" gap={4} marginLeft={"30px"}>
              {menu.map((item, index) => (
                <Link
                  key={item.url}
                  href={item.url}
                  style={{
                    color: `${currentMenu === index ? "#0277bd" : "gray"}`,
                  }}
                  onClick={() => setCurrentMenu(index)}
                >
                  {item.title}
                </Link>
              ))}
            </Stack>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            display: "flex",
            height: "650px",
          }}
        >
          {/* Phần bên trái (30%) */}
          <Box
            sx={{
              flex: "0 0 41%",
              backgroundColor: "#20033B",
              paddingLeft: "110px",
              paddingTop: "150px",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "white",
                fontFamily: "Inter",
                fontSize: "85px",
                fontWeight: 300,
              }}
            >
              Top Rated Movies
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: 400,
                marginTop: "20px",
              }}
            >
              Enjoy seamless movie streaming with our user-friendly web
              platform, offering a vast library of films for an immersive
              cinematic experience.
            </Typography>
            <Button
              variant="contained"
              sx={{
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: 600,
                borderRadius: "50px",
                background: "#6000B9",
                color: "#000",
                flexShrink: 0,
                marginTop: "42px",
                "&:hover": { background: "#607d8b" },
              }}
            >
              Find for more
            </Button>
          </Box>
          <Box
            sx={{
              flex: "0 0 70%",
              position: "relative",
              backgroundColor: "#20033B",
              zIndex: 0, // Đặt zIndex để hình ảnh nằm dưới AppBar
            }}
          >
            <Box>
              <img
                src="/images/moutainMovie.png"
                alt="Salad"
                style={{
                  width: "673.504px",
                  height: "651.5px",
                  right: "300px",
                  position: "absolute",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Stack>
        <TextField
          sx={{ backgroundColor: "white" }}
          variant="outlined"
          placeholder="Search"
          size="small"
        />
        <Box bgcolor="#20033B">{children}</Box>
      </Stack>
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>This footer</Toolbar>
      </AppBar>
    </main>
  );
}
