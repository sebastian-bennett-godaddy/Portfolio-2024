import React from "react";
import styles from "./VerticalLine.module.css"; // Import the CSS module
import { black, darkgray } from "../../interfaces/ColorPallete";

interface HorizontalLineProps {
  color?: string;
  length?: number;
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({ color, length }) => {
  const HorizontalLineStyle = {
    width: length ? `${length}vw` : "100vw",
    height: "1px",
    backgroundColor: color ? color : darkgray,
  };

  return <div style={HorizontalLineStyle}></div>;
};

export default HorizontalLine;
