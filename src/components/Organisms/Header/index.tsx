import React from "react";

//  assets
import Img_Logo from "../../../assets/images/common/logo.png";

//  atom , molucule components
import { HeaderTabs } from "../../Molucules/Tabs";
import { HeaderTab } from "../../Atoms/Tab";

//  styled components
import {
  StyledToolbar,
  StyledAppBar,
  WrapperLogo,
  WrapperTabs,
  WrapperActions,
  Logo,
  LogoLabel,
  StyledIconButton,
  StyledFontAwesomeIcon
} from "./styles";

//  mui components
import { Avatar } from "@material-ui/core";

const Component: React.FC = () => {
  const [tabValue, setTabValue] = React.useState<string | number>("test-0");

  const handleOnTabsChange = (
    event: React.ChangeEvent<{}>,
    newValue: string | number
  ) => {
    setTabValue(newValue);
  };

  return (
    <StyledAppBar position="relative" elevation={0}>
      <StyledToolbar>
        {/* Logo */}
        <WrapperLogo>
          <Logo src={Img_Logo} />
          <LogoLabel>MANAGER</LogoLabel>
        </WrapperLogo>

        {/* Tabs */}
        <WrapperTabs>
          <HeaderTabs value={tabValue} onChange={handleOnTabsChange}>
            {new Array(3).fill("").map((val, i) => (
              <HeaderTab
                key={i}
                label={"test"}
                id={`test-${i}`}
                value={`test-${i}`}
              />
            ))}
          </HeaderTabs>
        </WrapperTabs>

        {/* Actions */}
        <WrapperActions>
          <StyledIconButton size="small">
            <StyledFontAwesomeIcon icon={["fas", "bell"]} size="2x" />
          </StyledIconButton>
          <StyledIconButton size="small">
            <Avatar />
          </StyledIconButton>
        </WrapperActions>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Component;
