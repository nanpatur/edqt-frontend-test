"use client";
import dynamic from "next/dynamic";

const HomeTemplate = dynamic(() => import("@/components/templates/home"), {
  ssr: false,
});

export default function Home() {
  return <HomeTemplate />;
}
