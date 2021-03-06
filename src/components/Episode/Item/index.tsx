import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import useResponsive from '../../../hooks/useResponsive';
import { useUser } from '../../../hooks/useUser';
import { deleteFetcher } from '../../../utils/fetchers';
import { ThumbnailImage, Wrapper, Title, TitleWrapper, Editors } from './style';

interface EpisodeItemProps {
  thumbnail: string;
  title: string;
  isEditable: boolean;
  index: number;
  authorName: string;
  viewMethod: string;
  link: undefined | string;
}

function EpisodeItem(props: EpisodeItemProps) {
  const { thumbnail, title, isEditable, index, authorName, viewMethod, link } = props;
  const history = useHistory();
  const { mutate } = useUser();
  const { isSmall, isSmallMiddle, isBigMiddle, isBig } = useResponsive();
  const moveToDetail = () => {
    const path = viewMethod === 'link' && link ? link : `/author/${authorName}/${index}`;
    window.location.href = path;
  };
  const moveToEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
    e.stopPropagation();
    history.push(`/mypage/edit/${index}`);
  };
  const deleteItem = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    const deletePromise = new Promise((resolve, reject) => {
      deleteFetcher(`/api/episode/${index}`).then((res) => {
        if (res.ok) {
          const authorAfterDelete = res.json();
          mutate(authorAfterDelete);
          resolve('삭제 성공');
        } else reject('삭제 실패');
      });
    });
    toast.promise(deletePromise, {
      pending: '삭제 중입니다. \n버튼을 다시 누르지 마시고 조금만 기다려주세요.',
      success: '삭제에 성공했습니다',
      error: '삭제에 실패했습니다. 다시 시도해주세요',
    });
  };
  return (
    <Wrapper
      onClick={moveToDetail}
      isSmall={isSmall}
      isSmallMiddle={isSmallMiddle}
      isBig={isBig}
      isBigMiddle={isBigMiddle}
    >
      <ThumbnailImage
        src={thumbnail}
        alt={title}
        isSmall={isSmall}
        isSmallMiddle={isSmallMiddle}
        isBigMiddle={isBigMiddle}
      />
      <TitleWrapper isSmall={isSmall} isSmallMiddle={isSmallMiddle} isBigMiddle={isBigMiddle}>
        <Title isSmall={isSmall} isSmallMiddle={isSmallMiddle}>
          {title}
        </Title>
        {isEditable && (
          <Editors>
            <button onClick={(e) => moveToEdit(e, index)}>수정</button>
            <button onClick={(e) => deleteItem(e, index)}>삭제</button>
          </Editors>
        )}
      </TitleWrapper>
    </Wrapper>
  );
}

export default EpisodeItem;
