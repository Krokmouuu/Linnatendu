"use client";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { StyledRoot } from "./StyledRoot";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { Box } from "@mui/material";
import { useResponsive } from "@/Hook/useResponsive";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = useResponsive("down", "md");
  const pathname = usePathname();

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
