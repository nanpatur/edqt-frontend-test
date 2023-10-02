"use client";
import dynamic from "next/dynamic";
import { useGetEvent } from "@/domains/events/hooks";

const EventTemplate = dynamic(() => import("@/components/templates/events"), {
  ssr: false,
});

export default function EventPage() {
  const { data: event, refetch: refetchEvent } = useGetEvent("1");
  return <EventTemplate event={event} refetchEvent={refetchEvent} />;
}
