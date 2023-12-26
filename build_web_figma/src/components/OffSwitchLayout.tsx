import { Box } from "@mui/material";

import Header from "./Header/Header";
export default function OffSwitchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main style={{ backgroundColor: "darkgray" }}>
      <Header>
        <></>
      </Header>
    </main>
  );
}
