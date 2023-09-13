import React from "react";
import styled from "styled-components";

type Props = {
  children: string;
};

export const Title: React.FC<Props> = ({ children }) => {
  return (
    <>
      <TitleWrap>{children}</TitleWrap>
    </>
  );
};

const TitleWrap = styled.div`
  font-family: Arial, sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #4e4e4e;
  margin: 20px auto 5px;
`;
