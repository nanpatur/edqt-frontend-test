"use client";
import { DefaultTheme, ThemeProvider } from "styled-components";

const myTheme: DefaultTheme = {
  colors: {
    purple: "#7800EF",
    white: "#FFFFFF",
    black: "#252A3C",
    slateGray: "#8189A2",
    steelGray: "#BCC0D0",
    cloudGray: "#DFE5EE",
    frostGray: "#F6F8FC",
    paleGray: "#FBFAFF",
  },
};

const ThemeClient = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={myTheme}>{children}</ThemeProvider>;
};

export default ThemeClient;
