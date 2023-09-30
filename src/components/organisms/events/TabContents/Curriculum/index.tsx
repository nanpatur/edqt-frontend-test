import Container from "@/components/atoms/Container";
import CurriculumSchedule from "./CurriculumSchedule";
import CurriculumSession from "./CurriculumSession";
import { EventCurriculumContentProps } from "./types";

const EventCurriculumTabContent: React.FC<EventCurriculumContentProps> = ({
  event,
}) => {
  const sessions = event?.curriculum?.sessions || [];

  return (
    <Container padding={[32, 0]} display="flex" flexDirection="column" gap={24}>
      <CurriculumSchedule schedule={event?.startDate} />
      {sessions.map((session, i) => (
        <CurriculumSession key={i} session={session} />
      ))}
    </Container>
  );
};

export default EventCurriculumTabContent;
