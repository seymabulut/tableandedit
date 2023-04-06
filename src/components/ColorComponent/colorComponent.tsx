import { FC } from "react";
import "./colorComponent.scss";

interface Props {
  color: string;
}

const ColorComponent: FC<Props> = ({ color }) => {
  return (
    <div className="container">
      <div className="rectangle" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default ColorComponent;
