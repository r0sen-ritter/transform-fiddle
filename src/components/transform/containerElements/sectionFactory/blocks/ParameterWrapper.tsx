import "./ParameterWrapper.css";

interface ParameterWrapperProps {
  title: string;
  children?: React.ReactNode;
}
const ParameterWrapper = ({ title, children }: ParameterWrapperProps) => {
  return (
    <div id="parameter-wrapper">
      <h4>{title}</h4>
      {children}
    </div>
  );
};

export default ParameterWrapper;
