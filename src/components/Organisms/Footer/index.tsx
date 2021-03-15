import React from "react";

import { StyledToolbar } from "./styles";

interface ComponentProps {
  height: number;
}
const Component: React.FC<ComponentProps> = props => {
  return <StyledToolbar height={props.height}>Footer</StyledToolbar>;
};

export default Component;
