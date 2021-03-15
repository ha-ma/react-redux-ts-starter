import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { LanguageProps, OrigListItemProps } from "../../../types/environment";

export interface ServiceContentProps {
  code: string;
  name: LanguageProps;
}

export interface ListProps {
  menu: OrigListItemProps[];
}
