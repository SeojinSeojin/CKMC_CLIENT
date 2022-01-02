import React, { useEffect, useState } from 'react';
import Loader from '../../../components/common/Loader';
import NavigationBar from '../../../components/common/NavigationBar';
import VerticalCenterLayout from '../../../components/layout/VerticalCenter';
import WorkItem from '../../../components/Work/Item/small';
import WorkSearchBar from '../../../components/Work/SearchBar';
import { useWorks } from '../../../hooks/useWorks';
import { shuffle } from '../../../utils/array';
import { EmptyWrapper, GridContainer, Wrapper } from './style';

function WorkSmall() {
  const [hashTags, setHashTags] = useState<string[]>([]);
  const [authorFirstName, setAuthorFirstName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [workTitle, setWorkTitle] = useState('');
  const [isNavOpened, setIsNavOpened] = useState(false);
  const [animation, setAnimation] = useState<'' | 'close' | 'initial'>('initial');
  const { worksData, isValidating } = useWorks({
    hashTags,
    authorFirstName,
    authorName,
    workTitle,
  });
  const toggleIsNavOpened = () => {
    if (isNavOpened) {
      setAnimation('close');
      setTimeout(() => {
        setIsNavOpened((prev) => !prev);
      }, 400);
    } else {
      setAnimation('');
      setIsNavOpened((prev) => !prev);
    }
  };
  const [displayWorksData, setDisplayWorksData] = useState<Array<WorkData>>([]);
  useEffect(() => {
    if (worksData) setDisplayWorksData(shuffle(worksData));
  }, [worksData]);

  return (
    <>
      <NavigationBar theme="blue" selected="WORKS" />
      <Wrapper>
        {isValidating ? (
          <VerticalCenterLayout>
            <Loader />
          </VerticalCenterLayout>
        ) : worksData && worksData.length ? (
          <GridContainer>
            {displayWorksData.map((work: WorkData) => (
              <WorkItem
                key={work.authorName}
                title={work.title}
                authorName={work.authorName}
                thumbnail={work.thumbnail}
                hashTags={work.hashTags}
                description={work.description}
                episodes={work.episodes}
              />
            ))}
          </GridContainer>
        ) : (
          <EmptyWrapper>
            앗, 도착한 편지가 없나 봐요. <br />
            다른 검색어를 입력해 주세요.
          </EmptyWrapper>
        )}
      </Wrapper>
      <WorkSearchBar
        animation={animation}
        toggleIsNavOpened={toggleIsNavOpened}
        hashTags={hashTags}
        authorFirstName={authorFirstName}
        setHashTags={(tag: string) => {
          setHashTags((prev) => [...prev, tag]);
        }}
        setAuthorFirstName={(name: string) => setAuthorFirstName(name)}
        setAuthorName={(name: string) => setAuthorName(name)}
        setWorkTitle={(title: string) => setWorkTitle(title)}
        removeHashTag={(tag: string) => {
          setHashTags((prev) => prev.filter((prevTag) => prevTag !== tag));
        }}
        isNavOpened={isNavOpened}
      />
    </>
  );
}

export default WorkSmall;
