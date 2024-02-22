import "./ParameterField.css";

interface XYBlockProps {
  xVal?: string;
  xType?: string;
  yVal?: string;
  yType?: string;
}

const XYBlock = ({ xVal, xType, yVal, yType }: XYBlockProps) => {
  return (
    <div className="fields-wrapper">
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
  );
};

export default XYBlock;
