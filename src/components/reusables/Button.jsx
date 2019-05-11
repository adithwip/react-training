import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledBtn = styled.button`
  color: #000;
  position: relative;
  text-align: center;
  left: 50%;
  padding: 10px;
  font-size: 20px;

  :hover{
    animation: ${rotate} 3s ease-in infinite;
    color: red;
    background-color: blue;
  }

  :active {
    color: purple;
    background-color: grey;
    transform: scale(.5);
    transition: .1s;
  }

  @media (max-width: 700px) {
    background: black;
    color: green;
    padding: 40px;
  }

`;

const Button = () =>{
  return(
    <StyledBtn>Button</StyledBtn>
  )
}

export default Button;