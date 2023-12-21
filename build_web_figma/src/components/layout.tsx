import { Box, Stack } from "@mui/material";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Stack textAlign={"center"}>
        <Box>This header</Box>
        {children}
        <Box>This footer</Box>
      </Stack>
    </main>
  );
}
