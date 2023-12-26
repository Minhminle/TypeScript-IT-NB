// Layout.tsx
import { Box, Switch } from "@mui/material";
import React, { useState } from "react";
import OnSwitchLayout from "@/src/components/OnSwitchLayout";
import OffSwitchLayout from "@/src/components/OffSwitchLayout";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSwitchOn, setSwitchOn] = useState(false);

  const handleSwitchToggle = () => {
    setSwitchOn((prev) => !prev);
  };

  return (
    <main>
      <Box sx={{ background: "#DAE952" }}>
        <Switch checked={isSwitchOn} onChange={handleSwitchToggle} />
      </Box>
      {isSwitchOn ? (
        <OnSwitchLayout>On mode</OnSwitchLayout>
      ) : (
        <OffSwitchLayout>Off mode</OffSwitchLayout>
      )}
      {children}
      <Box sx={{ background: "#DAE952", height: "30px" }}></Box>
    </main>
  );
}
