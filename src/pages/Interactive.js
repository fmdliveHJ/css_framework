import React, { useEffect } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Prism from 'prismjs';
const Interactive = ({ language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <SyntaxHighlighter language='html'>
        {`
        <button className='btn_middle btn_recording'>
         <span>녹음 시작</span>
          <div className='record_circle '>
          <div className='record_circle red'></div>
          <input/>
         </div>
        </button>
      `}
      </SyntaxHighlighter>
      <SyntaxHighlighter language='html'>
        {`
        <div class="columns">
          <div class="column">
            First column
          </div>
          <div class="column">
            Second column
          </div>
          <div class="column">
            Third column
          </div>
          <div class="column">
            Fourth column
          </div>
        </div>
      `}
      </SyntaxHighlighter>
    </>
  );
};

export default Interactive;
