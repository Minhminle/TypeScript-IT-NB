// OnSwitchLayout.tsx
import React, { useState } from "react";
import { Box, Button, IconButton, Stack } from "@mui/material";
import NormalLayout from "@/src/components/NormalLayout";
import PremiumLayout from "@/src/components/PremiumLayout";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

interface OnSwitchLayoutProps {
  children: React.ReactNode;
}

export default function OnSwitchLayout({ children }: OnSwitchLayoutProps) {
  const [currentLayout, setCurrentLayout] = useState<"normal" | "premium">(
    "normal"
  );

  const handleNormalLayout = () => {
    setCurrentLayout("normal");
  };

  const handlePremiumLayout = () => {
    setCurrentLayout("premium");
  };

  return (
    <main>
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
      <Box>
        {/* Nút chuyển qua layout Normal */}
        <Button
          variant="contained"
          onClick={handleNormalLayout}
          color="success"
          sx={{
            position: "absolute",
            zIndex: "2",
            top: "80px",
            left: "1090px",
          }}
        >
          Normal
        </Button>
        {/* Nút chuyển qua layout Premium */}
        <Button
          variant="contained"
          onClick={handlePremiumLayout}
          color="secondary"
          sx={{
            position: "absolute",
            zIndex: "2",
            top: "80px",
            left: "1190px",
          }}
        >
          Try Premeum
        </Button>
        {/* Hiển thị layout tương ứng */}
        {currentLayout === "normal" ? (
          <NormalLayout>{children}</NormalLayout>
        ) : (
          <PremiumLayout>{children}</PremiumLayout>
        )}
      </Box>
    </main>
  );
}
