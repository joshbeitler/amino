import React from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

import { IDataConstraints } from "../schemas/IDataConstraints";
import { Info } from "./Info";

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${p => p.theme.Density.spacing.xs};
`;

const StyledInput = styled.input<Props>`
  border-radius: ${p => p.theme.Surface.radius.sm};
  border: 1px solid ${p => p.theme.Color.gray.base};
  font-size: ${p => p.theme.Typography.size.base};
  outline: none;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;
  color: ${props => props.theme.Color.text.light};
  display: block;
  padding: ${props => props.theme.Density.spacing.xs} ${props => props.theme.Density.spacing.sm};
  padding-left: ${props => (props.prefix ? "42px" : props.theme.Density.spacing.sm)};
  padding-right: ${props => (props.postfix ? "42px" : props.theme.Density.spacing.sm)};
  height: 40px;
  width: 100%;
  background: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.01);

  &::-webkit-input-placeholder {
    color: ${props => props.theme.Color.text.light};
    opacity: 0.3;
  }

  &::-moz-placeholder {
    color: ${props => props.theme.Color.text.light};
    opacity: 0.3;
  }

  &:-ms-input-placeholder {
    color: ${props => props.theme.Color.text.light};
    opacity: 0.3;
  }

  &:focus {
    border: 1px solid ${props => props.theme.Color.primary.veryLight};
    box-shadow: 0 0 0 3px ${props => props.theme.Color.primary.veryLight}88;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const InputLabel = styled.label`
  color: ${props => props.theme.Color.text.light};
  font-size: ${p => p.theme.Typography.size.base};
  display: block;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Prefix = styled.div`
  border-right: 1px solid ${props => props.theme.Color.gray.base};
  color: ${props => props.theme.Color.text.light};
  opacity: 0.8;
  padding: 0 ${props => props.theme.Density.spacing.sm};
  z-index: 10;
  box-sizing: border-box;
  position: absolute;
  left: 2px;
  top: 11px;
  user-select: none;
`;

const Postfix = styled.div`
  border-left: 1px solid ${props => props.theme.Color.gray.base};
  color: ${props => props.theme.Color.text.light};
  opacity: 0.8;
  padding: 0 ${props => props.theme.Density.spacing.sm};
  z-index: 10;
  box-sizing: border-box;
  position: absolute;
  right: 2px;
  top: 11px;
  user-select: none;
`;

type InputProps = {
  label?: string;
  onChange?: any;
  valid?: boolean;
  constraints?: IDataConstraints;
  prefix?: string;
  postfix?: string;
  helpText?: string;
};

type Props = InputProps & React.PropsWithoutRef<JSX.IntrinsicElements["input"]>;

export const Input: React.FC<Props> = props => {
  const { label, onChange, prefix, postfix, helpText } = props;

  const onInvalid = (e: any) => {
    e.target.classList.add("invalid");
  };

  return (
    <div className="amino-input-wrapper">
      {label && (
        <LabelWrapper>
          <InputLabel>{label}</InputLabel>
          {helpText && (
            <>
              <Info data-tip={helpText}>i</Info>
              <ReactTooltip className="amino-tooltip" effect="solid" place="right" />
            </>
          )}
        </LabelWrapper>
      )}
      <InputWrapper>
        {prefix && <Prefix>{prefix}</Prefix>}
        <StyledInput onChange={onChange} onInvalid={onInvalid} {...props} />
        {postfix && <Postfix>{postfix}</Postfix>}
      </InputWrapper>
    </div>
  );
};

Input.defaultProps = {
  valid: true
};
