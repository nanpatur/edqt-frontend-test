import Container from "@/components/atoms/Container";
import Header from "@/components/molecules/Header";
import EventTitle from "@/components/organisms/events/Title";
import { EventTemplateProps } from "./types";
import Tabs from "@/components/molecules/Tabs";
import { useMemo } from "react";
import { TabItemProps } from "@/components/molecules/Tabs/types";
import EventCurriculumTabContent from "@/components/organisms/events/TabContents/Curriculum";
import { formatDate } from "@/utils/formatDate";

const EventTemplate: React.FC<EventTemplateProps> = ({ event }) => {
  const items = useMemo<TabItemProps[]>(
    () => [
      {
        key: "1",
        label: "Curriculum",
        content: <EventCurriculumTabContent event={event} />,
      },
    ],
    [event],
  );

  const formattedLastEdited = useMemo(() => {
    if (!event.updatedAt) return "";
    const { date, time } = formatDate(event.updatedAt);
    return `Last edited ${date} | ${time}`;
  }, [event.updatedAt]);

  return (
    <Container>
      <Header title="Event" withBack="/" />
      <Container padding={40} display="flex" flexDirection="column" gap={32}>
        <EventTitle title={event.title} subtitle={formattedLastEdited} />
        <Tabs defaultActiveKey="1" items={items} />
      </Container>
    </Container>
  );
};

export default EventTemplate;