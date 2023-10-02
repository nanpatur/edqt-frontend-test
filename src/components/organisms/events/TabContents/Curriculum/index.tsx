import Container from "@/components/atoms/Container";
import CurriculumSchedule from "./CurriculumSchedule";
import CurriculumSession from "./CurriculumSession";
import { EventCurriculumContentProps } from "./types";
import { useState } from "react";
import { Session } from "@/domains/events/models";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import { generateRandomString } from "@/utils/generateRandomString";

const EventCurriculumTabContent: React.FC<EventCurriculumContentProps> = ({
  event,
  updateEvent,
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
    updateEvent({
      ...event,
      curriculum: {
        ...event.curriculum,
        sessions,
      },
    });
    setDraggedSession(null);
  };

  const handleAddSession = () => {
    const newSession: Session = {
      id: generateRandomString(5),
      title: "New Session",
      materials: [],
    };
    updateEvent({
      ...event,
      curriculum: {
        ...event.curriculum,
        sessions: [...sessions, newSession],
      },
    });
    setSessions([...sessions, newSession]);
  };

  const handleDeleteSession = async (sessionId: string) => {
    const isConfirm = await window.confirm(
      "Are you sure you want to delete this session?",
    );
    if (!isConfirm) return;
    const newSessions = sessions.filter((session) => session.id !== sessionId);
    updateEvent({
      ...event,
      curriculum: {
        ...event.curriculum,
        sessions: newSessions,
      },
    });
    setSessions(newSessions);
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
          event={event}
          updateEvent={updateEvent}
          session={session}
          onDragOver={() => handleDragOver(index)}
          onDragStart={() => handleDragStart(session)}
          onDragEnd={handleDragEnd}
          draggable
          $isDragging={session.id === draggedSession?.id}
          handleDeleteSession={handleDeleteSession}
        />
      ))}
      <Container $display="flex" $flexDirection="column" $alignItems="flex-end">
        <Button
          $variant="primary"
          prefix={<Icon $name="plus" $size={24} />}
          onClick={handleAddSession}
        >
          Add Session
        </Button>
      </Container>
    </Container>
  );
};

export default EventCurriculumTabContent;
