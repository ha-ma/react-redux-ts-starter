import React from "react";

//  assets
import Img_Logo from "../../../assets/images/common/logo.png";

//  atom , molucule components
import { HeaderTabs } from "../../Molucules/Tabs";
import { HeaderTab } from "../../Atoms/Tab";
import { ServiceContentMenuItem } from "../../Atoms/MenuItem";
import { ServiceContentMenu } from "../../Molucules/Menu";

//  styled components
import {
  StyledToolbar,
  StyledAppBar,
  LogoWrapper,
  TabsWrapper,
  ActionsWrapper,
  Logo,
  LogoLabel,
  StyledIconButton,
  StyledFontAwesomeIcon,
  StyledAvatar
} from "./styles";

//  modules
import SelfClass from "./modules";

interface ComponentProps {
  height: number;
}
const Component: React.FC<ComponentProps> = props => {
  const selfClass = new SelfClass();
  const { tabs, accounts } = selfClass.list;
  const [tabValue, setTabValue] = React.useState<string>(tabs[0].value);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOnTabsChange = (
    event: React.ChangeEvent<{}>,
    newValue: string
  ) => {
    setTabValue(newValue);
  };

  const handleOnAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOnAvatarClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position="absolute" elevation={0}>
      <StyledToolbar height={props.height}>
        {/* Logo */}
        <LogoWrapper>
          <Logo src={Img_Logo} />
          <LogoLabel>MANAGER</LogoLabel>
        </LogoWrapper>

        {/* Tabs */}
        <TabsWrapper>
          <HeaderTabs value={tabValue} onChange={handleOnTabsChange}>
            {selfClass.list.tabs.map(val => (
              <HeaderTab
                key={val.id}
                label={val.label}
                id={val.id}
                value={val.value}
              />
            ))}
          </HeaderTabs>
        </TabsWrapper>

        {/* Actions */}
        <ActionsWrapper>
          <StyledIconButton size="small">
            <StyledFontAwesomeIcon icon={["fas", "bell"]} />
          </StyledIconButton>
          <StyledIconButton size="small" onClick={handleOnAvatarClick}>
            <StyledAvatar />
          </StyledIconButton>
          <ServiceContentMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleOnAvatarClose}
          >
            {accounts.map((val, i) => (
              <ServiceContentMenuItem key={i} listItem={val} />
            ))}
          </ServiceContentMenu>
        </ActionsWrapper>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Component;
