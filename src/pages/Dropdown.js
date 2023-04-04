import React from 'react';
import styled from 'styled-components';
const Dropdown = () => {
  return (
    <StyledBox>
      <div className='wrapper d-flex justify-content-center gap-5 m-50'>
        <div class='dropdown'>
          <div class='dropdown_default'>
            <ul class='dropdown_list'>
              <li class='folder'>
                <i>
                  <svg
                    width='18'
                    height='12'
                    viewBox='0 0 18 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15.6665 0H2.33317C1.4165 0 0.666504 0.75 0.666504 1.66667V10C0.666504 10.9167 1.4165 11.6667 2.33317 11.6667H15.6665C16.5832 11.6667 17.3332 10.9167 17.3332 10V1.66667C17.3332 0.75 16.5832 0 15.6665 0Z'
                      fill='#FFCA28'
                    ></path>
                  </svg>
                </i>
                <span>새로운폴더</span>
              </li>
              <li class='note'>
                <i>
                  <svg
                    width='18'
                    height='12'
                    viewBox='0 0 18 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15.6665 0H2.33317C1.4165 0 0.666504 0.75 0.666504 1.66667V10C0.666504 10.9167 1.4165 11.6667 2.33317 11.6667H15.6665C16.5832 11.6667 17.3332 10.9167 17.3332 10V1.66667C17.3332 0.75 16.5832 0 15.6665 0Z'
                      fill='#FFCA28'
                    ></path>
                  </svg>
                </i>
                <span>새로운노트</span>
              </li>
              <li class='recording'>
                <i>
                  <svg
                    width='18'
                    height='12'
                    viewBox='0 0 18 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15.6665 0H2.33317C1.4165 0 0.666504 0.75 0.666504 1.66667V10C0.666504 10.9167 1.4165 11.6667 2.33317 11.6667H15.6665C16.5832 11.6667 17.3332 10.9167 17.3332 10V1.66667C17.3332 0.75 16.5832 0 15.6665 0Z'
                      fill='#FFCA28'
                    ></path>
                  </svg>
                </i>
                <span>녹음</span>
              </li>
            </ul>
          </div>
        </div>
        <div class='dropdown'>
          <div class='dropdown_default text_only'>
            <ul class='dropdown_list '>
              <li>
                <span>txt</span>
              </li>
              <li>
                <span>xlsx</span>
              </li>
              <li>
                <span>smi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledBox>
  );
};

export default Dropdown;
const StyledBox = styled.div``;
