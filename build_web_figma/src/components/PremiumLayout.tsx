import { Box } from "@mui/material";
export default function PremeumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main style={{ color: "purple", position: "relative", left: "100px" }}>
      <h2>Premeum</h2>
    </main>
  );
}
