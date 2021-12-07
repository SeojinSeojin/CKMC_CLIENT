import React from 'react';
import { Wrapper } from './style';

function ScrollViewer({ pages }: { pages: Array<string> }) {
  return (
    <Wrapper>
      {pages.map((page, idx) => (
        <img src={page} alt={`${idx}`} key={idx} />
      ))}
    </Wrapper>
  );
}

export default ScrollViewer;
