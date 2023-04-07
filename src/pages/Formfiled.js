import React from 'react';
import styled from 'styled-components';

/**
 * 아이콘 명칭 name + Icon
 */
//검색 돋보기 아이콘
import { ReactComponent as SearchIcon } from '../assets/images/contents/ico_search_default.svg';

const Formfiled = () => {
  return (
    <StyledBox>
      <div className='wrapper d-flex justify-content-center gap-5 m-50'>
        <div className='inp_box'>
          <input
            type='text'
            className='btn_large input_default'
            placeholder='btn_large'
          />
        </div>

        <div className='inp_box'>
          <input
            type='text'
            className='btn_middle input_default'
            placeholder='btn_middle'
          />
        </div>
        <div className='inp_box'>
          <input
            type='text'
            className='btn_small input_default'
            placeholder='btn_small'
          />
        </div>
      </div>
      <div className='wrapper d-flex justify-content-center gap-5 m-50'>
        <div className='inp_box'>
          <input type='text' className='btn_large input_default' />
        </div>
        <div className='inp_box inp_invalid'>
          <input type='text' className='btn_large input_default' />
          <p>이미 등록된 닉네임 입니다.</p>
        </div>
        <div className='inp_box disabled'>
          <input type='text' className='btn_large input_default disabled' />
        </div>
      </div>
      <div className='wrapper d-flex justify-content-center gap-5 m-50'>
        <button className='btn_large btn_login '>바로노트 시작</button>
        <button className='btn_large btn_login on '>바로노트 시작</button>
      </div>
      <div className='wrapper d-flex justify-content-center gap-5 m-50'>
        <button className='btn_big'>Google로 계속하기</button>
      </div>
      <div className='wrapper d-flex justify-content-center gap-5 m-50'>
        <button className='btn_middle btn_create'>
          <svg
            width='8'
            height='8'
            viewBox='0 0 8 8'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4 0C4.13261 0 4.25979 0.0526785 4.35355 0.146447C4.44732 0.240215 4.5 0.367392 4.5 0.5V3.5H7.5C7.63261 3.5 7.75979 3.55268 7.85355 3.64645C7.94732 3.74021 8 3.86739 8 4C8 4.13261 7.94732 4.25979 7.85355 4.35355C7.75979 4.44732 7.63261 4.5 7.5 4.5H4.5V7.5C4.5 7.63261 4.44732 7.75979 4.35355 7.85355C4.25979 7.94732 4.13261 8 4 8C3.86739 8 3.74021 7.94732 3.64645 7.85355C3.55268 7.75979 3.5 7.63261 3.5 7.5V4.5H0.5C0.367392 4.5 0.240215 4.44732 0.146447 4.35355C0.0526785 4.25979 0 4.13261 0 4C0 3.86739 0.0526785 3.74021 0.146447 3.64645C0.240215 3.55268 0.367392 3.5 0.5 3.5H3.5V0.5C3.5 0.367392 3.55268 0.240215 3.64645 0.146447C3.74021 0.0526785 3.86739 0 4 0Z'
              fill='#fff'
            ></path>
          </svg>
          <span>콘텐츠 생성</span>
        </button>

        <button className='btn_middle btn_recording'>
          <span>녹음 시작</span>
          <div className='record_circle '>
            <div className='record_circle red'></div>
          </div>
        </button>

        <button className='btn_middle btn_newCreate c_list'>
          <span>신규 생성</span>
          <svg
            width='11'
            height='6'
            viewBox='0 0 11 6'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5.50054 5.45824C5.33504 5.45857 5.17464 5.40093 5.04721 5.29533L0.797208 1.75366C0.652554 1.63343 0.561587 1.46066 0.544318 1.27336C0.527049 1.08605 0.584893 0.899564 0.705124 0.75491C0.825356 0.610257 0.998127 0.51929 1.18543 0.502021C1.37273 0.484752 1.55922 0.542595 1.70387 0.662827L5.50054 3.83616L9.29721 0.776161C9.36966 0.717322 9.45303 0.673383 9.54252 0.646869C9.63201 0.620355 9.72586 0.611788 9.81867 0.621662C9.91148 0.631536 10.0014 0.659654 10.0833 0.704402C10.1652 0.74915 10.2375 0.809646 10.296 0.88241C10.3608 0.955242 10.41 1.04069 10.4403 1.13339C10.4706 1.22609 10.4814 1.32405 10.4721 1.42114C10.4628 1.51823 10.4335 1.61234 10.3862 1.6976C10.3388 1.78285 10.2743 1.8574 10.1968 1.91658L5.94679 5.33783C5.81569 5.42673 5.65857 5.46913 5.50054 5.45824Z'
              fill='white'
            ></path>
          </svg>
        </button>

        <button className='btn_middle btn_newCreate c_calendar'>
          <svg
            width='13'
            height='13'
            viewBox='0 0 13 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.875 0.75C9.37228 0.75 9.84919 0.947544 10.2008 1.29917C10.5525 1.65081 10.75 2.12772 10.75 2.625V5.7C10.5103 5.57735 10.2591 5.47863 10 5.40525V3.75H1V9.375C1 9.67337 1.11853 9.95952 1.3295 10.1705C1.54048 10.3815 1.82663 10.5 2.125 10.5H4.90525C4.9795 10.7618 5.07775 11.0122 5.2 11.25H2.125C1.62772 11.25 1.15081 11.0525 0.799175 10.7008C0.447544 10.3492 0.25 9.87228 0.25 9.375V2.625C0.25 2.12772 0.447544 1.65081 0.799175 1.29917C1.15081 0.947544 1.62772 0.75 2.125 0.75H8.875ZM8.875 1.5H2.125C1.82663 1.5 1.54048 1.61853 1.3295 1.8295C1.11853 2.04048 1 2.32663 1 2.625V3H10V2.625C10 2.32663 9.88147 2.04048 9.6705 1.8295C9.45952 1.61853 9.17337 1.5 8.875 1.5ZM12.25 9.375C12.25 10.2701 11.8944 11.1285 11.2615 11.7615C10.6285 12.3944 9.77011 12.75 8.875 12.75C7.97989 12.75 7.12145 12.3944 6.48851 11.7615C5.85558 11.1285 5.5 10.2701 5.5 9.375C5.5 8.47989 5.85558 7.62145 6.48851 6.98851C7.12145 6.35558 7.97989 6 8.875 6C9.77011 6 10.6285 6.35558 11.2615 6.98851C11.8944 7.62145 12.25 8.47989 12.25 9.375ZM9.25 7.875C9.25 7.77554 9.21049 7.68016 9.14017 7.60983C9.06984 7.53951 8.97446 7.5 8.875 7.5C8.77554 7.5 8.68016 7.53951 8.60983 7.60983C8.53951 7.68016 8.5 7.77554 8.5 7.875V9H7.375C7.27554 9 7.18016 9.03951 7.10983 9.10983C7.03951 9.18016 7 9.27554 7 9.375C7 9.47446 7.03951 9.56984 7.10983 9.64017C7.18016 9.71049 7.27554 9.75 7.375 9.75H8.5V10.875C8.5 10.9745 8.53951 11.0698 8.60983 11.1402C8.68016 11.2105 8.77554 11.25 8.875 11.25C8.97446 11.25 9.06984 11.2105 9.14017 11.1402C9.21049 11.0698 9.25 10.9745 9.25 10.875V9.75H10.375C10.4745 9.75 10.5698 9.71049 10.6402 9.64017C10.7105 9.56984 10.75 9.47446 10.75 9.375C10.75 9.27554 10.7105 9.18016 10.6402 9.10983C10.5698 9.03951 10.4745 9 10.375 9H9.25V7.875Z'
              fill='white'
            ></path>
          </svg>
          <span>신규 생성</span>
        </button>

        <button className='btn_middle btn_default'>
          <span>닉네임 변경</span>
        </button>

        <button className='btn_middle btn_default'>
          <span>Google Drive로 이동</span>
        </button>
      </div>
      <div className='wrapper d-flex justify-content-center gap-5 m-50'>
        <button className='btn_small btn_download'>
          <span>다운로드</span>
        </button>
        <button className='btn_small btn_delete'>
          <span>삭제</span>
        </button>
        <button className='btn_small btn_delete btn_red'>
          <span>삭제</span>
        </button>
        <button className='btn_small btn_cancel'>
          <span>취소</span>
        </button>
        <div className='btn_dropdown'>
          <span>소유자</span>
          <svg
            width='10'
            height='7'
            viewBox='0 0 10 7'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4.65751 6.1544C4.69573 6.20992 4.74688 6.25531 4.80654 6.28667C4.86621 6.31803 4.9326 6.33442 5 6.33442C5.06741 6.33442 5.1338 6.31803 5.19347 6.28667C5.25313 6.25531 5.30428 6.20992 5.3425 6.1544L9.09251 0.737735C9.13591 0.675258 9.16137 0.602081 9.1661 0.526154C9.17084 0.450226 9.15468 0.374453 9.11937 0.307065C9.08407 0.239678 9.03097 0.183255 8.96585 0.143925C8.90073 0.104596 8.82608 0.0838651 8.75001 0.0839849H1.25C1.17411 0.0842984 1.09973 0.105296 1.03487 0.144719C0.970014 0.184143 0.91713 0.240501 0.881908 0.307732C0.846685 0.374963 0.830456 0.450525 0.834966 0.52629C0.839476 0.602055 0.864555 0.675157 0.907504 0.737735L4.65751 6.1544Z'
              fill='black'
            ></path>
          </svg>
        </div>
        <div className='btn_dropdown btn_blue'>
          <span>콘텐츠 유형</span>
          <svg
            width='10'
            height='7'
            viewBox='0 0 10 7'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4.65751 6.1544C4.69573 6.20992 4.74688 6.25531 4.80654 6.28667C4.86621 6.31803 4.9326 6.33442 5 6.33442C5.06741 6.33442 5.1338 6.31803 5.19347 6.28667C5.25313 6.25531 5.30428 6.20992 5.3425 6.1544L9.09251 0.737735C9.13591 0.675258 9.16137 0.602081 9.1661 0.526154C9.17084 0.450226 9.15468 0.374453 9.11937 0.307065C9.08407 0.239678 9.03097 0.183255 8.96585 0.143925C8.90073 0.104596 8.82608 0.0838651 8.75001 0.0839849H1.25C1.17411 0.0842984 1.09973 0.105296 1.03487 0.144719C0.970014 0.184143 0.91713 0.240501 0.881908 0.307732C0.846685 0.374963 0.830456 0.450525 0.834966 0.52629C0.839476 0.602055 0.864555 0.675157 0.907504 0.737735L4.65751 6.1544Z'
              fill='black'
            ></path>
          </svg>
        </div>
        <div className='btn_dropdown btn_blue'>
          <span>노트</span>
          <svg
            width='8'
            height='8'
            viewBox='0 0 8 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.03496 6.5894C7.09364 6.64865 7.12656 6.72867 7.12656 6.81206C7.12656 6.89545 7.09364 6.97547 7.03496 7.03472C6.97523 7.09247 6.89539 7.12476 6.8123 7.12476C6.72922 7.12476 6.64938 7.09247 6.58965 7.03472L3.9998 4.44097L1.40996 7.03472C1.35023 7.09247 1.27039 7.12476 1.1873 7.12476C1.10422 7.12476 1.02438 7.09247 0.964648 7.03472C0.905967 6.97547 0.873047 6.89545 0.873047 6.81206C0.873047 6.72867 0.905967 6.64865 0.964648 6.5894L3.5584 3.99956L0.964648 1.40972C0.914816 1.349 0.88935 1.27192 0.893203 1.19346C0.897056 1.11501 0.929953 1.04079 0.985496 0.985252C1.04104 0.929709 1.11525 0.896812 1.19371 0.892959C1.27216 0.889106 1.34924 0.914572 1.40996 0.964405L3.9998 3.55815L6.58965 0.964405C6.65037 0.914572 6.72745 0.889106 6.8059 0.892959C6.88436 0.896812 6.95857 0.929709 7.01411 0.985252C7.06966 1.04079 7.10255 1.11501 7.10641 1.19346C7.11026 1.27192 7.08479 1.349 7.03496 1.40972L4.44121 3.99956L7.03496 6.5894Z'
              fill='black'
            ></path>
          </svg>
        </div>
      </div>
      <div className='wrapper d-flex justify-content-center gap-5 m-50'>
        <div className='select'>
          <select>
            <option value=''>텍스트1</option>
            <option value=''>텍스트2</option>
            <option value=''>텍스트3</option>
          </select>
          <svg
            width='10'
            height='10'
            viewBox='0 0 10 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4.65751 8.15373C4.69573 8.20925 4.74688 8.25464 4.80654 8.286C4.86621 8.31736 4.9326 8.33375 5 8.33375C5.06741 8.33375 5.1338 8.31736 5.19347 8.286C5.25313 8.25464 5.30428 8.20925 5.3425 8.15373L9.09251 2.73706C9.13591 2.67459 9.16137 2.60141 9.1661 2.52548C9.17084 2.44955 9.15468 2.37378 9.11937 2.30639C9.08407 2.23901 9.03097 2.18258 8.96585 2.14325C8.90073 2.10392 8.82608 2.08319 8.75001 2.08331H1.25C1.17411 2.08363 1.09973 2.10462 1.03487 2.14405C0.970014 2.18347 0.91713 2.23983 0.881908 2.30706C0.846685 2.37429 0.830456 2.44985 0.834966 2.52562C0.839476 2.60138 0.864555 2.67449 0.907504 2.73706L4.65751 8.15373Z'
              fill='black'
            ></path>
          </svg>
        </div>
      </div>

      <div className='wrapper d-flex justify-content-center gap-5 m-50 bg-white'>
        <div className='searchBox_type01'>
          <SearchIcon className='searchIcon' style={{ stroke: '#8b8e95' }} />
          <input type='search' placeholder='전체에서 검색' />
        </div>
        <div className='searchBox_type02'>
          <SearchIcon className='searchIcon' style={{ stroke: '#8b8e95' }} />
          <input type='search' placeholder='파일에서 찾기' />
        </div>
      </div>
      <div className='wrapper d-flex justify-content-center gap-5 m-50 bg-white'>
        <div className='check'>
          <label htmlFor='check01'>
            <input type='checkbox' id='check01' />
            <span></span>
          </label>
        </div>
      </div>
      <div className='wrapper d-flex justify-content-center gap-5 m-50 bg-white'>
        <ul className='radioBox'>
          <li>
            <label>
              <input type='radio' className='radio' name='open' />
              <em></em>
              <span>ex1</span>
            </label>
          </li>
          <li>
            <label>
              <input type='radio' className='radio' name='open' />
              <em></em>
              <span>ex2</span>
            </label>
          </li>
        </ul>
      </div>
    </StyledBox>
  );
};

export default Formfiled;

const StyledBox = styled.div`
  .bg-white {
    background-color: #f2f2f2 !important;
  }
`;
