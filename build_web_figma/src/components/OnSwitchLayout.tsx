// OnSwitchLayout.tsx
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import NormalLayout from "@/src/components/NormalLayout";
import PremiumLayout from "@/src/components/PremiumLayout";
import Header from "./Header/Header";

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
      <Box sx={{ position: "absolute", zIndex: "2", left: "1100px" }}>
        {/* Nút chuyển qua layout Normal */}
        <Button
          variant="contained"
          onClick={handleNormalLayout}
          color="success"
        >
          Normal
        </Button>
        {/* Nút chuyển qua layout Premium */}
        <Button
          variant="contained"
          onClick={handlePremiumLayout}
          color="secondary"
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
      <Header>
        <></>
      </Header>
    </main>
  );
}
