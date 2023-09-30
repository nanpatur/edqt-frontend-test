import Container from "@/components/atoms/Container";
import Header from "@/components/organisms/commons/Header";

interface EventTemplateProps {}

const EventTemplate: React.FC<EventTemplateProps> = () => {
  return (
    <Container>
      <Header title="Event" withBack="/" />
      {/* <EventBody description={description} date={date} location={location} /> */}
    </Container>
  );
};

export default EventTemplate;
