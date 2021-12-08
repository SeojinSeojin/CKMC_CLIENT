import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loader from '../../components/common/Loader';
import CursorContainer from '../../components/common/Cursor';
import SelectedHashTags from '../../components/common/MyPage/SelectedHashTags';
import NavigationBar from '../../components/common/NavigationBar';
import PageViewer from '../../components/Episode/PageViewer';
import ScrollViewer from '../../components/Episode/ScrollViewer';
import FlexCenterLayout from '../../components/layout/FlexCenter';
import { EpisodeData, AuthorData } from '../../types';
import { getFetcher } from '../../utils/fetchers';
import { urlEncoder } from '../../utils/urlEncoder';
import { AuthorDescription, FlexWrapper, EpisodeDescription, Header } from './style';
import PageNavigator from '../../components/Episode/PageNavigator';

function EpisodePage() {
  const { authorId, episodeIdx }: { authorId: string; episodeIdx: string } = useParams();
  const [episode, setEpisode] = useState<EpisodeData | null>(null);
  const [author, setAuthor] = useState<AuthorData | null>(null);

  useEffect(() => {
    const getEpisode = async () => {
      const response = await getFetcher(`/api/episode/${authorId}/${episodeIdx}`);
      setEpisode(response.episode);
      setAuthor(response.author);
    };
    getEpisode();
  }, [episodeIdx, authorId]);

  if (!episode || !author) return <Loader />;
  return (
    <>
      <CursorContainer theme="blue" />
      <NavigationBar theme="blue" selected="WORKS" />
      <FlexCenterLayout>
        <FlexWrapper>
          <Header>
            <div>{author.work.title}</div>
            <div>{episode.title}</div>
          </Header>
          {episode.pages && episode.viewMethod === 'page' ? (
            <PageViewer
              pages={episode.pages
                .sort((a, b) => a.index - b.index)
                .map((page) => urlEncoder(page.remotePath))}
            />
          ) : (
            episode.pages && (
              <ScrollViewer
                pages={episode.pages
                  .sort((a, b) => a.index - b.index)
                  .map((page) => urlEncoder(page.remotePath))}
              />
            )
          )}
          <EpisodeDescription>{episode.description}</EpisodeDescription>
          <AuthorDescription>
            <div>{author.nickName}</div>
            <div>
              {author.work.hashTags && <SelectedHashTags hashTags={author.work.hashTags} />}
            </div>
            <PageNavigator
              totalPage={author.work.episodes.length}
              currentPage={episode.index}
              authorName={author.nickName}
            />
          </AuthorDescription>
        </FlexWrapper>
      </FlexCenterLayout>
    </>
  );
}

export default EpisodePage;
