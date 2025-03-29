import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default async function HomePage() {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          component="main"
          sx={{ mt: ["48px", "56px", "64px"], flexGrow: 1 }}
        >
          <Container maxWidth="xl" sx={{ pt: 3, pb: 6 }}>
            <Grid container direction={"column"} spacing={5}>
              <Grid>
                <Button href="/room">
                  <Typography variant="h1" component="h1">
                    L'innatendu
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
