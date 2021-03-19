import React from "react";
import styled from "styled-components";

//  mui
import {
  createStyles,
  Typography,
  TypographyProps,
  withStyles
} from "@material-ui/core";

export const Code = withStyles(theme =>
  createStyles({
    root: {
      display: "inline-block",
      backgroundColor: theme.colorPicker("grey", { code: "400" }),
      padding: theme.spacing(0.5, 2),
      borderRadius: theme.shape.borderRadius
    }
  })
)((props: TypographyProps) => <Typography {...props} />);

export const SmallCode = withStyles(theme =>
  createStyles({
    root: {
      display: "inline-block",
      backgroundColor: theme.colorPicker("grey", { code: "400" }),
      color: theme.colorPicker("white", { code: "400" }),
      padding: theme.spacing(0.5, 2),
      fontSize: "10.5px",
      borderRadius: "12px"
    }
  })
)((props: TypographyProps) => <Typography {...props} />);
