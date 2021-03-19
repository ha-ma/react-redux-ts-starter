import React from "react";

//  styled components
import {
  Code,
  BoldLabel,
  Head,
  HeadLabel,
  Description,
  AddItemButton,
  ServiceContainer,
  ContentWrapper,
  ServiceItemCard,
  ItemBoldLabel,
  CountContructer,
  CountContructerChar,
  StyledFaIcon,
  StyledIconButton,
  StyledCardActions
} from "./styles";

import { Grid } from "@material-ui/core";

import { ServiceItemProps } from "./types";

//  modules
import SelfClass from "./modules";

interface ComponentProps {
  content: ServiceItemProps;
  key: number;
}

const Component: React.FC<ComponentProps> = props => {
  const selfClass = new SelfClass();

  const { content } = props;

  return (
    <ServiceItemCard>
      <Code>Service-1</Code>
      <div style={{ display: "flex" }}>
        <ItemBoldLabel>ISP (2年縛り月額2000円)</ItemBoldLabel>
        <div style={{ display: "block" }}>
          <CountContructer>123</CountContructer>
          <CountContructerChar>契約数</CountContructerChar>
        </div>
      </div>
    </ServiceItemCard>
  );
};

export default Component;
