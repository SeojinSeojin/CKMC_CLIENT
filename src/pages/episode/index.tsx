import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import Loader from '../../components/common/Loader';
import CursorContainer from '../../components/common/Cursor';
import SelectedHashTags from '../../components/common/MyPage/SelectedHashTags';
import NavigationBar from '../../components/common/NavigationBar';
import PageViewer from '../../components/Episode/PageViewer';
import ScrollViewer from '../../components/Episode/ScrollViewer';
import FlexCenterLayout from '../../components/layout/FlexCenter';
import { getFetcher } from '../../utils/fetchers';
import { urlEncoder } from '../../utils/urlEncoder';
import { AuthorDescription, FlexWrapper, EpisodeDescription, Header } from './style';
import PageNavigator from '../../components/Episode/PageNavigator';
import VerticalCenterLayout from '../../components/layout/VerticalCenter';
import useResponsive from '../../hooks/useResponsive';
import EpisodeComment from '../../components/Episode/Comment';

function EpisodePage() {
  const { authorId, episodeIdx }: { authorId: string; episodeIdx: string } = useParams();
  const [episode, setEpisode] = useState<EpisodeData | null>(null);
  const [author, setAuthor] = useState<AuthorData | null>(null);
  const { isSmall, isSmallMiddle } = useResponsive();
  const history = useHistory();

  useEffect(() => {
    const getEpisode = async () => {
      try {
        const response = await getFetcher(`/api/episode/${authorId}/${episodeIdx}`);
        setEpisode(response.episode);
        setAuthor(response.author);
        document.title = `CKMC 2022 - ${response.author.nickName}`;
      } catch (e) {
        history.replace('/');
      }
    };
    getEpisode();
  }, [episodeIdx, authorId]);

  if (!episode || !author)
    return (
      <VerticalCenterLayout>
        <Loader />
      </VerticalCenterLayout>
    );
  return (
    <>
      {!(isSmall || isSmallMiddle) && <CursorContainer theme="blue" />}
      <NavigationBar theme="blue" selected="WORKS" />
      <FlexCenterLayout>
        <FlexWrapper isSmall={isSmall} isSmallMiddle={isSmallMiddle}>
          <Header isSmall={isSmall} isSmallMiddle={isSmallMiddle}>
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
          <EpisodeDescription isSmall={isSmall} isSmallMiddle={isSmallMiddle}>
            {episode.description}
          </EpisodeDescription>
          <AuthorDescription isSmall={isSmall} isSmallMiddle={isSmallMiddle}>
            <div>{author.nickName}</div>
            <div>
              {author.work.hashTags && <SelectedHashTags hashTags={author.work.hashTags} />}
            </div>
            {!(isSmall || isSmallMiddle) && (
              <PageNavigator
                totalPage={author.work.episodes.length}
                currentPage={episode.index}
                authorName={author.nickName}
              />
            )}
          </AuthorDescription>
          <EpisodeComment authorName={author.nickName} episodeIndex={+episodeIdx} />
        </FlexWrapper>
      </FlexCenterLayout>
    </>
  );
}

export default EpisodePage;
