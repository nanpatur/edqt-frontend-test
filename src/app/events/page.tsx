"use client";
import { Event } from "@/domains/events/models";
import exampleEvent from "./example.json";
import dynamic from "next/dynamic";
import { useGetEvent } from "@/domains/events/hooks";

const EventTemplate = dynamic(() => import("@/components/templates/events"), {
  ssr: false,
});

export default function EventPage() {
  const { data: event } = useGetEvent("1");
  return <EventTemplate event={event} />;
}
