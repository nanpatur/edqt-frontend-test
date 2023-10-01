import Container from "@/components/atoms/Container";
import CurriculumSchedule from "./CurriculumSchedule";
import CurriculumSession from "./CurriculumSession";
import { EventCurriculumContentProps } from "./types";
import { useState } from "react";
import { Session } from "@/domains/events/models";
import styled from "styled-components";
import Button from "@/components/atoms/Button";

const DraggableSession = styled.div<any>`
  position: relative;
  /* cursor: grab; */
  transition:
    transform 0.2s ease-in-out,
    opacity 0.2s ease-in-out;

  &:active {
    /* cursor: grabbing; */
    border: ${({ isDragged }) => (isDragged ? "1px solid red" : "none")};
  }
`;

const EventCurriculumTabContent: React.FC<EventCurriculumContentProps> = ({
  event,
}) => {
  const [sessions, setSessions] = useState(event?.curriculum?.sessions || []);
  const [draggedSession, setDraggedSession] = useState<Session | null>(null);

  const handleDragStart = (session: Session) => {
    setDraggedSession(session);
  };

  const handleDragOver = (index: number) => {
    if (!draggedSession) return;

    const newSessions = [
      ...sessions.filter((session) => session.id !== draggedSession.id),
    ];
    newSessions.splice(index, 0, draggedSession);
    setSessions(newSessions);
  };

  const handleDragEnd = () => {
    setDraggedSession(null);
  };

  return (
    <Container padding={[32, 0]} display="flex" flexDirection="column" gap={24}>
      <CurriculumSchedule schedule={event?.startDate} />
      {sessions.map((session, index) => (
        <CurriculumSession
          key={index}
          session={session}
          onDragOver={() => handleDragOver(index)}
          onDragStart={() => handleDragStart(session)}
          onDragEnd={handleDragEnd}
          draggable
          isDragging={session.id === draggedSession?.id}
        />
      ))}
    </Container>
  );
};

export default EventCurriculumTabContent;
