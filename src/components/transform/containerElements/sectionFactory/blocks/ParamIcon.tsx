import "./ParamIcon.css";

interface ParamIconProps {
  firstIcon?: string;
  secondIcon?: string;
}

const ParamIcon = ({ firstIcon, secondIcon }: ParamIconProps) => {
  return (
    <div id="param-icon-container">
      <div>
        <img src={firstIcon} />
      </div>
      <div>
        <img src={secondIcon} />
      </div>
    </div>
  );
};

export default ParamIcon;
