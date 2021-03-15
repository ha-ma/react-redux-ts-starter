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
