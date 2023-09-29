interface TypographyProps extends React.PropsWithChildren {}

const Typography: React.FC<TypographyProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Typography;
