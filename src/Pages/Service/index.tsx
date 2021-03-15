import React from "react";

//  molucule template components
import ContainerWithHF from "../../Components/Template/ContainerWithHF";
import ServiceContent from "../../Components/Template/ServiceContent";

//  styled components
import {
  Head,
  HeadLabel,
  Description,
  ServiceContainer,
  ContentWrapper
} from "./styles";

//  modules
import SelfClass from "./modules";

const Component: React.FC = () => {
  const selfClass = new SelfClass();
  const labels = selfClass.labels;
  const [contents, setContents] = React.useState(selfClass.contents);

  return (
    <ContainerWithHF FooterProps={{ in: false }}>
      <Head>
        <HeadLabel>{labels.headLabel}</HeadLabel>
        <Description>{labels.description}</Description>
      </Head>
      <ServiceContainer>
        {contents.map(val => (
          <ContentWrapper key={val.code}>
            <ServiceContent content={val} />
          </ContentWrapper>
        ))}
      </ServiceContainer>
    </ContainerWithHF>
  );
};

export default Component;
