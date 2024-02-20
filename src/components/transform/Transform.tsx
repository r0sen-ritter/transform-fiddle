import Container from "./containerElements/Container";
import Topbar from "./containerElements/Topbar";
import TransformIcon from "/transform.png";
import Section from "./containerElements/Section";

const Transform = () => {
  return (
    <Container>
      <Topbar name="Transform" topbarIcon={TransformIcon} />
      <Section name="Move" x={true} y={true} z={true} />
    </Container>
  );
};

export default Transform;
