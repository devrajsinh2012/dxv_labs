import React from "react";
import "./StarBorder.css";

interface StarBorderProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  color?: string;
  speed?: string;
  thickness?: number;
  borderRadius?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  borderRadius = "4px",
  children,
  style = {},
  ...rest
}: StarBorderProps) => {
  // Separate style for container vs inner content
  const {
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    position,
    top,
    left,
    right,
    bottom,
    zIndex,
    width,
    minWidth,
    maxWidth,
    flex,
    alignSelf,
    display,
    ...innerStyle
  } = style;

  const containerStyle = {
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    position,
    top,
    left,
    right,
    bottom,
    zIndex,
    width,
    minWidth,
    maxWidth,
    flex,
    alignSelf,
    display,
    padding: `${thickness}px`,
    borderRadius,
  };

  return (
    <Component
      className={`star-border-container ${className}`}
      style={containerStyle}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="inner-content"
        style={{
          borderRadius: `calc(${borderRadius} - ${thickness}px)`,
          ...innerStyle,
        }}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
