import React from "react";
import styled from "styled-components";

type Props = {
  label: string;
  url?: string;
  action?: React.ReactNode;
};

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Action = styled.div`
  margin-top: ${props => props.theme.Density.spacing.sm};
`;

const Link = styled.a`
  text-decoration: none;
  margin-left: ${props => props.theme.Density.spacing.xs};
  color: ${props => props.theme.Color.primary.base};

  &:hover {
    text-decoration: underline;
  }
`;

// TODO: use text style
const Label = styled.span`
  font-size: 14px;
  color: ${props => props.theme.Color.text.veryLight};
  font-weight: 500;
`;

export const EmptyState: React.FC<Props> = props => {
  const { label, url, action } = props;

  return (
    <EmptyContainer>
      <Label>
        {label}
        {url && (
          <Link target="_blank" href={url}>
            Learn more
          </Link>
        )}
      </Label>
      {action && <Action>{action}</Action>}
    </EmptyContainer>
  );
};
