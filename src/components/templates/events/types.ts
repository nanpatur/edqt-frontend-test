import { Event } from "@/domains/events/models";

export interface EventTemplateProps {
  event: Event;
  refetchEvent: () => void;
  isLoadingEvent: boolean;
}
