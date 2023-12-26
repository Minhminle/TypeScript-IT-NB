import { Box } from "@mui/material";
import Header from "./Header/HeaderNor";
export default function NormalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header>
        <></>
      </Header>
    </main>
  );
}
