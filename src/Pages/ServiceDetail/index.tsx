import React from "react";

//  molucule template components
import ContainerWithHF from "../../Components/Template/ContainerWithHF";
import ServiceContent from "../../Components/Template/ServiceContent";

import ServiceItem from "../../Components/Template/ServiceContentDetailItem";

//  styled components
import {
  Code,
  BoldLabel,
  Head,
  HeadLabel,
  Description,
  AddItemButton,
  ServiceContainer,
  ContentWrapper,
  ServiceItemCard,
  ItemBoldLabel,
  CountContructer,
  CountContructerChar,
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
      <Head></Head>
      <Grid container>
        <Grid item sm={6}>
          <Code>
            {service.code}
            <StyledIconButton>
              <StyledFaIcon
                size={"xs"}
                icon={["fas", "pencil-alt"]}
                fixedWidth
              />
            </StyledIconButton>
          </Code>
          <BoldLabel>
            {service.name}
            <StyledIconButton>
              <StyledFaIcon icon={["fas", "pencil-alt"]} fixedWidth />
            </StyledIconButton>
          </BoldLabel>
        </Grid>
        <Grid item sm={6}>
          <StyledIconButton style={{ float: "right" }}>
            <StyledFaIcon icon={["fas", "ellipsis-v"]} fixedWidth />
          </StyledIconButton>
        </Grid>
      </Grid>
      <Grid container>
        {/* 品目 */}
        <Grid item sm={4}>
          <ServiceContainer>
            <Grid
              container
              direction="row"
              // justify="space-between"
              alignItems="baseline"
            >
              <div>品目（{items.length}）</div>
              {/* AddItembutton + AddIcon = 1つのコンポーネント？ */}
              <AddItemButton>
                <StyledFaIcon icon={["fas", "plus"]} fixedWidth />
                追加
              </AddItemButton>
            </Grid>
          </ServiceContainer>
          <ServiceContainer>
            {items.map((val, i) => (
              <ServiceItem key={i} content={val}></ServiceItem>
            ))}
          </ServiceContainer>
        </Grid>
        {/* 割引 */}
        <Grid item sm={4}>
          <div style={{ display: "flex" }}>
            <div>割引（6）</div>
            {/* AddItembutton + AddIcon = 1つのコンポーネント？ */}
            <AddItemButton>
              <StyledFaIcon icon={["fas", "plus"]} fixedWidth />
              追加
            </AddItemButton>
          </div>
          <ServiceContainer>
            <ServiceItemCard>
              <ItemBoldLabel>yyyy/mm/dd</ItemBoldLabel>
              <div style={{ display: "flex" }}>
                <ItemBoldLabel>ISP (2年縛り月額2000円)</ItemBoldLabel>
                <div style={{ display: "block" }}>
                  <ItemBoldLabel>- ¥700</ItemBoldLabel>
                </div>
              </div>
            </ServiceItemCard>
          </ServiceContainer>
        </Grid>

        <Grid item sm={4}>
          <ServiceContainer>
            <div style={{ display: "flex" }}>
              <div>契約（6）</div>
              {/* AddItembutton + AddIcon = 1つのコンポーネント？ */}
              <AddItemButton>
                <StyledFaIcon icon={["fas", "plus"]} fixedWidth />
                追加
              </AddItemButton>
            </div>
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
