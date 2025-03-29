import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export const metadata = {
  title: "L'innatendu Love Room",
  description: "Visite de la Love Room",
};

const contentBlocks = [
  {
    image: "/img/room/jacuzzi.jpg",
    text: "Plongez dans une ambiance intimiste et raffinée au cœur de notre Love Room à Gardanne. Conçue pour les couples en quête de détente et de passion, notre suite offre un cadre idyllique pour une escapade romantique, une nuit inoubliable ou une célébration spéciale.Offrez-vous un moment de pure détente avec notre jacuzzi privatif, idéal pour se prélasser en amoureux. Profitez également d’un siège massant qui saura délasser vos tensions et vous offrir une sensation de bien-être total.",
    imageLeft: true,
  },
  {
    image: "/img/room/bathroom2.jpg",
    text: "Notre Love Room est équipée d’un grand canapé, d’une télévision pour vos instants de divertissement, et d’une salle de bain élégante avec peignoirs pour prolonger le confort après votre bain. Tout est pensé pour vous offrir une expérience luxueuse et immersive.",
    imageLeft: false,
  },
  {
    image: "/img/room/bedroom5.jpg",
    text: "Plongez dans une atmosphère envoûtante avec une chambre élégamment décorée selon vos envies pour pimenter votre séjour. Avec des textes en petales de roses, des ballons, des cygnes, ou bien encore un chemin en petales de rose pour vous guidez.",
    imageLeft: true,
  },
  {
    image: "/img/room/breakfast3.jpg",
    text: "Pour accompagner ces instants privilégiés, nous mettons à votre disposition de quoi grignoter et boire, pour que votre nuit soit aussi savoureuse qu’ensorcelante.",
    imageLeft: false,
  },
];

export default async function Room() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box component="main" sx={{ mt: ["48px", "56px", "64px"], flexGrow: 1 }}>
        <Container maxWidth="xl" sx={{ pb: 6 }}>
          {contentBlocks.map((block, index) => (
            <Grid
              key={index}
              container
              spacing={4}
              alignItems="center"
              wrap="nowrap"
              sx={{
                mb: 8,
                flexDirection: block.imageLeft ? "row" : "row-reverse",
                alignItems: "flex-start",
              }}
            >
              <Grid sx={{ flexShrink: 0, width: 600 }}>
                <Image
                  width={600}
                  height={400}
                  src={block.image}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  flexGrow: 1,
                  minWidth: 0,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                  }}
                >
                  {block.text}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Container>
      </Box>
    </Box>
  );
}
