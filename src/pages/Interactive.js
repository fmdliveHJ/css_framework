import React, { useEffect } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Prism from 'prismjs';
const Interactive = ({ language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <div className='wrapper d-flex justify-content-center gap-1 m-50'>
        TBD
      </div>
    </>
  );
};

export default Interactive;
