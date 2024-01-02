import React from "react";
import { Box, Stack } from "@mui/material";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = ["contact", "blog", "Report"];

  return (
    <main>
      <Stack direction={"row"} spacing={3}>
        {menu.map((item) => (
          <Box key={item}>{item}</Box>
        ))}
      </Stack>
      <Box>{children}</Box>
    </main>
  );
}
