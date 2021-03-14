import {
  createStyles,
  makeStyles,
  Tabs,
  TabsProps,
  Theme,
  withStyles
} from "@material-ui/core";
import React, { FormEventHandler } from "react";
import styled from "styled-components";

interface HeaderTabsProps {
  value?: number | string;
  onChange?: (event: React.ChangeEvent<{}>, newValue: number | string) => void;
}
export const HeaderTabs = withStyles(theme =>
  createStyles({
    root: {
      backgroundColor: theme.colorPicker("white"),
      color: theme.colorPicker("black")
    },
    indicator: {
      top: 0,
      bottom: "unset"
    }
  })
)((props: HeaderTabsProps) => <Tabs {...props} />);
