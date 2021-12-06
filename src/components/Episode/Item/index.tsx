import React from 'react';
import { ThumbnailImage, Wrapper, Title, TitleWrapper, EditButton } from './style';

function EpisodeItem({
  thumbnail,
  title,
  isEditable,
  index,
  authorName,
}: {
  thumbnail: string;
  title: string;
  isEditable: boolean;
  index: number;
  authorName: string;
}) {
  return (
    <Wrapper to={`episode/${authorName}/${index}`}>
      <ThumbnailImage src={thumbnail} alt={`${title} thumbnail`} />
      <TitleWrapper>
        <Title>{title}</Title>
        {isEditable && <EditButton>수정</EditButton>}
      </TitleWrapper>
    </Wrapper>
  );
}

export default EpisodeItem;
