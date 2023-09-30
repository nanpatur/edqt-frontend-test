import { Event, Session } from "@/domains/events/models";

export interface CurriculumScheduleProps {
  schedule: string;
}

export interface CurriculumSessionProps {
  session: Session;
}

export interface EventCurriculumContentProps {
  event: Event;
}
