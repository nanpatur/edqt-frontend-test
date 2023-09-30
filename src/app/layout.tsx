"use client";
import { myTheme } from "../styles/theme";
import "./globals.css";
import { ThemeProvider } from "styled-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
