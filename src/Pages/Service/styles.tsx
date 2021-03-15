import React from "react";
import {
  createStyles,
  Typography,
  TypographyProps,
  withStyles
} from "@material-ui/core";
import styled from "styled-components";

interface HeadProps {}
export const Head = styled.div<HeadProps>(({ theme }) => {
  return {
    height: 64,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  };
});

export const HeadLabel = withStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      fontSize: theme.fontSize("md"),
      color: theme.colorPicker("grey", { code: "500" })
    }
  })
)((props: TypographyProps) => <Typography {...props} />);

export const Description = withStyles(theme =>
  createStyles({
    root: {
      fontSize: theme.fontSize("basic"),
      color: theme.colorPicker("grey", { code: "500" })
    }
  })
)((props: TypographyProps) => <Typography {...props} />);

interface ServiceContainerProps {}
export const ServiceContainer = styled.div<ServiceContainerProps>(
  ({ theme }) => {
    return {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start"
    };
  }
);

export const ContentWrapper = styled.div(({ theme }) => {
  return {
    width: 350,
    padding: theme.spacing(1, 2)
  };
});
