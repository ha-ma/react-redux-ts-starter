//  types
import { ServiceContentProps } from "../../components/Template/ServiceContent/types";
import { ServiceItemProps } from "./types";
export default class {
  // ページ上部
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
}
