import React from 'react';
import styled from 'styled-components';

const PageStyled = styled.div`
  margin-top: 80px;
`;

const Page = (props) => {
  return (
    <PageStyled {...props} />
  );
}

export default Page;