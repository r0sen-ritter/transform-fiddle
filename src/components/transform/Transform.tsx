import Container from "./containerElements/Container";
import Topbar from "./containerElements/Topbar";
import TransformIcon from "/transform.png";
import Section from "./containerElements/Section";
import FirstIcon1 from "/Group 12 Copy.png";
import SecondIcon1 from "/Group 12.png";
import FirstIcon2 from "/resize_1.png";
import SecondIcon2 from "/resize_2.png";
import TransformOrigin from "./containerElements/TransformOrigin";
import ThreeDTransformation from "./containerElements/ThreeDTransformation";
import PerspectiveOrigin from "./containerElements/PerspectiveOrigin";

const Transform = () => {
  return (
    <Container>
      <Topbar name="Transform" topbarIcon={TransformIcon} />
      <Section
        name="Move"
        x={true}
        y={true}
        z={true}
        xVal="1000"
        xType="px"
        yVal="1000"
        yType="px"
        zVal="0"
      />
      <Section
        name="Rotate"
        x={true}
        y={true}
        z={true}
        firstIcon={FirstIcon1}
        secondIcon={SecondIcon1}
        xVal="46"
        xType="turn"
        yVal="0"
        yType="rad"
        zVal="0"
        zType="deg"
      />
      <Section
        name="Scale"
        x={true}
        y={true}
        z={true}
        firstIcon={FirstIcon2}
        secondIcon={SecondIcon2}
        xVal="8"
        yVal="8"
        zVal="8"
        scale={true}
      />
      <Section
        name="Skew"
        x={true}
        y={true}
        xVal="48"
        yVal="8"
        xType="deg"
        yType="deg"
      />
      <TransformOrigin />
      <ThreeDTransformation />
      <PerspectiveOrigin />
    </Container>
  );
};

export default Transform;
