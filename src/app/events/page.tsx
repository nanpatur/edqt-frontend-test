"use client";
import dynamic from "next/dynamic";
import { useGetEvent, useSetInitialEventData } from "@/domains/events/hooks";

const EventTemplate = dynamic(() => import("@/components/templates/events"), {
  ssr: false,
});

export default function EventPage() {
  const { data: event, refetch: refetchEvent, isLoading } = useGetEvent("1");
  return (
    <EventTemplate
      event={event}
      refetchEvent={refetchEvent}
      isLoadingEvent={isLoading}
    />
  );
}
