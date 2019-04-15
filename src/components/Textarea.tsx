import React from "react";
import styled from "styled-components";
import { Surface } from "../styles/Surface";
import { Typography } from "../styles/Typography";
import { Density } from "../styles/Density";
import { Color } from "../styles/Color";

export const Textarea = styled.textarea`
  border-radius: ${Surface.defaultRadius};
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 15px;
  outline: none;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;
  color: ${Color.text.light};
  display: block;
  padding: ${Density.spacing.xs} ${Density.spacing.sm};
  height: 34px;
  width: 100%;
  font-family: ${Typography.defaultFontFamily};
  min-height: 104px;
  margin-bottom: ${Density.spacing.md};

  &:focus {
    border: 1px solid ${Color.primary.veryLight};
    box-shadow: 0 0 0 3px ${Color.primary.veryLight}33;
  }
`;