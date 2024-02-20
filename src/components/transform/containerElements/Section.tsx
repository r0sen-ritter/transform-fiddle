import sectionSelector from "../../../utils/SectionSelector";
import ThreeCoordinates from "./sectionFactory/ThreeCoordinates";
import "./Section.css";

interface SectionProps {
  name: string;
  x: boolean;
  y: boolean;
  z?: boolean;
  scale?: boolean;
  firstIcon?: string | null;
  secondIcon?: string | null;
}

const Section = ({
  name,
  x,
  y,
  z = false,
  scale = false,
  firstIcon = null,
  secondIcon = null,
}: SectionProps) => {
  let section = null;
  const sectionType = sectionSelector({ x, y, z, scale, icon: firstIcon });

  if (sectionType === "ThreeCoordinates") {
    section = <ThreeCoordinates title={name} />;
  }

  return <div id="section">{section}</div>;
};

export default Section;
