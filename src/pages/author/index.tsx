import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import CursorContainer from '../../components/common/Cursor';
import SelectedHashTags from '../../components/common/MyPage/SelectedHashTags';
import NavigationBar from '../../components/common/NavigationBar';
import EpisodeContainer from '../../components/Episode/Container';
import AuthorLayout from '../../components/layout/Author';
import { getFetcher } from '../../utils/fetchers';
import { Description, Title, Footer } from './style';

export default function AuthorPage() {
  const { authorId }: { authorId: string } = useParams();
  const history = useHistory();
  const [author, setAuthor] = useState<AuthorData | null>(null);

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
      <CursorContainer theme="blue" />
      <NavigationBar theme="blue" selected="WORKS" />

      {author && (
        <AuthorLayout>
          <div>
            <img
              src={
                author.work.thumbnail === 'https://via.placeholder.com/250'
                  ? 'https://via.placeholder.com/500'
                  : author.work.thumbnail
              }
              alt="thumbnail"
              style={{
                width: 500,
                height: 500,
                objectFit: 'cover',
              }}
            />
            <Title>{author.work.title}</Title>
            <Description>{author.work.description}</Description>
            {author.work.hashTags && <SelectedHashTags hashTags={author.work.hashTags} />}
            <Footer>
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
