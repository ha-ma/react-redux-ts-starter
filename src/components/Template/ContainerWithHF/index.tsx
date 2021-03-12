import React from "react";

//  atom , molucule components

//  organism , template components
import Header from "../../Organisms/Header";
import Footer from "../../Organisms/Footer";

//  styled components
import { StyledContainer, Wrapper } from "./styles";

const ContainerWithHF: React.FC = () => {
  return (
    <Wrapper>
      <Header></Header>
      <Footer></Footer>
    </Wrapper>
  );
};

export default ContainerWithHF;
