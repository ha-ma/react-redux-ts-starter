import React from "react";
import styled from "styled-components";
//  searchIcon
import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from "@fortawesome/react-fontawesome";

//  mui
import {
  createStyles,
  Typography,
  TypographyProps,
  withStyles,
  ListItem,
  ListItemProps
} from "@material-ui/core";

interface StyledFontAwesomeIconProps extends FontAwesomeIconProps {}
export const StyledFontAwesomeIconSearch = styled(
  FontAwesomeIcon
)<StyledFontAwesomeIconProps>(({ theme }) => {
  return {
    fontSize: theme.fontSize("icon"),
    color: theme.colorPicker("black", { code: "500" })
  };
});

export const StyledFontAwesomeIconMedium = styled(
  FontAwesomeIcon
)<StyledFontAwesomeIconProps>(({ theme }) => {
  return {
    fontSize: theme.fontSize("md"),
    color: theme.colorPicker("black", { code: "500" })
  };
});

export const StyledFontAwesomeIconArrowDown = styled(
  FontAwesomeIcon
)<StyledFontAwesomeIconProps>(({ theme }) => {
  return {
    fontSize: theme.fontSize("basic"),
    color: theme.colorPicker("grey", { code: "500" }),
    margin: "0 15px 0 0"
  };
});

export const ContractListItem = withStyles(theme =>
  createStyles({
    root: {
      borderTop: "2px solid black",
      "&:nth-of-type(1)": {
        borderTop: "none"
      }
    }
  })
)((props: ListItemProps) => <ListItem {...props} button={false} />);

export const InvoiceListItem = withStyles(theme =>
  createStyles({
    root: {
      borderTop: "2px solid black",
      padding: "8px 16px 8px 10%"
    }
  })
)((props: ListItemProps) => <ListItem {...props} button={false} />);

export const ListItemText = withStyles(theme =>
  createStyles({
    root: {
      display: "block",
      fontSize: theme.fontSize("basic"),
      color: theme.colorPicker("black", { code: "500" }),
      fontWeight: "bold"
    }
  })
)((props: TypographyProps) => <Typography {...props} />);

export const ContractDate = withStyles(theme =>
  createStyles({
    root: {
      paddingTop: "10px",
      display: "block",
      fontSize: theme.fontSize("xs"),
      color: theme.colorPicker("black", { code: "500" }),
      fontWeight: "bold"
    }
  })
)((props: TypographyProps) => <Typography {...props} />);

export const ListItemContentWrapper = styled.div(({ theme }) => {
  return {
    width: "100%",
    justifyContent: "space-between",
    paddingLeft: "15px"
  };
});
export const ListItemContentInner = styled.div(({ theme }) => {
  return {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    div: {
      textAlign: "right",
      width: "150px"
    }
  };
});
export const CodeWrapper = styled.div(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "10px",
    alignItems: "center",
    "&.invoice": {
      paddingBottom: "5px"
    }
  };
});

export const InvoiceStatus = withStyles(theme =>
  createStyles({
    root: {
      display: "block",
      fontSize: theme.fontSize("basic"),
      color: theme.colorPicker("black", { code: "500" }),
      fontWeight: "bold",
      backgroundColor: theme.colorPicker("grey", { code: "300" }),
      padding: theme.spacing(0.5)
    }
  })
)((props: TypographyProps) => <Typography {...props} />);
