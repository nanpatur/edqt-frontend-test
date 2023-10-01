"use client";
import StyledComponentsRegistry from "@/lib/registry";
import { myTheme } from "../styles/theme";
import "./globals.css";
import { ThemeProvider } from "styled-components";
import { useSetInitialEventData } from "@/domains/events/hooks";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useSetInitialEventData();

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
