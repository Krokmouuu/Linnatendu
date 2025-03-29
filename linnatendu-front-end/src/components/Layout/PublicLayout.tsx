import { Container } from "@mui/material";
import Box from "@mui/material/Box";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Container maxWidth="xl" sx={{ my: { xs: 2, ld: 5 } }}>
        {children}
      </Container>
    </Box>
  );
}
