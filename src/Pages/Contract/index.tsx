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
  InvoiceListItem
} from "./styles";

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
    <ContainerWithHF FooterProps={{ in: false }}>
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
              {services.map(item => (
                <StyledMenuItem key={item.id} value={item.id}>
                  {item.name}
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
              {clients.map(item => (
                <StyledMenuItem key={item.id} value={item.id}>
                  {item.name}
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
            {contracts.map(contract => (
              <>
                <ContractListItem
                  key={contract.id}
                  button
                  onClick={() => handleClick(contract.id)}
                >
                  {open[contract.id] ? (
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
                        {`${contract.clientName}さま - ${contract.contractName}のご契約`}
                      </ListItemText>
                      <div>
                        <SmallCode>{contract.clientId}</SmallCode>
                        <ContractDate>{`${contract.startDate} ~ ${contract.endDate}`}</ContractDate>
                      </div>
                    </ListItemContentInner>
                  </ListItemContentWrapper>
                </ContractListItem>
                <Collapse in={open[contract.id]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {invoices.map(invoice => (
                      <>
                        <InvoiceListItem button key={invoice.id}>
                          <StyledFontAwesomeIconMedium
                            icon={["fas", "file-alt"]}
                          />
                          <ListItemContentWrapper>
                            <CodeWrapper className="invoice">
                              <SmallCode>{invoice.invoiceId}</SmallCode>
                              <InvoiceStatus>{invoice.status}</InvoiceStatus>
                            </CodeWrapper>
                            <ListItemContentInner>
                              <ListItemText>{invoice.date}</ListItemText>
                              <ListItemText>{invoice.total}</ListItemText>
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
      </ContentBlock>
    </ContainerWithHF>
  );
};

export default Component;
