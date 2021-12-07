import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../../hooks/useUser';
import { deleteFetcher } from '../../../utils/fetchers';
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
  const history = useHistory();
  const { mutate } = useUser();
  const moveToDetail = () => {
    const path = viewMethod === 'link' && link ? link : `/author/${authorName}/${index}`;
    window.location.href = path;
  };
  const deleteItem = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    const deleteResponse = await deleteFetcher(`/api/episode/${index}`);
    if (deleteResponse.ok) {
      const authorAfterDelete = deleteResponse.json();
      mutate(authorAfterDelete);
    }
    history.go(0);
  };
  return (
    <Wrapper onClick={moveToDetail}>
      <ThumbnailImage src={thumbnail} alt={`${title} thumbnail`} />
      <TitleWrapper>
        <Title>{title}</Title>
        {isEditable && (
          <Editors>
            <button>수정</button>
            <button onClick={(e) => deleteItem(e, index)}>삭제</button>
          </Editors>
        )}
      </TitleWrapper>
    </Wrapper>
  );
}

export default EpisodeItem;
