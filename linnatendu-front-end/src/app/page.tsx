import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";

export const metadata = {
  title: "L'innatendu Love Room Gardanne 13",
  description: "L'innatendu - Home",
};

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
          <Container maxWidth="xl" sx={{ pb: 6 }}>
            <Grid
              container
              direction={"row"}
              spacing={5}
              justifyContent={"center"}
            >
              <Grid size={3} mr={-10}>
                <img
                  src="/img/room/bed.jpg"
                  alt="Bed"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid size={3} mt={20} mr={-10}>
                <img
                  src="/img/room/jacuzzi.jpg"
                  alt="jaccuzi"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid size={3}>
                <img
                  src="/img/room/breakfast.jpg"
                  alt="breakfast"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid size={3} mt={20} ml={-10}>
                <img
                  src="/img/room/bedroom.jpg"
                  alt="Bedroom"
                  style={{ width: "100%", height: "75%" }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent={"center"}
              spacing={2}
              sx={{ mt: -5 }}
            >
              <Button href="/room" variant="contained" color="primary">
                <ArrowBackIcon />
              </Button>
              <Button href="/room" variant="contained" color="primary">
                <Typography sx={{ textDecoration: "underline" }}>
                  Explorer la room
                </Typography>
              </Button>
              <Button href="/contact" variant="contained" color="primary">
                <ArrowForwardIcon />
              </Button>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
