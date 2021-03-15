import React from "react";
import styled from "styled-components";

//  mui
import {
  createStyles,
  ListItemIcon,
  ListItemText,
  MenuItem,
  withStyles
} from "@material-ui/core";

export const StyledMenuItem = withStyles(theme => ({
  root: {
    color: theme.colorPicker("grey"),
    "&:hover": {
      backgroundColor: theme.colorPicker("grey", { code: "200" })
    },
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export const StyledListItemIcon = withStyles(theme =>
  createStyles({
    root: {}
  })
)(ListItemIcon);

export const StyledListItemText = withStyles(theme =>
  createStyles({
    root: {}
  })
)(ListItemText);
