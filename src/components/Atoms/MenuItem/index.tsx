import React from "react";

//  faIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//  styled components
import {
  StyledMenuItem,
  StyledListItemIcon,
  StyledListItemText
} from "./styles";

//  types
import { OrigListItemProps } from "../../../types/environment";
import { MenuItemProps } from "@material-ui/core";

interface ServiceContentMenuItemProps extends MenuItemProps {
  listItem: OrigListItemProps;
}
const ServiceContentMenuItem = React.forwardRef(function MenuItem(
  props: ServiceContentMenuItemProps,
  ref
) {
  const { listItem } = props;
  const label =
    typeof listItem.label === "string" ? listItem.label : listItem.label["jp"];
  return (
    <StyledMenuItem onClick={props.onClick}>
      {listItem?.faIcon && (
        <StyledListItemIcon>
          <FontAwesomeIcon {...listItem.faIcon} />
        </StyledListItemIcon>
      )}
      <StyledListItemText primary={label} />
    </StyledMenuItem>
  );
});

export { ServiceContentMenuItem };
