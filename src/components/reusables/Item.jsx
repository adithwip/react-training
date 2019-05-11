import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
  flex: ${props => props.flex};
`;

const Item = (props) => {

  const { flex } = props

  return (

    <StyledItem flex={flex} {...props} />
  )
}

Item.defaultProps = {
  flex: 'none',
};

export default Item;