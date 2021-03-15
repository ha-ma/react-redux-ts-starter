import { List } from "./types";

export default class {
  config = {};
  list: List = {
    tabs: [
      { id: "service", value: "service", label: "サービス" },
      { id: "client", value: "client", label: "顧客" },
      { id: "contractor", value: "contractor", label: "契約" }
    ],
    accounts: [
      { id: "setting", value: "setting", label: "個人設定" },
      { id: "member", value: "member", label: "メンバー管理" },
      { id: "info", value: "info", label: "アカウント情報" },
      { id: "guide", value: "guide", label: "ユーザーガイド" },
      { id: "api", value: "api", label: "APIコンソール" }
    ]
  };
}
