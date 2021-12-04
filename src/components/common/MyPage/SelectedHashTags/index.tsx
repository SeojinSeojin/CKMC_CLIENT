import React from 'react';
import { Tag, Wrapper } from './style';

function SelectedHashTags({ hashTags }: { hashTags: Array<string> }) {
  return (
    <Wrapper>
      {hashTags.length ? (
        hashTags.map((tag) => <Tag key={tag}>#{tag}</Tag>)
      ) : (
        <div>해쉬태그를 선택해주세요</div>
      )}
    </Wrapper>
  );
}

export default SelectedHashTags;
