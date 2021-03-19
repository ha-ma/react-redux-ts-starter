//  types
import { ServiceContentProps } from "../../Components/Template/ServiceContent/types";
import { LabelsProps, ListProps, ServiceItemProps } from "./types";

//  default class
// この中に固定値をかいていくべき？？
export default class {
  // TODO: 値はAPIから取得する
  service: ServiceContentProps = {
    code: "service-1",
    name: "ISP-001"
  };

  // 品目
  serviceItems: ServiceItemProps[] = new Array(9).fill("").map((val, i) => {
    return {
      code: `item-${i}`,
      name: "ISP (2年縛り月額2000円)",
      totalContractor: 123
    };
  });

  lists: ListProps = {
    menu: [
      {
        id: "copy",
        value: "copy",
        label: "複製する",
        faIcon: { icon: ["fas", "copy"] }
      },
      {
        id: "delete",
        value: "delete",
        label: "削除する",
        faIcon: { icon: ["fas", "trash"] }
      }
    ]
  };

  labels: LabelsProps = {
    headLabel: "サービス一覧",
    description: "〇〇様が、顧客さまに対して提供・課金するサービスの一覧です"
  };

  //   contents: ServiceContentProps[] = new Array(14).fill("").map((val, i) => {
  //     return { code: `service-${i}`, name: `ISP-${("000" + i).slice(-3)}` };
  //   });
}
