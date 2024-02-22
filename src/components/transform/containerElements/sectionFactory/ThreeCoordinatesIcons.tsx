import ParameterWrapper from "./blocks/ParameterWrapper";
import ParameterField from "./blocks/ParameterField";

interface ThreeCoordinatesIconsProps {
  title: string;
  firstIcon?: string;
  secondIcon?: string;
  xVal?: string;
  xType?: string;
  yVal?: string;
  yType?: string;
  zVal?: string;
  zType?: string;
}

const ThreeCoordinatesIcons = ({
  title,
  firstIcon,
  secondIcon,
  xVal,
  xType,
  yVal,
  yType,
  zVal,
  zType,
}: ThreeCoordinatesIconsProps) => {
  return (
    <ParameterWrapper title={title}>
      <ParameterField
        firstIcon={firstIcon}
        secondIcon={secondIcon}
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

export default ThreeCoordinatesIcons;
