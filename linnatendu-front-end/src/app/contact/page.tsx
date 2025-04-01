import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const metadata = {
  title: "L'innatendu Love Room",
  description: "Visite de la Love Room",
};

export default async function Contact() {
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE;

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
              direction={"column"}
              spacing={5}
              alignContent={"center"}
            >
              <Grid>
                <Typography
                  align={"center"}
                  display={"flex"}
                  variant="h3"
                  component={"h1"}
                >
                  Envie de reserver une nuit ?
                </Typography>
                <Typography>Contactez nous au {contactPhone}</Typography>
                <Typography>
                  N'hesitez pas a nous faire savoir si vous voulez certaines
                  decorations.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
