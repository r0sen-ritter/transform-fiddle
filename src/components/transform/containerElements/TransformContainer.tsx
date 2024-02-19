import "./TransformContainer.css";

interface TransformContainerProps {
  children: React.ReactNode;
}

const TransformContainer = ({ children }: TransformContainerProps) => {
  return <div id="transform-container">{children}</div>;
};

export default TransformContainer;
