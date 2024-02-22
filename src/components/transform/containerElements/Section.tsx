import sectionSelector from "../../../utils/SectionSelector";
import ThreeCoordinates from "./sectionFactory/ThreeCoordinates";
import ThreeCoordinatesIcons from "./sectionFactory/ThreeCoordinatesIcons";
import "./Section.css";
import ScaleIcon from "./sectionFactory/ScaleIcon";
import TwoCoordinates from "./sectionFactory/TwoCoordinates";

interface SectionProps {
  name?: string;
  x?: boolean;
  y?: boolean;
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
  children?: React.ReactNode;
}

const Section = ({
  name = "none",
  x,
  y,
  z = false,
  scale = false,
  firstIcon = "",
  secondIcon = "",
  xVal,
  xType,
  yVal,
  yType,
  zVal,
  zType,
  children,
}: SectionProps) => {
  let section = null;

  const sectionType = sectionSelector({ x, y, z, scale, icon: firstIcon });

  if (sectionType === "ThreeCoordinates") {
    section = (
      <ThreeCoordinates
        title={name}
        xVal={xVal}
        xType={xType}
        yVal={yVal}
        yType={yType}
        zVal={zVal}
        zType={zType}
      />
    );
  }
  if (sectionType === "ThreeCoordinatesIcon") {
    section = (
      <ThreeCoordinatesIcons
        title={name}
        firstIcon={firstIcon}
        secondIcon={secondIcon}
        xVal={xVal}
        xType={xType}
        yVal={yVal}
        yType={yType}
        zVal={zVal}
        zType={zType}
      />
    );
  }

  if (sectionType === "ScaleIcon") {
    section = (
      <ScaleIcon
        title={name}
        firstIcon={firstIcon}
        secondIcon={secondIcon}
        xVal={xVal}
        yVal={yVal}
        zVal={zVal}
      />
    );
  }

  if (sectionType === "TwoCoordinates") {
    return (
      <div id="section-no-bottom">
        <TwoCoordinates
          title={name}
          xVal={xVal}
          xType={xType}
          yVal={yVal}
          yType={yType}
        />
      </div>
    );
  }

  if (sectionType === null) {
    return (
      <div id="section">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {children}
        </div>
      </div>
    );
  }

  return <div id="section">{section}</div>;
};

export default Section;
