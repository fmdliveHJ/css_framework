import React, { useEffect, useRef } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Prism from 'prismjs';
// import Button from '../components/Button/Button';
// import Input from '../components/Input/Input';
// import InputWrapper from '../components/Input/InputWrap';
// import { Dropdown } from '../components/Dropdown';

import { Button } from 'baro_css_styled/lib/components/Button';
import { Input } from 'baro_css_styled/lib/components/Input';
import InputWrapper from 'baro_css_styled/lib/components/Input/InputWrap';
import { Dropdown } from 'baro_css_styled/lib/components/Dropdown';

import { ReactComponent as Ex02 } from '../assets/images/contents/ico_ex02.svg';
const ComponentGuide = ({ language }) => {
  const onCopyClick = (e) => {
    const preCodeText = e.target.previousElementSibling.textContent;
    navigator.clipboard
      .writeText(preCodeText)
      .then(() => {
        console.log(`Copy Text: ${preCodeText}`);
      })
      .catch((err) => {
        console.error('Failed Text: ', err);
      });
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <div className='wrapper d-flex justify-content-center gap-1 m-50'>
        <div className='columns'>
          <div className='column'>
            <Button className='big'>
              <i>
                <Ex02 fill='red' />
              </i>
              big
            </Button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
              
              import { Button } from 'baro_css_styled/lib/components/Button';
              function Example() {
                <Button className='big'>
                  <i>
                    <Ex02 fill='red' />
                  </i>
                  big
                </Button>
              }
              export default Example;
              `}
            </SyntaxHighlighter>
            <button onClick={onCopyClick} className='copyButton'>
              copy
            </button>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <Button className='large'>large</Button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
               
                import { Button } from 'baro_css_styled/lib/components/Button';
                function Example() {
                  <Button className='large'>large</Button>
                }
                export default Example;
              `}
            </SyntaxHighlighter>
            <button onClick={onCopyClick} className='copyButton'>
              copy
            </button>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <Button className='middle'>middle</Button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
                
                import { Button } from 'baro_css_styled/lib/components/Button';
                function Example() {
                  <Button className='middle'>middle</Button>
                }
                export default Example;
              `}
            </SyntaxHighlighter>
            <button onClick={onCopyClick} className='copyButton'>
              copy
            </button>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <Button className='small'>small</Button>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
                
                import { Button } from 'baro_css_styled/lib/components/Button';
                function Example() {
                  <Button className='small'>small</Button>
                }
                export default Example;
              `}
            </SyntaxHighlighter>
            <button onClick={onCopyClick} className='copyButton'>
              copy
            </button>
          </div>
        </div>
      </div>
      <div className='wrapper d-flex justify-content-center gap-1 m-50'>
        <div className='columns'>
          <div className='column'>
            <Input className='btn_large ' />
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
              
              import { Input } from 'baro_css_styled/lib/components/Input';
              function Example() {
                <Input className='btn_large ' />
              }
              export default Example;
              `}
            </SyntaxHighlighter>
            <button onClick={onCopyClick} className='copyButton'>
              copy
            </button>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <Input className='btn_large disabled' />
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
              
              import { Input } from 'baro_css_styled/lib/components/Input';
              function Example() {
                <Input className='btn_large disabled' />
              }
              export default Example;
              `}
            </SyntaxHighlighter>
            <button onClick={onCopyClick} className='copyButton'>
              copy
            </button>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <InputWrapper
              wrapperClassName='inp_box invalid'
              inputClassName='btn_large'
            >
              <p>이미 등록된 닉네임 입니다</p>
            </InputWrapper>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`

              import InputWrapper from 'baro_css_styled/lib/components/Input/InputWrap';
              function Example() {
                <InputWrapper
                wrapperClassName='inp_box invalid'
                inputClassName='btn_large'
               >
                 <p>이미 등록된 닉네임 입니다</p>
               </InputWrapper>
              }
              export default Example;
              `}
            </SyntaxHighlighter>
            <button onClick={onCopyClick} className='copyButton'>
              copy
            </button>
          </div>
        </div>
      </div>
      <div className='wrapper d-flex justify-content-center gap-1 m-50'>
        <div className='columns'>
          <div className='column'>
            <Dropdown>
              <div className='dropdown_default'>
                <ul className='dropdown_list'>
                  <li className='folder'>
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
                  <li className='note'>
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
                  <li className='recording'>
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
            </Dropdown>
          </div>
          <div className='column'>
            <SyntaxHighlighter language='html' style={docco}>
              {`
              import React from 'react';
              import styled from 'styled-components';
              import { Dropdown } from 'baro_css_styled/lib/components/Dropdown';

              const Example = () => {
                return (

                  <Dropdown>
                    <div className='dropdown_default'>
                      <ul className='dropdown_list'>
                        <li className='folder'>
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
                        <li className='note'>
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
                        <li className='recording'>
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
                  </Dropdown>
                );
              };
              
              export default Example;
              `}
            </SyntaxHighlighter>
            <button onClick={onCopyClick} className='copyButton'>
              copy
            </button>
          </div>
        </div>
      </div>
      <div className='wrapper d-flex justify-content-center gap-1 m-50'></div>
    </>
  );
};

export default ComponentGuide;
