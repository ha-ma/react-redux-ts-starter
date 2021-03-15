import React from "react";
import styled from "styled-components";

//  mui
import {
  createStyles,
  IconButton,
  IconButtonProps,
  Menu,
  MenuItem,
  MenuItemProps,
  MenuProps,
  Paper,
  PaperProps,
  Typography,
  TypographyProps,
  withStyles
} from "@material-ui/core";

//  faIcon
import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from "@fortawesome/react-fontawesome";

export const StyledPaper = withStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(2, 1),
      transition: "background-color 300ms, boxShadow 300ms",
      "&:hover": {
        backgroundColor: theme.colorPicker("grey", { code: "200" }),
        boxShadow: theme.shadows["5"]
      }
    }
  })
)((props: PaperProps) => <Paper {...props} />);

//  Head
export const Head = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(0, 0.5, 0, 1)
  };
});

export const HeadLabel = styled.div(({ theme }) => {
  return {
    flexGrow: 1
  };
});

export const StyledIconButton = withStyles(theme =>
  createStyles({})
)((props: IconButtonProps) => <IconButton {...props} />);

//  Detail
export const Detail = styled.div(({ theme }) => {
  return {
    padding: theme.spacing(1)
  };
});

export const Name = withStyles(theme =>
  createStyles({
    root: {
      color: theme.colorPicker("black"),
      fontSize: theme.fontSize("md"),
      fontWeight: "bold"
    }
  })
)((props: TypographyProps) => <Typography {...props} />);

interface StyledFaIconProps extends FontAwesomeIconProps {}
export const StyledFaIcon = styled(FontAwesomeIcon)<StyledFaIconProps>(
  ({ theme }) => {
    return {};
  }
);
