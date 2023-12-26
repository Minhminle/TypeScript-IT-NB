import { Box } from "@mui/material";
export default function NormalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main style={{ color: "green" }}>
      <h2>Normal</h2>
    </main>
  );
}
