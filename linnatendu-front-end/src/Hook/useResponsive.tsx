import { Breakpoint, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/**
 * Use responsive utilities to detect screen size and orientation
 * @param query Query type, can be "up", "down", "between", "only"
 * @param start The breakpoint to start at
 * @param end The breakpoint to end at
 * @returns Whether the query is true or not based on the current screen size
 */
export function useResponsive(query: Query, start?: Value, end?: Value): boolean {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start as Value));

  const mediaDown = useMediaQuery(theme.breakpoints.down(start as Value));

  const mediaBetween = useMediaQuery(theme.breakpoints.between(start as Value, end as Value));

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start as Breakpoint));

  if (query === "up") return mediaUp;
  if (query === "down") return mediaDown;
  if (query === "between") return mediaBetween;

  return mediaOnly;
}

/**
 * Get the current screen width
 * @returns The current screen width based on the breakpoints in the theme
 */
export function useWidth(): Breakpoint {
  const theme = useTheme();

  const keys = [...theme.breakpoints.keys].reverse();

  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));

      return !output && matches ? key : output;
    }, null) || "xs"
  );
}

export type Query = "up" | "down" | "between" | "only";
export type Value = Breakpoint | number;
export type BreakpointOrNull = Breakpoint | null;