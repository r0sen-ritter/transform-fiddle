import ParameterWrapper from "./blocks/ParameterWrapper";
import ParameterField from "./blocks/ParameterField";

interface ScaleIconProps {
  title: string;
  firstIcon?: string;
  secondIcon?: string;
  xVal?: string;
  yVal?: string;
  zVal?: string;
}

const ScaleIcon = ({
  title,
  firstIcon,
  secondIcon,
  xVal,
  yVal,
  zVal,
}: ScaleIconProps) => {
  return (
    <ParameterWrapper title={title}>
      <ParameterField
        xVal={xVal}
        yVal={yVal}
        zVal={zVal}
        scale={true}
        firstIcon={firstIcon}
        secondIcon={secondIcon}
      />
    </ParameterWrapper>
  );
};

export default ScaleIcon;
