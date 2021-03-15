import React from "react";
import styled from "styled-components";

//  mui
import {
  Container,
  ContainerProps,
  createStyles,
  withStyles
} from "@material-ui/core";

export const Wrapper = styled.div<{
  headerHeight: number;
  footerHeight: number;
}>(({ headerHeight, footerHeight, theme }) => {
  return {
    height: "100%",
    paddingTop: headerHeight,
    paddingBottom: footerHeight,
    overflowY: "auto"
  };
});

interface StyledContainerProps extends ContainerProps {}
export const StyledContainer = withStyles(theme =>
  createStyles({})
)((props: StyledContainerProps) => <Container {...props} />);
