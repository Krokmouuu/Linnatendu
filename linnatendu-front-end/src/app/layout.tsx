"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { StyledRoot } from "./StyledRoot";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { Box } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/background/hearts-background.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Box>
          <AppRouterCacheProvider>
            <StyledRoot>
              <NavigationBar />
              {children}
            </StyledRoot>
          </AppRouterCacheProvider>
        </Box>
      </body>
    </html>
  );
}
