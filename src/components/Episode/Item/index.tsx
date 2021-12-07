import React from 'react';
import { ThumbnailImage, Wrapper, Title, TitleWrapper, EditButton } from './style';

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
        {isEditable && <EditButton>수정</EditButton>}
      </TitleWrapper>
    </Wrapper>
  );
}

export default EpisodeItem;
