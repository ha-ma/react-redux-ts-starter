import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from "@fortawesome/react-fontawesome";
import {
  AppBar,
  AppBarProps,
  createStyles,
  IconButton,
  IconButtonProps,
  Tab,
  TabProps,
  Tabs,
  TabsProps,
  Toolbar,
  ToolbarProps,
  withStyles
} from "@material-ui/core";
import styled from "styled-components";

interface StyledAppBarProps extends AppBarProps {}
export const StyledAppBar = withStyles(theme =>
  createStyles({})
)((props: StyledAppBarProps) => <AppBar {...props} />);

interface StyledToolbarProps extends ToolbarProps {}
export const StyledToolbar = withStyles(theme =>
  createStyles({
    root: {
      backgroundColor: theme.colorPicker("grey", { code: "500" }),
      alignItems: "stretch",
      height: 64
    }
  })
)((props: StyledToolbarProps) => <Toolbar {...props} />);

//  Logo
interface WrapperLogoProps {}
export const WrapperLogo = styled.div<WrapperLogoProps>(({ theme }) => {
  return {
    padding: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: theme.spacing(0.5)
  };
});

interface LogoProps {}
export const Logo = styled.img<LogoProps>(({ theme }) => {
  return {
    display: "inline-block",
    height: 25,
    objectFit: "contain"
  };
});

export const LogoLabel = styled.span(({ theme }) => {
  return {
    fontFamily: "Roboto Condensed",
    fontSize: 28,
    marginLeft: theme.spacing(1)
  };
});

//  Tabs
export const WrapperTabs = styled.div(({ theme }) => {
  return {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft: theme.spacing(3),
    flexGrow: 1
  };
});

//  Actions
export const WrapperActions = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  };
});

interface StyledIconButtonProps extends IconButtonProps {}
export const StyledIconButton = withStyles(theme =>
  createStyles({
    root: {
      marginLeft: theme.spacing(1.5)
    }
  })
)((props: StyledIconButtonProps) => <IconButton {...props} />);

interface StyledFontAwesomeIconProps extends FontAwesomeIconProps {}
export const StyledFontAwesomeIcon = withStyles(theme =>
  createStyles({
    root: {
      fontSize: theme.fontSize("icon")
    }
  })
)((props: StyledFontAwesomeIconProps) => <FontAwesomeIcon {...props} />);
