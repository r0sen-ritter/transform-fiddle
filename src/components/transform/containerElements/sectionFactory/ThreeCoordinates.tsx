import ParameterWrapper from "./blocks/ParameterWrapper";
import ParameterField from "./blocks/ParameterField";

interface ThreeCoordinatesProps {
  title: string;
  xVal?: string;
  xType?: string;
  yVal?: string;
  yType?: string;
  zVal?: string;
  zType?: string;
}
const ThreeCoordinates = ({
  title,
  xVal,
  xType,
  yVal,
  yType,
  zVal,
  zType,
}: ThreeCoordinatesProps) => {
  return (
    <ParameterWrapper title={title}>
      <ParameterField
        z={true}
        xVal={xVal}
        xType={xType}
        yVal={yVal}
        yType={yType}
        zVal={zVal}
        zType={zType}
      />
    </ParameterWrapper>
  );
};

export default ThreeCoordinates;
