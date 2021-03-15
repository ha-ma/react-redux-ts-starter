//  mui
import {
  createStyles,
  ListItemIcon,
  ListItemText,
  MenuItem,
  withStyles
} from "@material-ui/core";

export const StyledMenuItem = withStyles(theme => {
  const border = `solid 1px ${theme.colorPicker("grey", { code: "200" })}`;
  return {
    root: {
      color: theme.colorPicker("grey"),
      borderTop: border,
      "&:hover": {
        backgroundColor: theme.colorPicker("grey", { code: "200" })
      },
      "&:focus": {
        backgroundColor: theme.palette.primary.main,
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: theme.palette.common.white
        }
      },
      "&:last-child": {
        borderBottom: border
      }
    }
  };
})(MenuItem);

export const StyledListItemIcon = withStyles(theme =>
  createStyles({
    root: {}
  })
)(ListItemIcon);

export const StyledListItemText = withStyles(theme =>
  createStyles({
    root: {}
  })
)(ListItemText);
