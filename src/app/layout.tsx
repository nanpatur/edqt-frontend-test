"use client";
import "./globals.css";
import { ThemeProvider } from "styled-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = {
    purple: "#7800EF",
    white: "#FFFFFF",
    black: "#252A3C",
    slateGray: "#8189A2",
    steelGray: "#BCC0D0",
    cloudGray: "#DFE5EE",
    frostGray: "#F6F8FC",
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
