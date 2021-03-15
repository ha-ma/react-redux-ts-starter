import React from "react";

//  mui
import { createStyles, Tabs, withStyles } from "@material-ui/core";

interface HeaderTabsProps {
  value?: number | string;
  onChange?: (event: React.ChangeEvent<{}>, newValue: string) => void;
}
export const HeaderTabs = withStyles(theme =>
  createStyles({
    root: {
      backgroundColor: theme.colorPicker("white"),
      color: theme.colorPicker("black")
    },
    indicator: {
      top: 0,
      bottom: "unset",
      height: 3,
      backgroundColor: theme.colorPicker("black")
    }
  })
)((props: HeaderTabsProps) => <Tabs {...props} />);
