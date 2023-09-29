interface IconProps extends React.PropsWithChildren {}

const Icon: React.FC<IconProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Icon;
