import React from "react";

//  styled components
import {
  Code,
  ServiceItemCard,
  ItemBoldLabel,
  CountContructer,
  CountContructerChar
} from "./styles";

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
      <Code>{content.code}</Code>
      <React.Fragment></React.Fragment>
      <div style={{ display: "flex" }}>
        <ItemBoldLabel>{content.name}</ItemBoldLabel>
        <div style={{ display: "block" }}>
          <CountContructer>{content.totalContractor}</CountContructer>
          <CountContructerChar>契約数</CountContructerChar>
        </div>
      </div>
    </ServiceItemCard>
  );
};

export default Component;
