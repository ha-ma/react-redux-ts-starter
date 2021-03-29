import React from "react";

import { SmallCode } from "../../../components/Atoms/Label";

// style
import {
  StyledFontAwesomeIconMedium,
  StyledFontAwesomeIconArrowDown,
  ContractListItem,
  ListItemText,
  ContractDate,
  ListItemContentWrapper,
  ListItemContentInner,
  CodeWrapper,
  InvoiceListItem
} from "./styles";

// material-ui component
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";

// type
import { ContentListItemProps } from "./types";
import { InvoiceItemProps } from "../../../Pages/Contract/modules";

const ContractListItemComponent: React.FC<ContentListItemProps> = props => {
  const { key, client, service, contract, invoices } = props;
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ContractListItem onClick={() => handleClick()}>
        {open ? (
          <StyledFontAwesomeIconArrowDown icon={["fas", "caret-up"]} />
        ) : (
          <StyledFontAwesomeIconArrowDown icon={["fas", "caret-down"]} />
        )}

        <StyledFontAwesomeIconMedium icon={["fas", "folder"]} />
        <ListItemContentWrapper>
          <CodeWrapper>
            <SmallCode>contract-001</SmallCode>
            <SmallCode>service-001</SmallCode>
          </CodeWrapper>
          <ListItemContentInner>
            <ListItemText>
              {`${client.display_name}さま - ${service.display_name}のご契約`}
            </ListItemText>
            <div>
              <SmallCode>{client.id}</SmallCode>
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
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {invoices.map((invoice: InvoiceItemProps) => (
            <>
              <InvoiceListItem button key={invoice.id}>
                <StyledFontAwesomeIconMedium icon={["fas", "file-alt"]} />
                <ListItemContentWrapper>
                  <CodeWrapper className="invoice">
                    <SmallCode>{invoice.id}</SmallCode>
                    {/* <InvoiceStatus>{invoice.status}</InvoiceStatus> */}
                  </CodeWrapper>
                  <ListItemContentInner>
                    <ListItemText>
                      {invoice.closing_date.slice(0, 10).replace(/-/g, "/")}
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
    </React.Fragment>
  );
};

export default ContractListItemComponent;
