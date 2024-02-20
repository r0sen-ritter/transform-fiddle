import "./Container.css";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div id="container">{children}</div>;
};

export default Container;
