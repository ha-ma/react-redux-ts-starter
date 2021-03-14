import styled from "styled-components";

export const Wrapper = styled.div(({ theme }) => {
  return {
    "& > *": {
      padding: 0,
      margin: 0,
      boxSizing: "border-box"
    }
  };
});
