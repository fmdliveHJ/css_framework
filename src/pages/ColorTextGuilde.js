import React from 'react';
import styled from 'styled-components';
const ColorTextGuilde = () => {
  return (
    <StyledBox>
      <div className='wrapper d-flex m-50'>
        <h2>Color</h2>
        <div>
          <h3>Text</h3>
          <ul>
            <li>
              <span className='color_ty01'></span>
              <dl>
                <dt>#000000</dt>
                <dd>타이틀, 본문폰트</dd>
              </dl>
            </li>
            <li>
              <span className='color_ty02'></span>
              <dl>
                <dt>#8b8e95</dt>
                <dd>기본 본문 폰트</dd>
              </dl>
            </li>

            <li>
              <span className='color_ty04'></span>
              <dl>
                <dt>#fff</dt>
                <dd>버튼 삭제 및 저장 폰트 </dd>
              </dl>
            </li>
            <li>
              <span className='color_ty05'></span>
              <dl>
                <dt>#6B6B6B</dt>
                <dd>서브 폰트</dd>
              </dl>
            </li>
            <li>
              <span className='color_ty06'></span>
              <dl>
                <dt>#ABACAD</dt>
                <dd>다크모드 타이틀 폰트 </dd>
              </dl>
            </li>
            <li>
              <span className='color_ty07'></span>
              <dl>
                <dt>#898989</dt>
                <dd>시간 폰트 </dd>
              </dl>
            </li>
            <li>
              <span className='color_ty08'></span>
              <dl>
                <dt>#BEC0C0</dt>
                <dd>캘린더</dd>
              </dl>
            </li>
          </ul>
        </div>
        <div>
          <h3>Background</h3>
          <ul>
            <li>
              <span className='color_bg01'></span>
              <dl>
                <dt>#0073EA</dt>
                <dd>포인트</dd>
              </dl>
            </li>
            <li>
              <span className='color_bg02'></span>
              <dl>
                <dt>#CCE5FF</dt>
                <dd>서브 포인트</dd>
              </dl>
            </li>
            <li>
              <span className='color_bg03'></span>
              <dl>
                <dt>#E4E4E9</dt>
                <dd>인풋박스, 라인</dd>
              </dl>
            </li>
            <li>
              <span className='color_bg04'></span>
              <dl>
                <dt>#F8F8F8</dt>
                <dd>input 박스 배경</dd>
              </dl>
            </li>
            <li>
              <span className='color_bg05'></span>
              <dl>
                <dt>#E8E8EC</dt>
                <dd>라인</dd>
              </dl>
            </li>
            <li>
              <span className='color_bg06'></span>
              <dl>
                <dt>#E44258</dt>
                <dd>삭제 및 탈퇴 버튼 배경</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>

      <div className='wrapper d-flex m-50'>
        <h2>Text</h2>
      </div>
    </StyledBox>
  );
};

export default ColorTextGuilde;

const StyledBox = styled.div`
  padding: 50px;
  box-sizing: border-box;
  .wrapper {
    padding: 20px;
    background: #fff;
    flex-direction: column;
    gap: 3rem;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    margin-bottom: 20px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 5rem;
    li {
      display: flex;
      align-items: center;
      width: 20%;
      span {
        min-width: 80px;
        height: 80px;
        border-radius: 100%;
        margin-right: 10px;
        border: 1px dashed #000;

        &.color_ty01 {
          background: #000;
        }
        &.color_ty02 {
          background: #8b8e95;
        }

        &.color_ty04 {
          background: #fff;
        }
        &.color_ty05 {
          background: #6b6b6b;
        }
        &.color_ty06 {
          background: #abacad;
        }

        &.color_ty07 {
          background: #898989;
        }
        &.color_ty08 {
          background: #bec0c0;
        }

        &.color_bg01 {
          background: #0073ea;
        }
        &.color_bg02 {
          background: #cce5ff;
        }
        &.color_bg03 {
          background: #e4e4e9;
        }
        &.color_bg04 {
          background: #f8f8f8;
        }
        &.color_bg05 {
          background: #e8e8ec;
        }
        &.color_bg05 {
          background: #e44258;
        }
      }
    }
  }
`;
