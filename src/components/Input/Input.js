import React from 'react';
import styled from 'styled-components';

const Input = ({ className, children }) => {
  return <InputBox type='text' className={`${className}`} />;
};

export default Input;

const InputBox = styled.input`
  padding-left: 12px;
  background: #fff;
  border: 1px solid #dcdddd;
  border-radius: 5px;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  appearance: none;
  &::placeholder {
    color: #8b8e95;
  }

  /* inp 속성*/
  &.inp_invalid {
    position: relative;
  }
  &.inp_invalid input {
    border-color: #ff212b;
  }
  &.inp_invalid p {
    position: absolute;
    left: 0;
    bottom: -15px;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: #ff212b;
  }

  &.form_box {
    display: flex;
    box-sizing: border-box;
  }
`;
