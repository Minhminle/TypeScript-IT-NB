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
      </Box>
    </main>
  );
}
