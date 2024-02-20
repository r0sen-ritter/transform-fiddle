import "./Topbar.css";
import ReverseIcon from "/reverse.left.png";
import ToggleIcon from "/ON z.png";

interface TransformTopbarProps {
  name: string;
  topbarIcon: string;
}

const Topbar = ({ name, topbarIcon }: TransformTopbarProps) => {
  return (
    <div id="topbar">
      <div id="topbar-right-panel">
        <div className="icon-container">
          <img src={topbarIcon} id="icon-image" alt={`${name} icon`} />
        </div>
        <h4>{name}</h4>
      </div>
      <div className="icon-container">
        <img src={ReverseIcon} id="reverse-icon-image" alt="reverse icon" />
      </div>
      <div className="icon-container">
        <img src={ToggleIcon} id="toggle-icon-image" alt="toggle icon" />
      </div>
    </div>
  );
};

export default Topbar;
