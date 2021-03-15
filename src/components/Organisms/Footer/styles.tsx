import React from "react";
import {
  createStyles,
  Toolbar,
  ToolbarProps,
  withStyles
} from "@material-ui/core";
import styled from "styled-components";

interface StyledToolbarProps extends ToolbarProps {
  height: number;
}
export const StyledToolbar = withStyles(theme =>
  createStyles({
    root: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%"
    }
  })
)((props: StyledToolbarProps) => (
  <Toolbar {...props} style={{ height: props.height }} />
));
