/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

const InputBase = styled.input`
    width: 100%;
    padding: 15px;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.mainBg};
    border-radius: ${({ theme }) => theme.borderRadius};
    outline: 0;
    margin-bottom: 25px;
`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div style={{ display: 'flex' }}>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: Proptypes.func.isRequired,
  placeholder: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  value: Proptypes.string,
};
