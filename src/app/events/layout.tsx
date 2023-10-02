import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eduqat - Events",
  description: "Eduqat - Events",
};

export default function EventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
