import { createStyles, Tab, TabProps, withStyles } from "@material-ui/core";
import React from "react";

interface HeaderTabProps extends TabProps {}
export const HeaderTab = withStyles(theme =>
  createStyles({})
)((props: HeaderTabProps) => <Tab {...props} />);
