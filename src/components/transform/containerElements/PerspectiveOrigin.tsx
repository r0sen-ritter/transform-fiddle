import ParameterWrapper from "./sectionFactory/blocks/ParameterWrapper";
import "./PerspectiveOrigin.css";
import TopLeft from "/top-left.png";
import TopMiddle from "/top-middle.png";
import TopRight from "/top-right.png";
import MiddleLeft from "/middle-left.png";
import MiddleMiddle from "/middle-middle.png";
import MiddleRight from "/middle-right.png";
import BottomLeft from "/bottom-left.png";
import BottomMiddle from "/bottom-middle.png";
import BottomRight from "/bottom-right.png";
import LeftIcon from "/left-icon.png";
import TopIcon from "/top-icon.png";

const PerspectiveOrigin = () => {
  return (
    <div id="perspective-wrapper">
      <ParameterWrapper title="Perspective Origin">
        <div id="box-wrapper">
          <div id="block">
            <div className="block-group">
              <div className="block-element top-left">
                <img src={TopLeft} className="symbol" />
              </div>
              <div className="block-element top-middle">
                <img src={TopMiddle} className="symbol" />
              </div>
              <div className="block-element top-right">
                <img src={TopRight} className="symbol" />
              </div>
            </div>

            <div className="block-group">
              <div className="block-element middle-left">
                <img src={MiddleLeft} className="symbol" />
              </div>
              <div className="block-element middle-middle">
                <img src={MiddleMiddle} className="symbol-middle" />
              </div>
              <div className="block-element middle-right">
                <img src={MiddleRight} className="symbol" />
              </div>
            </div>

            <div className="block-group">
              <div className="block-element bottom-left">
                <img src={BottomLeft} className="symbol" />
              </div>
              <div className="block-element bottom-middle">
                <img src={BottomMiddle} className="symbol" />
              </div>
              <div className="block-element bottom-right">
                <img src={BottomRight} className="symbol" />
              </div>
            </div>
          </div>

          <div id="controller-wrapper">
            <div className="controller-item-block">
              <div className="controller-icon-box">
                <img src={LeftIcon} style={{ height: "8px", width: "16px" }} />
              </div>
              <div className="direction">Left</div>
              <div className="direction direction-value">25</div>
              <div className="direction direction-type">%</div>
            </div>

            <div className="controller-item-block">
              <div className="controller-icon-box">
                <img src={TopIcon} style={{ height: "16px", width: "8px" }} />
              </div>
              <div className="direction">Top</div>
              <div className="direction direction-value">25</div>
              <div className="direction direction-type">%</div>
            </div>
          </div>
        </div>
      </ParameterWrapper>
    </div>
  );
};

export default PerspectiveOrigin;
