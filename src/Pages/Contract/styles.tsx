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
  Select,
  SelectProps,
  MenuItemProps,
  MenuItem,
  ListProps,
  List,
  ListItem,
  ListItemProps
} from "@material-ui/core";
import { callbackify } from "util";
import { type } from "os";

interface HeadProps {}
export const Head = styled.div<HeadProps>(({ theme }) => {
  return {
    height: 64,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  };
});

export const HeadLabel = withStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      fontSize: theme.fontSize("md"),
      color: theme.colorPicker("grey", { code: "500" })
    }
  })
)((props: TypographyProps) => <Typography {...props} />);

export const Description = withStyles(theme =>
  createStyles({
    root: {
      fontSize: theme.fontSize("basic"),
      color: theme.colorPicker("grey", { code: "500" })
    }
  })
)((props: TypographyProps) => <Typography {...props} />);

// interface ServiceContainerProps {}
// export const ServiceContainer = styled.div<ServiceContainerProps>(
//   ({ theme }) => {
//     return {
//       display: "flex",
//       flexDirection: "row",
//       flexWrap: "wrap",
//       justifyContent: "flex-start"
//     };
//   }
// );

export const ContentWrapper = styled.div(({ theme }) => {
  return {
    width: 300,
    padding: theme.spacing(1, 2)
  };
});

export const SearchBlockList = styled.ul(({ theme }) => {
  return {
    display: "flex",
    listStyle: "none",
    padding: 0
  };
});
export const SearchBlockItem = styled.li(({ theme }) => {
  return {
    "&:nth-of-type(1)": {
      width: "25%",
      marginRight: "25px"
    },
    "&:nth-of-type(2)": {
      width: "25%",
      marginRight: "25px"
    },
    "&:nth-of-type(3)": {
      width: "40%",
      marginRight: "25px"
    },
    "&:nth-of-type(4)": {
      width: "5%",
      maxWidth: "70px"
    }
  };
});

export const SearchBlockLabel = withStyles(theme =>
  createStyles({
    root: {
      display: "block",
      fontSize: theme.fontSize("xs"),
      color: theme.colorPicker("black", { code: "500" })
    }
  })
)((props: TypographyProps) => <Typography {...props} />);

export const SearchBlockSelect = withStyles(theme =>
  createStyles({
    root: {
      color: theme.colorPicker("black", { code: "500" })
    },
    ".MuiInputBase-root": {
      width: "100%"
    },
    ".MuiPaper-root": {
      color: theme.colorPicker("black", { code: "500" })
    }
  })
)((props: SelectProps) => <Select {...props} />);

export const StyledMenuItem = withStyles(theme =>
  createStyles({
    root: {
      color: theme.colorPicker("black", { code: "500" })
    }
  })
)((props: MenuItemProps) => <MenuItem {...props} button />);

export const SubmitButton = styled.button(({ theme }) => {
  return {
    width: "100%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.colorPicker("white", { code: "500" }),
    border: "1px solid gray",
    padding: theme.spacing(1.5, 2)
  };
});

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
export const StyledFontAwesomeIconSmall = styled(
  FontAwesomeIcon
)<StyledFontAwesomeIconProps>(({ theme }) => {
  return {
    fontSize: theme.fontSize("basic"),
    color: theme.colorPicker("black", { code: "500" })
  };
});
export const StyledFontAwesomeIconArrowRight = styled(
  FontAwesomeIcon
)<StyledFontAwesomeIconProps>(({ theme }) => {
  return {
    fontSize: theme.fontSize("basic"),
    color: theme.colorPicker("grey", { code: "500" }),
    margin: "0 15px"
  };
});

export const ContentBlock = styled.div(({ theme }) => {
  return {
    border: "1px solid grey",
    display: "flex",
    height: "calc(100% - 167px)"
  };
});

export const ListBlock = styled.div(({ theme }) => {
  return {
    width: "30%",
    minWidth: "460px",
    borderRight: "1px solid grey"
  };
});

export const ListHeader = styled.div(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(1, 1, 1, 1.5),
    borderBottom: "2px solid grey"
  };
});

export const ContractNumber = styled.p(({ theme }) => {
  return {
    display: "block",
    margin: 0
  };
});
export const Sort = styled.div(({ theme }) => {
  return {
    display: "flex",
    margin: 0,
    alignItems: "center",

    p: {
      fontSize: theme.fontSize("sm"),
      color: theme.colorPicker("lightBlue"),
      textDecoration: "underline",
      paddingLeft: theme.spacing(0.5)
    }
  };
});

export const SummarizeLink = styled.a(({ theme }) => {
  return {
    border: "1px solid grey",
    fontSize: theme.fontSize("basic"),
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1)
  };
});

export const ContractList = withStyles(theme =>
  createStyles({
    root: {
      border: "1px solid black",
      margin: theme.spacing(0.5),
      overflowY: "scroll",
      height: "calc(100% - 86px)"
    }
  })
)((props: ListProps) => <List {...props} />);

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

export const ContractPreviewBlock = styled.div(({ theme }) => {
  return {
    backgroundColor: theme.colorPicker("grey", { code: "300" }),
    width: "100%"
  };
});

export const ContractPreviewContainer = styled.div(({ theme }) => {
  return {
    backgroundColor: theme.colorPicker("white", { code: "500" }),
    width: "90%",
    margin: "15px auto"
  };
});
