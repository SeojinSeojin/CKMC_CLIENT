import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import CursorContainer from '../../components/common/Cursor';
import SelectedHashTags from '../../components/common/MyPage/SelectedHashTags';
import NavigationBar from '../../components/common/NavigationBar';
import EpisodeContainer from '../../components/Episode/Container';
import AuthorLayout from '../../components/layout/Author';
import { getFetcher } from '../../utils/fetchers';
import { Description, Title, Footer, Image } from './style';
import emptyBox from '../../components/common/Icons/ic-empty-box.svg';
import useResponsive from '../../hooks/useResponsive';

export default function AuthorPage() {
  const { authorId }: { authorId: string } = useParams();
  const history = useHistory();
  const [author, setAuthor] = useState<AuthorData | null>(null);
  const { isSmall, isSmallMiddle } = useResponsive();

  useEffect(() => {
    const getAuthorInfo = async () => {
      try {
        const authorData = await getFetcher(`/api/author/${authorId}`);
        setAuthor(authorData);
      } catch (e) {
        history.replace('/');
      }
    };
    getAuthorInfo();
  }, [authorId, history]);

  return (
    <>
      {!(isSmall || isSmallMiddle) && <CursorContainer theme="blue" />}
      <NavigationBar theme="blue" selected="WORKS" />

      {author && (
        <AuthorLayout>
          <div>
            <Image
              src={
                author.work.thumbnail === 'https://via.placeholder.com/250'
                  ? emptyBox
                  : author.work.thumbnail
              }
              isSmall={isSmall || isSmallMiddle}
              alt="thumbnail"
            />
            <Title isSmall={isSmall || isSmallMiddle}>{author.work.title}</Title>
            <Description isSmall={isSmall || isSmallMiddle}>{author.work.description}</Description>
            {author.work.hashTags && <SelectedHashTags hashTags={author.work.hashTags} />}
            <Footer isSmall={isSmall || isSmallMiddle}>
              <div>{author.nickName}</div>
              <div>{author.contact}</div>
            </Footer>
          </div>
          <div>
            <EpisodeContainer episodes={author.work.episodes} isEditable={false} />
          </div>
        </AuthorLayout>
      )}
    </>
  );
}
