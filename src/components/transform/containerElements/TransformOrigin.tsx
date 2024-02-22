import "./TransformOrigin.css";
import Union from "/Union.png";

const TransformOrigin = () => {
  return (
    <div id="transform-origin-border">
      <div id="origin-btn">
        <div id="origin-icon">
          <img src={Union} id="union-img" alt="union" />
        </div>
        <div id="origin-btn-text">Set Transform Origin</div>
      </div>
    </div>
  );
};

export default TransformOrigin;
