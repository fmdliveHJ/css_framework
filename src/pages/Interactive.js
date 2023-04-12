import React, { useEffect } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Prism from 'prismjs';
// import Button from '../components/Button/Button';
import Button from 'baro_css_styled/lib/components/Button/Button';

const Interactive = ({ language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <div className='wrapper d-flex justify-content-center gap-1 m-50'>
        <Button className='big'>btn_big</Button>
      </div>
    </>
  );
};

export default Interactive;
