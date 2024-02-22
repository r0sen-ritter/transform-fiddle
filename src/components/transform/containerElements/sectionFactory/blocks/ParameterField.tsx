import "./ParameterField.css";
import XYBlock from "./XYBlock";
import ParamIcon from "./ParamIcon";
import ScaleImage from "/x-y lock-icons.png";

interface ParameterFieldProps {
  z?: boolean;
  scale?: boolean;
  firstIcon?: string;
  secondIcon?: string;
  xVal?: string;
  xType?: string;
  yVal?: string;
  yType?: string;
  zVal?: string;
  zType?: string;
}

const ParameterField = ({
  z,
  scale,
  firstIcon,
  secondIcon,
  xVal,
  xType,
  yVal,
  yType,
  zVal,
  zType,
}: ParameterFieldProps) => {
  let ZIconBlock = null;

  if (z) {
    ZIconBlock = (
      <div className="fields-wrapper fields-wrapper-xyz">
        <div className="field">
          <div className="param param-name">Z</div>
          <div className="param param-value">{zVal}</div>
          <div className="param param-type">{zType}</div>
        </div>
      </div>
    );
  }

  if (firstIcon && secondIcon) {
    ZIconBlock = (
      <div className="fields-wrapper">
        <div className="field">
          <div className="param param-name">Z</div>
          <div className="param param-value">{zVal}</div>
          <div className="param param-type">{zType}</div>
        </div>
        <div className="field">
          <ParamIcon firstIcon={firstIcon} secondIcon={secondIcon} />
        </div>
      </div>
    );
  }

  return (
    <div id="parameter-field-wrapper">
      <XYBlock xVal={xVal} xType={xType} yVal={yVal} yType={yType} />
      {scale && <img src={ScaleImage} id="scale-image" alt="scale" />}
      {ZIconBlock}
    </div>
  );
};

export default ParameterField;
