"use client";
import EventTemplate from "@/components/templates/events";
import { Event } from "@/domains/events/models";

export default function EventPage() {
  const event: Event = {
    id: "1",
    title: "Sample Event",
    startDate: "2023-10-01T08:00:00", // Assuming UTC format for dates
    curriculum: {
      sessions: [
        {
          title: "Introduction to React",
          materials: [
            {
              id: "101",
              title: "React Basics",
              type: "online",
              url: "https://example.com/react-basics",
              isRequired: true,
              startDate: "2023-10-01T08:00:00",
              durationInMinutes: 60,
              isDownloadable: true,
            },
            {
              id: "102",
              title: "React State Management",
              type: "onsite",
              url: "https://example.com/state-management",
              isRequired: true,
              startDate: "2023-10-02T10:00:00",
              durationInMinutes: 90,
              isDownloadable: true,
            },
          ],
        },
        {
          title: "Advanced React Topics",
          materials: [
            {
              id: "201",
              title: "React Hooks",
              type: "online",
              url: "https://example.com/react-hooks",
              isRequired: true,
              startDate: "2023-10-03T08:00:00",
              durationInMinutes: 75,
              isDownloadable: true,
            },
            {
              id: "202",
              title: "React Performance Optimization",
              type: "onsite",
              url: "https://example.com/performance-optimization",
              isRequired: false,
              startDate: "2023-10-04T14:00:00",
              durationInMinutes: 120,
              isDownloadable: true,
            },
          ],
        },
      ],
    },
    updatedAt: "2023-09-28T12:00:00",
    createdAt: "2023-09-28T10:30:00",
  };
  return <EventTemplate event={event} />;
}
