import React from "react";

//  mui
import {
  createStyles,
  Toolbar,
  ToolbarProps,
  withStyles
} from "@material-ui/core";

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
