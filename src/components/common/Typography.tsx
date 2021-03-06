import React from "react";
import styled from "styled-components";

interface Props {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";
  color?: "primary" | "secondary" | "grey";
  gutterBottom?: boolean;
  fontSize?: string;
  fontWeight?: string | number;
  transform?: string;
  fontStyle?: string;
  children?: React.ReactNode;
  textAlign?: string;
  className?: string;
}

export const Typography = React.memo(function (props: Props) {
  const StyledElement = buildTypographyElement(props);
  const { className } = props;
  return <StyledElement className={className}>{props.children}</StyledElement>;
});

function buildTypographyElement(props: Props) {
  const {
    as = "h1",
    color = "primary",
    gutterBottom,
    fontSize,
    fontWeight,
    transform,
    fontStyle,
    textAlign,
  } = props;
  return styled[as]`
    color: var(--${color});
    ${gutterBottom ? "margin-bottom: 10px" : ""};
    ${fontSize ? `font-size: ${fontSize}` : ""};
    ${fontWeight ? `font-weight: ${fontWeight}` : ""};
    ${transform ? `text-transform: ${transform}` : ""};
    ${fontStyle ? `font-style: ${fontStyle}` : ""};
    ${textAlign ? `text-align: ${textAlign}` : ""};
  `;
}
