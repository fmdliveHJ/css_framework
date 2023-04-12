import React from 'react';
import styled from 'styled-components';

const Button = ({ className, children }) => {
  return <ButtonBox className={`btn_${className}`}>{children}</ButtonBox>;
};

export default Button;

const ButtonBox = styled.button`
  &.btn_big {
    width: 462px;
    height: 60px;
    background: #fff;
    border: 1px solid #dcdddd;
    border-radius: 5px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3d3d3d;
  }
  &.btn_large {
    display: block;
    width: 400px;
    height: 48px;
    border-radius: 5px;
  }

  &.btn_middle {
    padding: 0 8px;
    min-width: 90px;
    height: 26px;
    background: #fff;
    border-radius: 3px;
    box-sizing: border-box;
  }

  &.btn_small {
    width: 67px;
    height: 27px;
    border-radius: 3px;
  }
`;
