import React from "react";

//  faIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//  styled components
import {
  StyledMenuItem,
  StyledListItemIcon,
  StyledListItemText
} from "./styles";

//  mui
import { MenuItemProps } from "@material-ui/core";

//  types
import { OrigListItemProps } from "../../../types/environment";

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
          <FontAwesomeIcon {...listItem.faIcon} fixedWidth />
        </StyledListItemIcon>
      )}
      <StyledListItemText primary={label} />
    </StyledMenuItem>
  );
});

export { ServiceContentMenuItem };
