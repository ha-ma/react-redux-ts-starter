import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type LanguageProps = string | { jp: string; en: string };

export interface OrigListItemProps {
  id: string;
  label: LanguageProps;
  value: string;
  faIcon?: FontAwesomeIconProps;
}
