import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { LanguageProps, OrigListItemProps } from "../../../types/environment";
import {
  ServiceItemProps,
  ClientsItemProps,
  ContractItemProps,
  InvoiceItemProps
} from "../../../Pages/Contract/modules";

export interface ContentListItemProps {
  key: number;
  client: ClientsItemProps;
  service: ServiceItemProps;
  contract: ContractItemProps;
  invoices: InvoiceItemProps[];
}
