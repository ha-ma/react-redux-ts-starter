//  types
import { List } from "./types";

//  default class
export default class {
  config = {};
  list: List = {
    tabs: [
      { id: "service", value: "service", label: "サービス" },
      { id: "client", value: "client", label: "顧客" },
      { id: "contractor", value: "contractor", label: "契約" }
    ],
    accounts: [
      {
        id: "setting",
        value: "setting",
        label: "個人設定",
        faIcon: { icon: ["fas", "user-shield"] }
      },
      {
        id: "member",
        value: "member",
        label: "メンバー管理",
        faIcon: { icon: ["fas", "users-cog"] }
      },
      {
        id: "info",
        value: "info",
        label: "アカウント情報",
        faIcon: { icon: ["fas", "info-circle"] }
      },
      {
        id: "guide",
        value: "guide",
        label: "ユーザーガイド",
        faIcon: { icon: ["fas", "tools"] }
      },
      {
        id: "api",
        value: "api",
        label: "APIコンソール",
        faIcon: { icon: ["fas", "terminal"] }
      }
    ]
  };
}
