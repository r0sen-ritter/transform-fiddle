import Container from "./containerElements/Container";
import Topbar from "./containerElements/Topbar";
import TransformIcon from "/transform.png";

const Transform = () => {
  return (
    <Container>
      <Topbar name="Transform" topbarIcon={TransformIcon} />
    </Container>
  );
};

export default Transform;
