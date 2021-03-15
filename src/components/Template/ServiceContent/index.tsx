import React from "react";

//  atom , molucule components
import { Code } from "../../Atoms/Label";
import { ServiceContentMenuItem } from "../../Atoms/MenuItem";
import { ServiceContentMenu } from "../../Molucules/Menu";

//  styled components
import {
  StyledPaper,
  Head,
  Detail,
  StyledIconButton,
  HeadLabel,
  Name,
  StyledFaIcon
} from "./styles";

//  modules
import SelfClass from "./modules";

//  types
import { ServiceContentProps } from "./types";

interface ComponentProps {
  content: ServiceContentProps;
}
const Component: React.FC<ComponentProps> = props => {
  const selfClass = new SelfClass();
  const { menu } = selfClass.lists;
  const { content } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledPaper elevation={3}>
      <Head>
        <HeadLabel>
          <Code>{content.code}</Code>
        </HeadLabel>
        <StyledIconButton onClick={handleClick}>
          <StyledFaIcon icon={["fas", "ellipsis-v"]} fixedWidth />
        </StyledIconButton>
        <ServiceContentMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {menu.map((val, i) => (
            <ServiceContentMenuItem
              key={i}
              listItem={val}
              onClick={() => setAnchorEl(null)}
            ></ServiceContentMenuItem>
          ))}
        </ServiceContentMenu>
      </Head>
      <Detail>
        <Name>{content.name}</Name>
      </Detail>
    </StyledPaper>
  );
};

export default Component;
