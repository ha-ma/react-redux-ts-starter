import { LanguageProps } from "../../types/environment";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { LanguageProps, OrigListItemProps } from "../../../types/environment";

// 品目
export interface ServiceItemProps {
  code: string;
  name: string;
  totalContractor: Number;
}

// 以下コピペ
export interface LabelsProps {
  headLabel: LanguageProps;
  description: LanguageProps;
}

// service一覧で使ってたIF
export interface ServiceContentProps {
  code: string;
  name: LanguageProps;
}

export interface ListProps {
  menu: OrigListItemProps[];
}
