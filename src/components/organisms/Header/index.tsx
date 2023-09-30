import Container from "@/components/atoms/Container";
import Divider from "@/components/atoms/Divider";
import Icon from "@/components/atoms/Icon";
import Typography from "@/components/atoms/Typography";

interface HeaderProps {
  title: string;
  withBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, withBack }) => {
  return (
    <Container padding={[24, 40]} shadow="lg" display="inline-flex" gap={24}>
      {withBack && (
        <>
          <Icon icon="left-arrow" size={24} />
          <Divider direction="vertical" />
        </>
      )}
      <Typography fontFamily="Poppins" weight={600}>
        {title}
      </Typography>
    </Container>
  );
};

export default Header;
