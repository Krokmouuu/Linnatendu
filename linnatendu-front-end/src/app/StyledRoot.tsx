"use client";
import { ThemeProvider } from "@mui/material";
import theme from "../components/Theme/theme";

export function StyledRoot({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
