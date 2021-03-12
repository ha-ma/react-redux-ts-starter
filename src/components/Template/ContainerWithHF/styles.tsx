import styled from "styled-components";

import { Container, ContainerProps } from "@material-ui/core";

export const Wrapper = styled.div(({ theme }) => {
  return {};
});

interface StyledContainerProps extends ContainerProps {}
export const StyledContainer = styled(Container)<StyledContainerProps>(
  ({ theme }) => {
    return {};
  }
);
