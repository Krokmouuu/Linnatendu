import { Box, Container } from "@mui/material";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Container maxWidth="xl" sx={{ my: { xs: 2, lg: 5 } }}>
        {children}
      </Container>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );
}
