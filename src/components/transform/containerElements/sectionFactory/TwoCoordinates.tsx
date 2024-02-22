import ParameterWrapper from "./blocks/ParameterWrapper";
import "./blocks/ParameterField.css";

interface TwoCoordinatesProps {
  title: string;
  xVal?: string;
  xType?: string;
  yVal?: string;
  yType?: string;
}

const TwoCoordinates = ({
  title,
  xVal,
  xType,
  yVal,
  yType,
}: TwoCoordinatesProps) => {
  return (
    <ParameterWrapper title={title}>
      <div id="parameter-field-wrapper">
        <div className="field">
          <div className="param param-name">X</div>
          <div className="param param-value">{xVal}</div>
          <div className="param param-type">{xType}</div>
        </div>
        <div className="field">
          <div className="param param-name">Y</div>
          <div className="param param-value">{yVal}</div>
          <div className="param param-type">{yType}</div>
        </div>
      </div>
    </ParameterWrapper>
  );
};

export default TwoCoordinates;
