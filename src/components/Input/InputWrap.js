import React from 'react';
import Input from './Input';
import styled from 'styled-components';
const InputWrap = ({ wrapperClassName, inputClassName, children }) => {
  return (
    <InputWrapper className={wrapperClassName}>
      <Input className={inputClassName} />
      {children}
    </InputWrapper>
  );
};

export default InputWrap;

const InputWrapper = styled.div`
  &.invalid {
    position: relative;
    input {
      border-color: #ff212b;
    }
    p {
      position: absolute;
      left: 0;
      bottom: -15px;
      font-weight: 400;
      font-size: 10px;
      line-height: 14px;
      color: #ff212b;
    }
  }
`;
