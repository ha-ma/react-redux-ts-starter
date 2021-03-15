import React from "react";

//  mui
import { createStyles, Tab, TabProps, withStyles } from "@material-ui/core";

interface HeaderTabProps extends TabProps {}
export const HeaderTab = withStyles(theme =>
  createStyles({
    root: {
      backgroundColor: theme.colorPicker("grey", { code: "400" }),
      border: `solid 1px ${theme.colorPicker("grey", { code: "500" })}`,
      transition: "background-color 500ms"
    },
    selected: {
      backgroundColor: theme.colorPicker("white"),
      borderBottom: "unset"
    }
  })
)((props: HeaderTabProps) => <Tab {...props} />);
