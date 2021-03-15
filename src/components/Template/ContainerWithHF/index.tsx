import React from "react";

//  atom , molucule components

//  organism , template components
import Header from "../../Organisms/Header";
import Footer from "../../Organisms/Footer";

//  styled components
import { Wrapper, StyledContainer } from "./styles";

interface ComponentProps {
  HeaderProps?: {
    in?: boolean;
  };
  FooterProps?: {
    in?: boolean;
  };
}
const Component: React.FC<ComponentProps> = props => {
  const { HeaderProps, FooterProps } = props;
  const headerHeight = HeaderProps?.in === false ? 0 : 64;
  const footerHeight = FooterProps?.in === false ? 0 : 64;
  return (
    <Wrapper headerHeight={headerHeight} footerHeight={footerHeight}>
      {headerHeight !== 0 && <Header height={headerHeight} />}
      <StyledContainer maxWidth={"xl"}>
        <React.Fragment>{props.children}</React.Fragment>
      </StyledContainer>
      {footerHeight !== 0 && <Footer height={footerHeight} />}
    </Wrapper>
  );
};

export default Component;
