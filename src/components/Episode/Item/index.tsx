import React from 'react';
import { ThumbnailImage, Wrapper, Title, TitleWrapper, Editors } from './style';

function EpisodeItem({
  thumbnail,
  title,
  isEditable,
  index,
  authorName,
  viewMethod,
  link,
}: {
  thumbnail: string;
  title: string;
  isEditable: boolean;
  index: number;
  authorName: string;
  viewMethod: string;
  link: undefined | string;
}) {
  const moveToDetail = () => {
    const path = viewMethod === 'link' && link ? link : `/author/${authorName}/${index}`;
    window.location.href = path;
  };
  return (
    <Wrapper onClick={moveToDetail}>
      <ThumbnailImage src={thumbnail} alt={`${title} thumbnail`} />
      <TitleWrapper>
        <Title>{title}</Title>
        {isEditable && (
          <Editors>
            <button>수정</button>
            <button>삭제</button>
          </Editors>
        )}
      </TitleWrapper>
    </Wrapper>
  );
}

export default EpisodeItem;
