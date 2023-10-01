import Container from "@/components/atoms/Container";
import CurriculumSchedule from "./CurriculumSchedule";
import CurriculumSession from "./CurriculumSession";
import { EventCurriculumContentProps } from "./types";
import { useState } from "react";
import { Session } from "@/domains/events/models";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";

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
    <Container
      $padding={[32, 0]}
      $display="flex"
      $flexDirection="column"
      $gap={24}
    >
      <CurriculumSchedule schedule={event?.startDate} />
      {sessions.map((session, index) => (
        <CurriculumSession
          key={index}
          session={session}
          onDragOver={() => handleDragOver(index)}
          onDragStart={() => handleDragStart(session)}
          onDragEnd={handleDragEnd}
          draggable
          $isDragging={session.id === draggedSession?.id}
        />
      ))}
      <Container $display="flex" $flexDirection="column" $alignItems="flex-end">
        <Button $variant="primary" prefix={<Icon $name="plus" $size={24} />}>
          Add Session
        </Button>
      </Container>
    </Container>
  );
};

export default EventCurriculumTabContent;
