import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const metadata = {
  title: "L'innatendu Love Room",
  description: "Visite de la Love Room",
};

export default async function Room() {
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
                <Typography
                  align={"center"}
                  display={"flex"}
                  variant="h3"
                  component={"h1"}
                >
                  CONTACT
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
