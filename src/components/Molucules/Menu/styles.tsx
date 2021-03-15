import React from "react";

//  mui
import { Menu, MenuProps, withStyles } from "@material-ui/core";

export const ServiceContentMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  },
  list: {}
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    keepMounted
    {...props}
  />
));
