interface CardWrapperProps extends React.PropsWithChildren {}

const CardWrapper: React.FC<CardWrapperProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default CardWrapper;
