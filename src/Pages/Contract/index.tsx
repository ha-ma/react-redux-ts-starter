import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//  molucule template components
import ContainerWithHF from "../../components/Template/ContainerWithHF";
import ServiceContent from "../../components/Template/ServiceContent";

//  atom , molucule components
import { SmallCode } from "../../components/Atoms/Label";

import TextField from "@material-ui/core/TextField";

import InputAdornment from "@material-ui/core/InputAdornment";

// import AccountCircle from "@material-ui/icons/AccountCircle";

//  styled components
import {
  Head,
  HeadLabel,
  Description,
  // ServiceContainer,
  ContentWrapper,
  SearchBlockList,
  SearchBlockItem,
  SearchBlockLabel,
  SearchBlockSelect,
  SubmitButton,
  ContentBlock,
  StyledFontAwesomeIconSearch,
  StyledFontAwesomeIconMedium,
  StyledFontAwesomeIconArrowRight,
  StyledFontAwesomeIconArrowDown,
  StyledMenuItem,
  ListBlock,
  ListHeader,
  ContractNumber,
  Sort,
  SummarizeLink,
  ContractList,
  ContractListItem,
  ListItemText,
  ContractDate,
  ListItemContentWrapper,
  ListItemContentInner,
  CodeWrapper,
  InvoiceStatus,
  InvoiceListItem,
  ContractPreviewBlock,
  ContractPreviewContainer
} from "./styles";
import { LanguageProps } from "../../types/environment";

import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import DraftsIcon from "@material-ui/icons/Drafts";
// import SendIcon from "@material-ui/icons/Send";
// import ExpandLess from "@material-ui/icons/ExpandLess";
// import ExpandMore from "@material-ui/icons/ExpandMore";
// import StarBorder from "@material-ui/icons/StarBorder";

//  modules
import SelfClass from "./modules";

