import Container from "@/components/atoms/Container";
import Divider from "@/components/atoms/Divider";
import Typography from "@/components/atoms/Typography";
import IconLink from "@/components/molecules/IconLink";

interface HeaderProps {
  title: string;
  withBack?: string;
}

const Header: React.FC<HeaderProps> = ({ title, withBack }) => {
  return (
    <Container padding={[24, 40]} shadow="lg" display="flex" gap={24}>
      {withBack && (
        <>
          <IconLink href={withBack} icon="left-arrow" size={24} />
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
