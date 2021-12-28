import React from 'react';
import useResponsive from '../../../../hooks/useResponsive';
import { Tag, Wrapper } from './style';

function SelectedHashTags({ hashTags }: { hashTags: Array<string> }) {
  const { isSmall, isSmallMiddle } = useResponsive();
  return (
    <Wrapper isSmall={isSmall || isSmallMiddle}>
      {hashTags.length ? (
        hashTags.map((tag) => (
          <Tag key={tag} isSmall={isSmall || isSmallMiddle}>
            #{tag}
          </Tag>
        ))
      ) : (
        <div>해시태그를 선택해주세요</div>
      )}
    </Wrapper>
  );
}

export default SelectedHashTags;
