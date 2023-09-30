import Card from "@/components/atoms/Card";
import { CurriculumSessionProps } from "./types";

const CurriculumSession: React.FC<CurriculumSessionProps> = ({ session }) => {
  return (
    <Card padding={0}>
      <div>
        <div>{session?.title}</div>
      </div>
    </Card>
  );
};

export default CurriculumSession;
