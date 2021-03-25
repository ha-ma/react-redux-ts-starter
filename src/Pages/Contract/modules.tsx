//  types
import { ServiceContentProps } from "../../components/Template/ServiceContent/types";
import { LabelsProps } from "./types";
import { LanguageProps } from "../../types/environment";

export interface ServiceItemProps {
  account_id: LanguageProps;
  id: LanguageProps;
  code: LanguageProps;
  display_name: string;
  closing_type: LanguageProps;
  closing_day: null;
  initial_date_duration: number;
  start_date: LanguageProps;
  end_date: LanguageProps;
  created_at: LanguageProps;
  updated_at: LanguageProps;
}
export interface ClientsItemProps {
  id: LanguageProps;
  code: LanguageProps;
  display_name: string;
  billing_robo: {
    billing_code: LanguageProps;
    billing_individual_code: LanguageProps;
  };
  account_id: LanguageProps;
  created_at: LanguageProps;
  updated_at: LanguageProps;
}

export interface ContractItemProps {
  account_id: LanguageProps;
  id: LanguageProps;
  code: LanguageProps;
  display_name: string;
  closing_type: LanguageProps;
  closing_day: number;
  start_date: string;
  end_date: null | string;
  items: [
    {
      id: LanguageProps;
      item_id: LanguageProps;
      item_code: LanguageProps;
      item_display_name: LanguageProps;
      item_group_id: null;
      item_group_code: null;
      item_group_display_name: null;
      item_payment_conditions: LanguageProps;
      closing_type: LanguageProps;
      closing_day: number;
      start_date: string;
      end_date: null | string;
      taxation: true;
      tax_rate: LanguageProps;
      is_reduced_rate: false;
      transaction_label: LanguageProps;
      created_at: LanguageProps;
      updated_at: LanguageProps;
    }
  ];
  taxation_timing: LanguageProps;
  timings: [
    {
      rounding_timing: LanguageProps;
      rounding_type: LanguageProps;
    }
  ];
  created_at: LanguageProps;
  updated_at: LanguageProps;
}

