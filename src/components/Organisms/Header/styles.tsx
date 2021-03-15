import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from "@fortawesome/react-fontawesome";
import {
  AppBar,
  AppBarProps,
  Avatar,
  AvatarProps,
  createStyles,
  IconButton,
  IconButtonProps,
  Toolbar,
  ToolbarProps,
  Typography,
  TypographyProps,
  withStyles
} from "@material-ui/core";
import styled from "styled-components";

interface StyledAppBarProps extends AppBarProps {}
export const StyledAppBar = withStyles(theme =>
  createStyles({})
)((props: StyledAppBarProps) => <AppBar {...props} />);

interface StyledToolbarProps extends ToolbarProps {
  height: number;
}
export const StyledToolbar = withStyles(theme =>
  createStyles({
    root: {
      backgroundColor: theme.colorPicker("grey", { code: "500" }),
      alignItems: "stretch"
    }
  })
)((props: StyledToolbarProps) => (
  <Toolbar {...props} style={{ height: props.height }} />
));

//  Logo
interface LogoWrapperProps {}
export const LogoWrapper = styled.div<LogoWrapperProps>(({ theme }) => {
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

export const LogoLabel = withStyles(theme =>
  createStyles({
    root: {
      fontFamily: "Roboto Condensed",
      fontSize: 28,
      marginLeft: theme.spacing(1)
    }
  })
)((props: TypographyProps) => <Typography {...props} />);

//  Tabs
export const TabsWrapper = styled.div(({ theme }) => {
  return {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft: theme.spacing(10),
    flexGrow: 1
  };
});

//  Actions
export const ActionsWrapper = styled.div(({ theme }) => {
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
      marginLeft: theme.spacing(2),
      padding: theme.spacing(1)
    }
  })
)((props: StyledIconButtonProps) => <IconButton {...props} />);

interface StyledFontAwesomeIconProps extends FontAwesomeIconProps {}
export const StyledFontAwesomeIcon = styled(
  FontAwesomeIcon
)<StyledFontAwesomeIconProps>(({ theme }) => {
  return {
    fontSize: theme.fontSize("icon"),
    color: theme.colorPicker("grey", { code: "800" })
  };
});

interface StyledAvatarProps extends AvatarProps {}
export const StyledAvatar = withStyles(theme =>
  createStyles({
    root: {
      backgroundColor: theme.colorPicker("grey", { code: "800" })
    }
  })
)((props: StyledAvatarProps) => <Avatar {...props} />);
