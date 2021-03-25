import React from "react";

//  molucule template components
import ContainerWithHF from "../../components/Template/ContainerWithHF";

// mapで品目のカードを出してみたかったので、一旦Templeteに作成
import ServiceItem from "../../components/Template/ServiceContentDetailItem";

//  styled components
import {
  Code,
  BoldLabel,
  AddItemButton,
  ServiceContainer,
  ServiceItemCard,
  ItemBoldLabel,
  StyledFaIcon,
  StyledIconButton
} from "./styles";

import { Grid } from "@material-ui/core";

//  modules
import SelfClass from "./modules";

const Component: React.FC = () => {
  const selfClass = new SelfClass();
  // ページ上部
  const service = selfClass.service;
  const items = selfClass.serviceItems;

  return (
    <ContainerWithHF FooterProps={{ in: false }}>
      {/* サービスタイトル、サービスコード */}
      <Grid container style={{ paddingTop: 50 }}>
        <Grid item sm={6}>
          <Code>{service.code}</Code>
          <BoldLabel>{service.name}</BoldLabel>
        </Grid>
        <Grid item sm={6}>
          <StyledIconButton style={{ float: "right" }}>
            <StyledFaIcon icon={["fas", "ellipsis-v"]} fixedWidth />
          </StyledIconButton>
        </Grid>
      </Grid>
      <Grid container>
        {/* 品目 */}
        <Grid item sm={3}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="baseline"
          >
            <div>品目（{items.length}）</div>
            {/* AddItembutton + AddIcon = 1つのコンポーネント？ */}
            <AddItemButton>
              <StyledFaIcon icon={["fas", "plus"]} fixedWidth />
              追加
            </AddItemButton>
          </Grid>
          <Grid>
            {items.map((val, i) => (
              <ServiceItem key={i} content={val}></ServiceItem>
            ))}
          </Grid>
        </Grid>
        <Grid item sm={1} />
        {/* 割引 */}
        <Grid item sm={3}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="baseline"
          >
            <div>割引（6）</div>
            {/* AddItembutton + AddIcon = 1つのコンポーネント？ */}
            <AddItemButton>
              <StyledFaIcon icon={["fas", "plus"]} fixedWidth />
              追加
            </AddItemButton>
          </Grid>
          <ServiceItemCard>
            <ItemBoldLabel>yyyy/mm/dd</ItemBoldLabel>
            <div style={{ display: "flex" }}>
              <ItemBoldLabel>ISP (2年縛り月額2000円)</ItemBoldLabel>
              <div style={{ display: "block" }}>
                <ItemBoldLabel>- ¥700</ItemBoldLabel>
              </div>
            </div>
          </ServiceItemCard>
        </Grid>
        <Grid item sm={1} />
        <Grid item sm={4}>
          <ServiceContainer>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="baseline"
            >
              <div>契約（6）</div>
              {/* AddItembutton + AddIcon = 1つのコンポーネント？ */}
              <AddItemButton>
                <StyledFaIcon icon={["fas", "plus"]} fixedWidth />
                追加
              </AddItemButton>
            </Grid>
          </ServiceContainer>
          <ServiceItemCard>
            <div style={{ display: "flex" }}>
              <Code>customer-1</Code>
              <ItemBoldLabel>2020/01/23 ~ yyyy/mm/dd</ItemBoldLabel>
            </div>
            <div style={{ display: "flex" }}>
              <ItemBoldLabel>クライアントA</ItemBoldLabel>
              <ItemBoldLabel>1,234円</ItemBoldLabel>
            </div>
          </ServiceItemCard>
        </Grid>
      </Grid>
    </ContainerWithHF>
  );
};

export default Component;
