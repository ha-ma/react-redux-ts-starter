//  types
import { ServiceContentProps } from "../../Components/Template/ServiceContent/types";
import { LabelsProps } from "./types";

//  default class
export default class {
  labels: LabelsProps = {
    headLabel: "サービス一覧",
    description: "〇〇様が、顧客さまに対して提供・課金するサービスの一覧です"
  };
  contents: ServiceContentProps[] = new Array(14).fill("").map((val, i) => {
    return { code: `service-${i}`, name: `ISP-${("000" + i).slice(-3)}` };
  });
}
