import React from "react";
import styles from "./VerticalLine.module.css"; // Import the CSS module
import { darkgray } from "../../interfaces/ColorPallete";

interface VerticalLineProps {
  color?: string;
  height?: number;
}

const VerticalLine: React.FC<VerticalLineProps> = ({ color, height }) => {
  const verticalLineStyle = {
    height: height ? `${height}px` : "100vh",
    width: "1px",
    backgroundColor: color ? color : darkgray,
  };

  return <div style={verticalLineStyle} className={styles.verticalLine} />;
};

export default VerticalLine;
