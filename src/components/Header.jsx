import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h1 style={{
        color: props.color,
        fontWeight: props.fontWeight,
      }}>
        {props.title}
      </h1>
    </header>
  );
}

Header.defaultProps = {
  color: 'red',
  fontWeight: 'normal',
};

export default Header;