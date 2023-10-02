import RootWrapper from "@/components/templates/root";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eduqat - Home",
  description: "Eduqat - Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <RootWrapper>{children}</RootWrapper>
      </body>
    </html>
  );
}
