"use client";
import { createTheme } from "@mui/material/styles";

export const COLORS = {
  primary: {
    main: "#FF6F61",
    light: "#FF8A73",
    dark: "#C75B4D",
    contrastText: "#FFFFFF",
  },
};

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: COLORS.primary.main },
  },
});
export default theme;
