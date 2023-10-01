import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Typography from "@/components/atoms/Typography";
import { EventTitleProps } from "./types";
import Icon from "@/components/atoms/Icon";

const EventTitle: React.FC<EventTitleProps> = ({ title, subtitle }) => {
  return (
    <Container display="flex" $alignItems="center">
      <Container display="flex" $gap={32} $alignItems="center">
        <Typography as="h1" size={32} $weight={500}>
          {title}
        </Typography>
        <Typography size={12} $weight={500} color="slateGray">
          {subtitle}
        </Typography>
      </Container>
      <Button $variant="secondary" prefix={<Icon name="eye" size={24} />}>
        Preview
      </Button>
    </Container>
  );
};

export default EventTitle;
