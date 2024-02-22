import "./ThreeDTransformation.css";
import ParameterWrapper from "./sectionFactory/blocks/ParameterWrapper";
import Section from "./Section";
import "./sectionFactory/blocks/ParameterField.css";

const ThreeDTransformation = () => {
  return (
    <Section>
      <div id="d-transform">
        <div id="d-transform-text">3D Transformation</div>
      </div>
      <ParameterWrapper title="Distance">
        <div id="d-field-wrapper">
          <div className="field">
            <div className="param param-name">Self</div>
            <div className="param param-value">46</div>
            <div className="param param-type">px</div>
          </div>

          <div className="field">
            <div className="param param-name">Child</div>
            <div className="param param-value">205</div>
            <div className="param param-type">px</div>
          </div>
        </div>
      </ParameterWrapper>
    </Section>
  );
};

export default ThreeDTransformation;
