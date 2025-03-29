import { Container, Grid, Typography, Card, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

export default function NavigationBar() {
  return (
    <Container>
      <Grid container direction={"row"} sx={{ mt: 2 }}>
        <Grid size={12}>
          <Card sx={{ height: "80px", backgroundColor: "transparent" }}>
            <Grid
              size={12}
              sx={{
                height: "100%",
                justifyItems: "start",
                alignItems: "center",
                display: "flex",
                p: 2,
                justifyContent: "space-between",
              }}
            >
              <Grid>
                <Button href="/room">
                  <Typography>La Room</Typography>
                </Button>
              </Grid>
              <Grid>
                <Button href="/">
                  <Typography>L'innatendu</Typography>
                </Button>
                <Grid direction={"column"} gap={3} display={"flex"}>
                  <Button
                    href="https://www.instagram.com/linattendu_loveroom"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ minWidth: "auto", padding: 0 }}
                  >
                    <InstagramIcon />
                  </Button>
                  <Button
                    href="https://www.snapchat.com/add/linattendu13?share_id=DK9GewZKos8&locale=fr-FR"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ minWidth: "auto", padding: 0 }}
                  >
                    <Image
                      src="/img/logo/snapchat.png"
                      alt="Snapchat"
                      width={24}
                      height={24}
                    />
                  </Button>
                  <Button
                    href="https://www.tiktok.com/@linattendu.love.r"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ minWidth: "auto", padding: 0 }}
                  >
                    <Image
                      src="/img/logo/tiktok.png"
                      alt="TikTok"
                      width={24}
                      height={24}
                    />
                  </Button>
                  <Button
                    href="https://www.facebook.com/l.inattendu.love.room"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ minWidth: "auto", padding: 0 }}
                  >
                    <Image
                      src="/img/logo/facebook.png"
                      alt="TikTok"
                      width={24}
                      height={24}
                    />
                  </Button>
                </Grid>
              </Grid>
              <Button href="/contact">
                <Typography>Contact</Typography>
              </Button>
            </Grid>
          </Card>
        </Grid>
        <Grid></Grid>
      </Grid>
    </Container>
  );
}
