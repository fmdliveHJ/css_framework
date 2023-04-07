import React from 'react';
import styled from 'styled-components';
const Modal = () => {
  return (
    <StyledBox>
      <div className='wrapper d-flex justify-content-center gap-5 m-50'>
        <div className='modal_box modal_share modal_static pd_y_rem5'>
          <div className='modal_container' style={{ width: '591px' }}>
            <div className='modal_top'>
              <h2>공유</h2>
            </div>
            <div className='modal_body'>
              <form className='form_box'>
                <input
                  className='input_default w_100'
                  type='search'
                  placeholder='이름, 이메일을 입력해주세요'
                />
                <button className='btn_middle btn_invite'>초대</button>
              </form>
              <ul className='modal_list'>
                <li>
                  <div className='avatar'>강</div>
                  <div className='list_info'>
                    <p>강세규</p>
                    <span>skkang@gmail.com</span>
                  </div>
                  <span className='owner'>소유자</span>
                </li>
                <li>
                  <div className='avatar'>배</div>
                  <div>
                    <p>배준영</p>
                    <span>jybae@gmail.com</span>
                  </div>
                  <div className='dropdown_modal'>
                    <span> 읽기 허용</span>
                  </div>
                </li>
              </ul>
              <div className='share_access'>
                <div>
                  <p>링크를 통한 모든 사용자 엑세스 허용</p>
                  <span>
                    링크가 있는 모든 사용자가 링크를 통해 콘텐츠를 확인할 수
                    있습니다.
                  </span>
                </div>
                <div className='check'>
                  <label htmlFor='check01'>
                    <input type='checkbox' id='check01' />
                    <span></span>
                  </label>
                </div>
              </div>
            </div>
            <div className='modal_bottom'>
              <div className='copy_link'>링크 복사</div>
            </div>
            <div className='btn_close'></div>
          </div>
        </div>
      </div>
      <div className='wrapper d-flex justify-content-center gap-5 m-50'>
        <div className='modal_container' style={{ width: '635px' }}>
          <div className='modal_top'>
            <h2 className='bd_b_line pd_b_15'>이동할 폴더 선택</h2>
          </div>
          <div className='modal_body'>
            <div className='modal_breadcrumb'>
              <span>내 파일</span>
            </div>
            <ul className='modal_list modal_move_height'>
              <li>
                <div className='img'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.8332 6.24996H11.4582L9.37489 4.16663H4.16655C3.02072 4.16663 2.08322 5.10413 2.08322 6.24996V10.4166H22.9166V8.33329C22.9166 7.18746 21.9791 6.24996 20.8332 6.24996Z'
                      fill='#FFA000'
                    ></path>
                    <path
                      d='M20.8332 6.25H4.16655C3.02072 6.25 2.08322 7.1875 2.08322 8.33333V18.75C2.08322 19.8958 3.02072 20.8333 4.16655 20.8333H20.8332C21.9791 20.8333 22.9166 19.8958 22.9166 18.75V8.33333C22.9166 7.1875 21.9791 6.25 20.8332 6.25Z'
                      fill='#FFCA28'
                    ></path>
                  </svg>
                </div>
                <div className='list_info'>
                  <p>새로운 폴더 2</p>
                  <span>51 파일</span>
                </div>
                <span className='date'>어제</span>
              </li>
              <li>
                <div className='img'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.8332 6.24996H11.4582L9.37489 4.16663H4.16655C3.02072 4.16663 2.08322 5.10413 2.08322 6.24996V10.4166H22.9166V8.33329C22.9166 7.18746 21.9791 6.24996 20.8332 6.24996Z'
                      fill='#FFA000'
                    ></path>
                    <path
                      d='M20.8332 6.25H4.16655C3.02072 6.25 2.08322 7.1875 2.08322 8.33333V18.75C2.08322 19.8958 3.02072 20.8333 4.16655 20.8333H20.8332C21.9791 20.8333 22.9166 19.8958 22.9166 18.75V8.33333C22.9166 7.1875 21.9791 6.25 20.8332 6.25Z'
                      fill='#FFCA28'
                    ></path>
                  </svg>
                </div>
                <div className='list_info'>
                  <p>새로운 폴더 2</p>
                  <span>51 파일</span>
                </div>
                <span className='date'>어제</span>
              </li>
              <li>
                <div className='img'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.8332 6.24996H11.4582L9.37489 4.16663H4.16655C3.02072 4.16663 2.08322 5.10413 2.08322 6.24996V10.4166H22.9166V8.33329C22.9166 7.18746 21.9791 6.24996 20.8332 6.24996Z'
                      fill='#FFA000'
                    ></path>
                    <path
                      d='M20.8332 6.25H4.16655C3.02072 6.25 2.08322 7.1875 2.08322 8.33333V18.75C2.08322 19.8958 3.02072 20.8333 4.16655 20.8333H20.8332C21.9791 20.8333 22.9166 19.8958 22.9166 18.75V8.33333C22.9166 7.1875 21.9791 6.25 20.8332 6.25Z'
                      fill='#FFCA28'
                    ></path>
                  </svg>
                </div>
                <div className='list_info'>
                  <p>새로운 폴더 2</p>
                  <span>51 파일</span>
                </div>
                <span className='date'>어제</span>
              </li>
              <li>
                <div className='img'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.8332 6.24996H11.4582L9.37489 4.16663H4.16655C3.02072 4.16663 2.08322 5.10413 2.08322 6.24996V10.4166H22.9166V8.33329C22.9166 7.18746 21.9791 6.24996 20.8332 6.24996Z'
                      fill='#FFA000'
                    ></path>
                    <path
                      d='M20.8332 6.25H4.16655C3.02072 6.25 2.08322 7.1875 2.08322 8.33333V18.75C2.08322 19.8958 3.02072 20.8333 4.16655 20.8333H20.8332C21.9791 20.8333 22.9166 19.8958 22.9166 18.75V8.33333C22.9166 7.1875 21.9791 6.25 20.8332 6.25Z'
                      fill='#FFCA28'
                    ></path>
                  </svg>
                </div>
                <div className='list_info'>
                  <p>새로운 폴더 2</p>
                  <span>51 파일</span>
                </div>
                <span className='date'>어제</span>
              </li>
              <li>
                <div className='img'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.8332 6.24996H11.4582L9.37489 4.16663H4.16655C3.02072 4.16663 2.08322 5.10413 2.08322 6.24996V10.4166H22.9166V8.33329C22.9166 7.18746 21.9791 6.24996 20.8332 6.24996Z'
                      fill='#FFA000'
                    ></path>
                    <path
                      d='M20.8332 6.25H4.16655C3.02072 6.25 2.08322 7.1875 2.08322 8.33333V18.75C2.08322 19.8958 3.02072 20.8333 4.16655 20.8333H20.8332C21.9791 20.8333 22.9166 19.8958 22.9166 18.75V8.33333C22.9166 7.1875 21.9791 6.25 20.8332 6.25Z'
                      fill='#FFCA28'
                    ></path>
                  </svg>
                </div>
                <div className='list_info'>
                  <p>새로운 폴더 2</p>
                  <span>51 파일</span>
                </div>
                <span className='date'>어제</span>
              </li>
            </ul>
          </div>
          <div className='modal_bottom pd_y15 bd_t_line'>
            <div className='d-flex justify-content-end '>
              <button className='btn_small btn_gray'>이동</button>
            </div>
          </div>
          <div className='btn_close'></div>
        </div>
      </div>
      <div className='wrapper d-flex justify-content-center gap-5 m-50'>
        <div
          className='modal_container'
          style={{ width: '334px', height: '179px' }}
        >
          <div className='modal_body'>
            <div className='confirm_text_box'>
              <p>현재 녹음 중인 파일에 연결 하시겠습니까?</p>
              <span>메모를 작성하면 시간 정보가 함께 기록됩니다.</span>
            </div>
            <div className='d_flex button_box'>
              <button className='btn_small btn_gray'>취소</button>
              <button className='btn_small btn_blue btn_mleft'>연결</button>
            </div>
          </div>
        </div>
      </div>
    </StyledBox>
  );
};

export default Modal;

const StyledBox = styled.div``;