export interface InvoiceItemProps {
  id: string;
  service_id: string;
  service_code: string;
  contract_id: string;
  contract_code: string;
  customer_id: string;
  customer_code: string;
  initial_date: string;
  closing_date: string;
  sub_total: string;
  tax: string;
  total: string;
  details: [
    {
      item_id: string;
      item_code: string;
      calc_method_id: string;
      calc_method_code: string;
      detail_type: string;
      taxation: boolean;
      tax_rate: string;
      is_reduced_rate: boolean;
      transaction_label: string;
      usage_collection_type: string;
      payment_conditions: string;
      usage_collection_from: string;
      usage_collection_to: string;
      effective_period_from: string;
      effective_period_to: string;
      item_text: string;
      detail_text: string;
      unit_price: number;
      quantity: null | number;
      amount: number;
      tax: string;
      total: string;
    }
  ];
  tax_rate_totals: [
    {
      record_type: "total";
      tax_rate: "0.1000000000000000";
      is_reduced_rate: false;
      sub_total: "50000.0000000000000000";
      tax: "5000.0000000000000000";
      total: "55000.0000000000000000";
      item_text: null;
      detail_text: null;
    }
  ];
  created_at: "2018-12-12T05:07:11.393Z";
  updated_at: "2018-12-12T05:07:11.393Z";
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
  services: ServiceItemProps[] = new Array(14).fill("").map((val, i) => {
    return {
      account_id: "b0b3175a-a6bb-450b-821d-c73c15d22ab0",
      id: "b0b3175a-a6bb-450b-821d-c73c15d22ab0",
      code: `${i}-service`,
      display_name: `${i}サービス`,
      closing_type: "eom",
      closing_day: null,
      initial_date_duration: 0,
      start_date: "2017-12-31T15:00:00.000Z",
      end_date: "2019-12-31T15:00:00.000Z",
      created_at: "2018-12-12T05:07:11.393Z",
      updated_at: "2018-12-12T05:07:11.393Z"
    };
  });
  clients: ClientsItemProps[] = new Array(14).fill("").map((val, i) => {
    return {
      id: "b0b3175a-a6bb-450b-821d-c73c15d22ab0",
      code: `${i}-company`,
      display_name: `${i}商事`,
      billing_robo: {
        billing_code: "billing",
        billing_individual_code: `bicd000${i}`
      },
      account_id: "b0b3175a-a6bb-450b-821d-c73c15d22ab0",
      created_at: "2018-12-12T05:07:11.393Z",
      updated_at: "2018-12-12T05:07:11.393Z"
    };
  });
  contracts: ContractItemProps[] = new Array(10).fill("").map((val, i) => {
    return {
      account_id: "b0b3175a-a6bb-450b-821d-c73c15d22ab0",
      id: "b0b3175a-a6bb-450b-821d-c73c15d22ab0",
      code: "oo-company-2020",
      display_name: "○○会社2020年度",
      closing_type: "specific",
      closing_day: 25,
      start_date: "2017-12-31T15:00:00.000Z",
      end_date: null,
      items: [
        {
          id: "240fab0b-0b59-4954-a22b-a03810717e21",
          item_id: "b0b3175a-a6bb-450b-821d-c73c15d22ab0",
          item_code: "weather-api-basic-charge",
          item_display_name: "天気API基本料金",
          item_group_id: null,
          item_group_code: null,
          item_group_display_name: null,
          item_payment_conditions: "later",
          closing_type: "specific",
          closing_day: 25,
          start_date: "2017-12-31T15:00:00.000Z",
          end_date: null,
          taxation: true,
          tax_rate: "0.1000000000000000",
          is_reduced_rate: false,
          transaction_label: "課税",
          created_at: "2018-12-12T05:07:11.393Z",
          updated_at: "2018-12-12T05:07:11.393Z"
        }
      ],
      taxation_timing: "detail",
      timings: [
        {
          rounding_timing: "tax",
          rounding_type: "floor"
        }
      ],
      created_at: "2018-12-12T05:07:11.393Z",
      updated_at: "2018-12-12T05:07:11.393Z"
    };
  });
  invoices: InvoiceItemProps[] = new Array(2).fill("").map((val, i) => {
    return {
      id: "b0b3175a-a6bb-450b-821d-c73c15d22ab0",
      service_id: "b0b3175a-a6bb-450b-821d-c73c15d22ab0",
      service_code: "ooo-service",
      contract_id: "b0b3175a-a6bb-450b-821d-c73c15d22ab0",
      contract_code: "oo-company-2020",
      customer_id: "b0b3175a-a6bb-450b-821d-c73c15d22ab0",
      customer_code: "xyz-company",
      initial_date: "2018-03-31T15:00:00.000Z",
      closing_date: "2018-04-30T14:59:59.999Z",
      sub_total: "50000.0000000000000000",
      tax: "5000.0000000000000000",
      total: "55000.0000000000000000",
      details: [
        {
          item_id: "b0b3175a-a6bb-450b-821d-c73c15d22ab0",
          item_code: "weather-api-basic-charge",
          calc_method_id: "b0b3175a-a6bb-450b-821d-c73c15d22ab0",
          calc_method_code: "20k-requests-free-a",
          detail_type: "charge",
          taxation: true,
          tax_rate: "0.1000000000000000",
          is_reduced_rate: false,
          transaction_label: "課税",
          usage_collection_type: "monthly",
          payment_conditions: "advance",
          usage_collection_from: "2019-03-31T15:00:00.000Z",
          usage_collection_to: "2019-04-30T14:59:59.999Z",
          effective_period_from: "2019-04-30T15:00:00.000Z",
          effective_period_to: "2019-05-31T14:59:59.999Z",
          item_text: "天気API基本料",
          detail_text: "2万リクエスト契約",
          unit_price: 50000,
          quantity: null,
          amount: 50000,
          tax: "5000.0000000000000000",
          total: "55000.0000000000000000"
        }
      ],
      tax_rate_totals: [
        {
          record_type: "total",
          tax_rate: "0.1000000000000000",
          is_reduced_rate: false,
          sub_total: "50000.0000000000000000",
          tax: "5000.0000000000000000",
          total: "55000.0000000000000000",
          item_text: null,
          detail_text: null
        }
      ],
      created_at: "2018-12-12T05:07:11.393Z",
      updated_at: "2018-12-12T05:07:11.393Z"
    };
  });
}
