import { Box } from "@mui/material";

import Header from "./Header/Header";
import Container_Asian from "./Container/Container_ Asian";
export default function OffSwitchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main style={{ backgroundColor: "darkgray" }}>
      <Container_Asian></Container_Asian>
    </main>
  );
}
