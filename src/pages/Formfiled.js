import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Prism from 'prismjs';
/**
 * 아이콘 명칭 name + Icon
 */
//검색 돋보기 아이콘
import { ReactComponent as SearchIcon } from '../assets/images/contents/ico_search_default.svg';
import { ReactComponent as PlusType01Icon } from '../assets/images/contents/ico_plus_ex01.svg';
import { ReactComponent as CreateEx01Icon } from '../assets/images/contents/ico_create_ex01.svg';
import { ReactComponent as ArrowEx01Icon } from '../assets/images/contents/ico_arrow_ex01.svg';
import { ReactComponent as ArrowDefaultIcon } from '../assets/images/contents/ico_arrow_default.svg';
import { ReactComponent as CloseDefaultIcon } from '../assets/images/contents/ico_close_default.svg';

const Formfiled = ({ language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <StyledBox>
      <div className='wrapper d-flex justify-content-center  m-50 flex-col'>
        {/* <div className='columns'>
          <div className='column'>
            내용
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
               내용
              `}
            </SyntaxHighlighter>
          </div>
        </div> */}

        <div className='columns'>
          <div className='column'>
            <button className='btn_large'>btn_large</button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
               <button class="btn_large">btn_large</button>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <button className='btn_middle'>btn_middle</button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
               <button class="btn_middle">btn_middle</button>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <button className='btn_small'>btn_small</button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
               <button class="btn_small">btn_small</button>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <div className='wrapper d-flex justify-content-center gap-1 m-50'>
        <div className='columns'>
          <div className='column'>
            <div className='inp_box'>
              <input type='text' className='btn_large input_default' />
            </div>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
                <div className='inp_box'>
                  <input type='text' className='btn_large input_default' />
                </div>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <div className='inp_box inp_invalid'>
              <input type='text' className='btn_large input_default' />
              <p>이미 등록된 닉네임 입니다.</p>
            </div>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
              <div className='inp_box inp_invalid'>
                <input type='text' className='btn_large input_default' />
                <p>이미 등록된 닉네임 입니다.</p>
              </div>
              `}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className='columns'>
          <div className='column'>
            <div className='inp_box disabled'>
              <input type='text' className='btn_large input_default disabled' />
            </div>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
                <div className='inp_box disabled'>
                  <input type='text' className='btn_large input_default disabled' />
                </div>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <div className='wrapper d-flex justify-content-center gap-1 m-50'>
        <div className='columns'>
          <div className='column'>
            <button className='btn_large btn_login '>바로노트 시작</button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
                <button className='btn_large btn_login '>바로노트 시작</button>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <button className='btn_large btn_login on '>바로노트 시작</button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
                <button className='btn_large btn_login on '>바로노트 시작</button>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <button className='btn_big'>Google로 계속하기</button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
                  <button className='btn_big'>Google로 계속하기</button>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <div className='wrapper d-flex justify-content-center gap-5 m-50'>
        <div className='columns'>
          <div className='column'>
            <button className='btn_middle btn_create'>
              <PlusType01Icon style={{ fill: '#fff' }} />
              <span>콘텐츠 생성</span>
            </button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
              <button className='btn_middle btn_create'>
                <PlusType01Icon style={{ fill: '#fff' }} />
                <span>콘텐츠 생성</span>
              </button>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <button className='btn_middle btn_recording'>
              <span>녹음 시작</span>
              <div className='record_circle '>
                <div className='record_circle red'></div>
              </div>
            </button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
              <button className='btn_middle btn_recording'>
                <span>녹음 시작</span>
                <div className='record_circle '>
                  <div className='record_circle red'></div>
                </div>
              </button>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <button className='btn_middle btn_newCreate c_list'>
              <span>신규 생성</span>
              <ArrowEx01Icon style={{ fill: '#fff' }} />
            </button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
              <button className='btn_middle btn_newCreate c_list'>
                <span>신규 생성</span>
                <PlusType01Icon style={{ fill: '#000' }} />
              </button>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <button className='btn_middle btn_newCreate c_calendar'>
              <CreateEx01Icon style={{ fill: '#fff' }} />
              <span>신규 생성</span>
            </button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
              <button className='btn_middle btn_newCreate c_calendar'>
                <CreateEx01Icon style={{ fill: '#fff' }} />
                <span>신규 생성</span>
              </button>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <button className='btn_middle btn_default'>
              <span>닉네임 변경</span>
            </button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
              <button className='btn_middle btn_default'>
                <span>닉네임 변경</span>
              </button>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <button className='btn_middle btn_default'>
              <span>Google Drive로 이동</span>
            </button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
              <button className='btn_middle btn_default'>
                <span>Google Drive로 이동</span>
              </button>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <div className='wrapper d-flex justify-content-center gap-5 m-50'>
        <div className='columns'>
          <div className='column'>
            <button className='btn_small btn_download'>
              <span>다운로드</span>
            </button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
              <button className='btn_small btn_download'>
                <span>다운로드</span>
              </button>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <button className='btn_small btn_delete'>
              <span>삭제</span>
            </button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
              <button className='btn_small btn_delete'>
                <span>삭제</span>
              </button>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <button className='btn_small btn_delete btn_red'>
              <span>삭제</span>
            </button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
              <button className='btn_small btn_delete btn_red'>
                <span>삭제</span>
              </button>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <button className='btn_small btn_cancel'>
              <span>취소</span>
            </button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
                <button className='btn_small btn_cancel'>
                 <span>취소</span>
                </button>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <div className='btn_dropdown'>
              <span>소유자</span>
              <ArrowDefaultIcon style={{ fill: '#000', width: '8px' }} />
            </div>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
              <div className='btn_dropdown'>
                <span>소유자</span>
                <ArrowDefaultIcon style={{ fill: '#000', width: '8px' }} />
              </div>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <div className='btn_dropdown btn_blue'>
              <span>콘텐츠 유형</span>
              <ArrowDefaultIcon style={{ fill: '#000', width: '8px' }} />
            </div>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
              <div className='btn_dropdown btn_blue'>
                <span>콘텐츠 유형</span>
                <ArrowDefaultIcon style={{ fill: '#000', width: '8px' }} />
              </div>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <div className='btn_dropdown btn_blue'>
              <span>노트</span>
              <CloseDefaultIcon style={{ fill: '#000', width: '8px' }} />
            </div>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
              <div className='btn_dropdown btn_blue'>
                <span>노트</span>
                <CloseDefaultIcon style={{ fill: '#000', width: '8px' }} />
              </div>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <div className='wrapper d-flex justify-content-center gap-5 m-50'>
        <div className='columns'>
          <div className='column'>
            <div className='select'>
              <select>
                <option value=''>텍스트1</option>
                <option value=''>텍스트2</option>
                <option value=''>텍스트3</option>
              </select>
              <ArrowDefaultIcon style={{ fill: '#000', width: '8px' }} />
            </div>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
          <div className='select'>
            <select>
              <option value=''>텍스트1</option>
              <option value=''>텍스트2</option>
              <option value=''>텍스트3</option>
            </select>
            <ArrowDefaultIcon style={{ fill: '#000', width: '8px' }} />
          </div>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

      <div className='wrapper d-flex justify-content-center gap-1 m-50 '>
        <div className='columns'>
          <div className='column'>
            <div className='searchBox_type01'>
              <SearchIcon
                className='searchIcon'
                style={{ stroke: '#8b8e95' }}
              />
              <input type='search' placeholder='전체에서 검색' />
            </div>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
          <div className='searchBox_type01'>
            <SearchIcon className='searchIcon' style={{ stroke: '#8b8e95' }} />
            <input type='search' placeholder='전체에서 검색' />
          </div>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <div className='searchBox_type02'>
              <SearchIcon
                className='searchIcon'
                style={{ stroke: '#8b8e95' }}
              />
              <input type='search' placeholder='파일에서 찾기' />
            </div>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
          <div className='searchBox_type02'>
            <SearchIcon className='searchIcon' style={{ stroke: '#8b8e95' }} />
            <input type='search' placeholder='파일에서 찾기' />
          </div>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <div className='wrapper d-flex justify-content-center gap-5 m-50 '>
        <div className='columns'>
          <div className='column'>
            <div className='check'>
              <label htmlFor='check01'>
                <input type='checkbox' id='check01' />
                <span></span>
              </label>
            </div>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
          <div className='check'>
            <label htmlFor='check01'>
              <input type='checkbox' id='check01' />
              <span></span>
            </label>
          </div>
              `}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <div className='wrapper d-flex justify-content-center gap-5 m-50 '>
        <div className='columns'>
          <div className='column'>
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
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
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
              `}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </StyledBox>
  );
};

export default Formfiled;

const StyledBox = styled.div``;
