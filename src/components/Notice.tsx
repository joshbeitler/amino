import React from "react";
import styled from "styled-components";

import { Intent } from "../schemas/Intent";
import { Card } from "./Card";
import { Density, Color } from "../styles/Theme";
import { InfoIcon } from "../icons/InfoIcon";
import { Text } from "./Text";
import { WarningIcon } from "../icons/WarningIcon";
import { ErrorIcon } from "../icons/ErrorIcon";

type Props = {
  action?: any;
  intent?: Intent;
};

const Ribbon = styled.div`
  width: 4px;
  margin-left: -${Density.spacing.md};
  margin-top: -${Density.spacing.md};
  margin-bottom: -${Density.spacing.md};
  content: " ";
  margin-right: ${Density.spacing.md};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const PrimaryIntent = styled(Ribbon)`
  background: ${Color.primary.base};
`;

const DangerIntent = styled(Ribbon)`
  background: ${Color.danger.base};
`;

const WarningIntent = styled(Ribbon)`
  background: ${Color.warning.base};
`;

const IntentStack = styled.div`
  display: flex;
  flex-direction: row;
`;

const NoticeInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;

  svg {
    margin-right: ${Density.spacing.sm};
  }
`;

const PrimaryIntentIcon = styled.div`
  align-items: center;
  display: flex;

  svg {
    fill: ${Color.primary.base};
  }
`;

const WarningIntentIcon = styled.div`
  align-items: center;
  display: flex;

  svg {
    fill: ${Color.warning.base};
  }
`;

const DangerIntentIcon = styled.div`
  align-items: center;
  display: flex;

  svg {
    fill: ${Color.danger.base};
  }
`;

export const Notice: React.FC<Props> = props => {
  const { children, action, intent } = props;

  const buildIntentRibbon = () => {
    switch (intent) {
      case Intent.Primary:
        return <PrimaryIntent />;
      case Intent.Warning:
        return <WarningIntent />;
      case Intent.Danger:
        return <DangerIntent />;
      default:
        return null;
    }
  };

  const buildIntentIcon = () => {
    switch (intent) {
      case Intent.Primary:
        return (
          <PrimaryIntentIcon>
            <InfoIcon />
          </PrimaryIntentIcon>
        );
      case Intent.Warning:
        return (
          <WarningIntentIcon>
            <WarningIcon />
          </WarningIntentIcon>
        );
      case Intent.Danger:
        return (
          <DangerIntentIcon>
            <ErrorIcon />
          </DangerIntentIcon>
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      <IntentStack>
        {buildIntentRibbon()}

        <NoticeInfo>
          {buildIntentIcon()}
          <Text>{children}</Text>
        </NoticeInfo>

        {action && action}
      </IntentStack>
    </Card>
  );
};