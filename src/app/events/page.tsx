"use client";
import { Event } from "@/domains/events/models";
import exampleEvent from "./example.json";
import dynamic from "next/dynamic";

const EventTemplate = dynamic(() => import("@/components/templates/events"), {
  ssr: false,
});

export default function EventPage() {
  const event: Event = exampleEvent as Event;
  return <EventTemplate event={event} />;
}
