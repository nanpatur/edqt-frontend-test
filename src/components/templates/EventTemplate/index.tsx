import Container from "@/components/atoms/Container";
import Header from "@/components/organisms/commons/Header";
import EventTitle from "@/components/organisms/events/Title";
import { EventTemplateProps } from "./types";

const EventTemplate: React.FC<EventTemplateProps> = ({ event }) => {
  return (
    <Container>
      <Header title="Event" withBack="/" />
      <Container padding={40}>
        <EventTitle
          title="Belajar dan praktek cinematic videography"
          subtitle="Last edited 18 October 2021 | 13:23"
          onClickPreview={() => {}}
        />
      </Container>
    </Container>
  );
};

export default EventTemplate;
