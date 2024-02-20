import "./SectionElementWrapper.css";

interface ThreeCoordinatesProps {
  title: string;
}
const ThreeCoordinates = ({ title }: ThreeCoordinatesProps) => {
  return (
    <div className="section-element-wrapper">
      <h4 className="section-element-title">{title}</h4>
    </div>
  );
};

export default ThreeCoordinates;
