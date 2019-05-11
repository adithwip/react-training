import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10rem)
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const StyledContainer = styled.div`
  animation: ${fadeIn} .5s ease-in;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: ${props => (
    props.flexDirection === 'row' ? 'horizontal' : 'vertical'
  )};
  -webkit-box-direction: normal;
  -ms-flex-direction: ${props => props.flexDirection};
  flex-direction: ${props => props.flexDirection};
  padding: ${props => props.padding};

  @media (max-width: 700px) {
    flex-direction: column;
    padding: .5rem 2rem;
  }
`;

const Container = (props) => {
  const { flexDirection, padding } = props;
  return (
    <StyledContainer flexDirection={flexDirection} padding={padding} {...props} />
  );
}

Container.defaultProps = {
  flexDirection: 'row',
}

export default Container;