const Component: React.FC = () => {
  const selfClass = new SelfClass();
  const labels = selfClass.labels;
  // const [contents, setContents] = React.useState(selfClass.contents);
  const [services, setServices] = React.useState(selfClass.services);
  const [clients, setClients] = React.useState(selfClass.clients);
  const [contracts, setContracts] = React.useState(selfClass.contracts);
  const [invoices, setInvoices] = React.useState(selfClass.invoices);

  const [open1, setOpen1] = React.useState(true);

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  // const [open, setOpen] = React.useState(true);

  // const handleClick = (e: React.MouseEvent<HTMLElement>) => {
  //   setOpen(!open);
  //   const element = e.target as HTMLElement;
  //   element.classList.add("open");
  // };
  interface OpenCloseObject {
    [key: number]: boolean;
  }

  const [open, setOpen] = React.useState({} as OpenCloseObject);
  const handleClick = (id: number) => {
    setOpen(prevState => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <ContainerWithHF FooterProps={{ in: false }} HeaderProps={{ in: true }}>
      <Head>
        <HeadLabel>{labels.headLabel}</HeadLabel>
        <Description>{labels.description}</Description>
      </Head>
      <form action="">
        <SearchBlockList>
          <SearchBlockItem>
            <SearchBlockLabel>サービス / 品目</SearchBlockLabel>
            <SearchBlockSelect
              name="services"
              id="service"
              fullWidth
              variant="outlined"
            >
              <StyledMenuItem value="">Type to filter...</StyledMenuItem>
              {services.map((item, index) => (
                <StyledMenuItem key={index} value={item.display_name}>
                  {item.display_name}
                </StyledMenuItem>
              ))}
            </SearchBlockSelect>
          </SearchBlockItem>
          <SearchBlockItem>
            <SearchBlockLabel>顧客</SearchBlockLabel>
            <SearchBlockSelect
              name="clients"
              id="clients"
              fullWidth
              variant="outlined"
            >
              <StyledMenuItem value="">Type to filter...</StyledMenuItem>
              {clients.map((item, index) => (
                <StyledMenuItem key={index} value={item.display_name}>
                  {item.display_name}
                </StyledMenuItem>
              ))}
            </SearchBlockSelect>
          </SearchBlockItem>

          {/* <TextField
            id="input-with-icon-textfield"
            label="TextField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <StyledFontAwesomeIcon icon={["fas", "search"]} />
                </InputAdornment>
              )
            }}
          /> */}

          <SearchBlockItem>
            <SearchBlockLabel>請求対象期間</SearchBlockLabel>
            <div>
              <label htmlFor="inquiryType1">
                <input
                  className="radio"
                  id="inquiryType1"
                  type="radio"
                  name="inquiryType"
                />
                <span className="label">現在</span>
              </label>
              <label htmlFor="inquiryType1">
                <input
                  className="radio"
                  id="inquiryType1"
                  type="radio"
                  name="inquiryType"
                />
                <span className="label">YYYY/MM/DD ~ YYYY/MM/DD</span>
              </label>
            </div>
          </SearchBlockItem>
          <SearchBlockItem>
            <SubmitButton>
              <StyledFontAwesomeIconSearch icon={["fas", "search"]} />
            </SubmitButton>
          </SearchBlockItem>
        </SearchBlockList>
      </form>

      <ContentBlock className="contentBlock">
        <ListBlock className="listBlock">
          <ListHeader className="listHeader">
            <div>
              <StyledFontAwesomeIconMedium icon={["fas", "folder"]} />
              <StyledFontAwesomeIconArrowRight
                className="arrowRignt"
                icon={["fas", "caret-right"]}
              />
              <StyledFontAwesomeIconMedium icon={["fas", "file-alt"]} />
            </div>
            <ContractNumber>123件の契約</ContractNumber>
            <Sort>
              <StyledFontAwesomeIconMedium icon={["far", "clock"]} />
              <p>並べ替え</p>
            </Sort>
            <SummarizeLink>まとめて操作</SummarizeLink>
          </ListHeader>

          <ContractList>
            {contracts.map((contract, index) => (
              <>
                <ContractListItem
                  key={index}
                  button
                  onClick={() => handleClick(index)}
                >
                  {open[index] ? (
                    <StyledFontAwesomeIconArrowDown
                      icon={["fas", "caret-up"]}
                    />
                  ) : (
                    <StyledFontAwesomeIconArrowDown
                      icon={["fas", "caret-down"]}
                    />
                  )}

                  <StyledFontAwesomeIconMedium icon={["fas", "folder"]} />
                  <ListItemContentWrapper>
                    <CodeWrapper>
                      <SmallCode>contract-001</SmallCode>
                      <SmallCode>service-001</SmallCode>
                    </CodeWrapper>
                    <ListItemContentInner>
                      <ListItemText>
                        {console.log(
                          clients.filter(client => client.id === contract.id)[0]
                            .display_name
                        )}
                        {`${
                          clients.filter(client => client.id === contract.id)[0]
                            .display_name
                        }さま - ${
                          services.filter(
                            service => service.id === contract.id
                          )[0].display_name
                        }のご契約`}
                      </ListItemText>
                      <div>
                        <SmallCode>
                          {
                            clients.filter(
                              client => client.id === contract.id
                            )[0].id
                          }
                        </SmallCode>
                        <ContractDate>{`${contract.start_date
                          .slice(0, 10)
                          .replace(/-/g, "/")} ~ ${
                          contract.end_date !== null
                            ? contract.end_date.slice(0, 10).replace(/-/g, "/")
                            : null
                        }`}</ContractDate>
                      </div>
                    </ListItemContentInner>
                  </ListItemContentWrapper>
                </ContractListItem>
                <Collapse in={open[index]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {invoices.map(invoice => (
                      <>
                        <InvoiceListItem button key={invoice.id}>
                          <StyledFontAwesomeIconMedium
                            icon={["fas", "file-alt"]}
                          />
                          <ListItemContentWrapper>
                            <CodeWrapper className="invoice">
                              <SmallCode>{invoice.id}</SmallCode>
                              {/* <InvoiceStatus>{invoice.status}</InvoiceStatus> */}
                            </CodeWrapper>
                            <ListItemContentInner>
                              <ListItemText>
                                {invoice.closing_date
                                  .slice(0, 10)
                                  .replace(/-/g, "/")}
                              </ListItemText>
                              <ListItemText>{`¥${Math.floor(
                                Number(invoice.total)
                              ).toLocaleString()}`}</ListItemText>
                            </ListItemContentInner>
                          </ListItemContentWrapper>
                        </InvoiceListItem>
                      </>
                    ))}
                  </List>
                </Collapse>
              </>
            ))}
          </ContractList>
        </ListBlock>
        <ContractPreviewBlock>
          <ContractPreviewContainer className="container">
            <div className="contractHeader">
              <div className="contractHeader_service">
                <p className="id">service-1</p>
                <p className="displayName">ISP-001</p>
              </div>
              <h2 className="contractHeader_title">契約</h2>
              <div className="contractHeader_customer">
                <p className="id">customer-1</p>
                <p className="display_name">{`${"〇〇〇〇〇〇"}さま`}</p>
              </div>
            </div>
            <div className="contractTitle">
              <div className="contractTitle_inner">
                <p className="id">contract-001</p>
                <p className="timespan"></p>
              </div>
              <h1 className="contractTitle_displayName">
                {`${"〇〇〇〇〇〇"}さま - ${"ISP-001"}のご契約`}
              </h1>
              <img src="" alt="" />
            </div>

            <div className="contractPager">
              <p className="numOfContract">{`この契約の請求(${36})`}</p>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <p className="comment">最新（未確定）の請求です</p>
            </div>

            <ul className="invoices">
              <li className="invoice">
                <div className="invoiceHeader">
                  <div className="invoiceHeaderInner">
                    <p className="id">invoice-1</p>
                    <p className="status">未確定</p>
                  </div>
                  <div className="invoiceHeaderInner">
                    <p className="date">2021/02/28</p>
                    <p className="total">¥12,345</p>
                  </div>
                </div>
                <dl className="invoiceItemlist">
                  <dt className="invoiceItem__name">ISP(２年縛り月額2000円)</dt>
                  <dt>-</dt>
                  <dt>x1</dt>
                  <dt>¥1,234</dt>
                  <dt className="invoiceItem__name">割引１(1年間700円引き)</dt>
                  <dt>-</dt>
                  <dt>x1</dt>
                  <dt>¥1,234</dt>
                  <dt className="invoiceItem__name">オプション１(永年500円)</dt>
                  <dt>-</dt>
                  <dt>x1</dt>
                  <dt>¥1,234</dt>
                  <dt className="invoiceItem__name">〇〇使用料</dt>
                  <dt>-</dt>
                  <dt>x234</dt>
                  <dt>¥1,234</dt>
                </dl>
              </li>
            </ul>

            <button>閉じる</button>
          </ContractPreviewContainer>
        </ContractPreviewBlock>
      </ContentBlock>
    </ContainerWithHF>
  );
};

export default Component;
