//  types
import { ServiceContentProps } from "../../components/Template/ServiceContent/types";
import { LabelsProps } from "./types";
import { LanguageProps } from "../../types/environment";

export interface ServiceItemListProps {
  id: number;
  name: LanguageProps;
}
export interface ClientsListProps {
  id: number;
  name: LanguageProps;
}

export interface ContractItemListProps {
  id: number;
  contractId: LanguageProps;
  clientId: LanguageProps;
  clientName: LanguageProps;
  contractName: LanguageProps;
  serviceId: LanguageProps;
  startDate: LanguageProps;
  endDate: LanguageProps;
}

export interface InvoiceItemListProps {
  id: number;
  invoiceId: LanguageProps;
  status: LanguageProps;
  date: LanguageProps;
  total: LanguageProps;
}

//  default class
export default class {
  labels: LabelsProps = {
    headLabel: "契約一覧",
    description: "〇〇様と顧客さまの間で結ばれている契約の一覧です"
  };
  // contents: ServiceContentProps[] = new Array(14).fill("").map((val, i) => {
  //   return { code: `service-${i}`, name: `ISP-${("000" + i).slice(-3)}` };
  // });
  services: ServiceItemListProps[] = new Array(14).fill("").map((val, i) => {
    return { id: i, name: `サービス/品目-${i}` };
  });
  clients: ClientsListProps[] = new Array(14).fill("").map((val, i) => {
    return { id: i, name: `顧客-${i}` };
  });
  contracts: ContractItemListProps[] = new Array(10).fill("").map((val, i) => {
    return {
      id: i,
      contractId: `contract-${i}`,
      clientId: `customer-${i}`,
      clientName: `顧客-${i}`,
      contractName: `ISP-${i}`,
      serviceId: `service-${i}`,
      startDate: "2020/11/22",
      endDate: "YYYY/MM/DD"
    };
  });
  invoices: InvoiceItemListProps[] = new Array(2).fill("").map((val, i) => {
    return {
      id: i,
      invoiceId: `invoice-${i}`,
      status: "未確定",
      date: "2021/02/28",
      total: "¥12,345"
    };
  });
}
