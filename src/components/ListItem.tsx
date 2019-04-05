import React from "react";
import styled from "styled-components";
import { Density, Color } from "../styles/Theme";
import { Text, TextStyle } from "./Text";

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${Density.spacing.md};
  margin: 0 -${Density.spacing.md};
  box-sizing: border-box;
  height: 64px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.045);
  cursor: ${(props: any) => (props.onClick ? "pointer" : "inherit")};

  &:first-of-type {
    margin-top: -${Density.spacing.md};
  }

  &:last-of-type {
    margin-bottom: -${Density.spacing.md};
    border-bottom: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:hover {
    background: ${(props: any) => (props.onClick ? "#fafafa" : "transparent")};
  }
`;

const StyledIcon = styled.img`
  border-radius: 4px;
  width: 34px;
  height: 34px;
  margin-right: ${Density.spacing.sm};
`;

const StyledLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

type Props = {
  label: string;
  subtitle?: string;
  icon?: string;
  onClick?: any;
  action?: React.ReactNode;
};

export const ListItem: React.FC<Props> = props => {
  const { label, subtitle, icon, action, onClick } = props;

  return (
    <StyledItem onClick={onClick}>
      <StyledLeft>
        {icon && <StyledIcon src={icon} />}
        <Info>
          <Text style={TextStyle.Heading3}>{label}</Text>
          {subtitle && <Text style={TextStyle.Subtitle}>{subtitle}</Text>}
        </Info>
      </StyledLeft>
      {action}
    </StyledItem>
  );
};
