import Card from "@/components/atoms/Card";
import Typography from "@/components/atoms/Typography";
import { CurriculumScheduleProps } from "./types";
import { formatDate } from "@/utils/formatDate";

const CurriculumSchedule: React.FC<CurriculumScheduleProps> = ({
  schedule,
}) => {
  const { date, time } = formatDate(schedule);

  return (
    <Card>
      <Typography $size={16} $weight={500}>
        Event Schedule: {schedule ? `${date}, ${time}` : "-"}
      </Typography>
    </Card>
  );
};

export default CurriculumSchedule;
