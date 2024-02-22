interface SectionSelectorProps {
  x: boolean;
  y: boolean;
  z: boolean;
  scale: boolean;
  icon: string;
}

const sectionSelector = ({ x, y, z, scale, icon }: SectionSelectorProps) => {
  if (x && y && z && scale && icon) {
    return "ScaleIcon";
  }
  if (x && y && z && !scale && !icon) {
    return "ThreeCoordinates";
  }
  if (x && y && !z && !scale && !icon) {
    return "TwoCoordinates";
  }
  if (x && y && z && !scale && icon) {
    return "ThreeCoordinatesIcon";
  }
  return null;
};

export default sectionSelector;
