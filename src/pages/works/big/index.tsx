import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../components/common/Loader';
import CursorContainer from '../../../components/common/Cursor';
import NavigationBar from '../../../components/common/NavigationBar';
import WorkItem from '../../../components/Work/Item/big';
import WorkSearchBar from '../../../components/Work/SearchBar';
import { useWorks } from '../../../hooks/useWorks';
import {
  WorkContainer,
  CenterContainer,
  Wrapper,
  FlexContainer,
  Title,
  EmptyWrapper,
} from './style';
import VerticalCenterLayout from '../../../components/layout/VerticalCenter';

export default function WorkBig() {
  const [hashTags, setHashTags] = useState<string[]>([]);
  const [authorFirstName, setAuthorFirstName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [workTitle, setWorkTitle] = useState('');
  const [isNavOpened, setIsNavOpened] = useState(true);
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
  const [animation, setAnimation] = useState<'' | 'close' | 'initial'>('initial');

  return (
    <>
      <CursorContainer theme="blue" />
      <NavigationBar theme="blue" selected="WORKS" />

      {isValidating ? (
        <Wrapper isNavOpened={isNavOpened} animation={animation}>
          <VerticalCenterLayout>
            <Loader />
          </VerticalCenterLayout>
        </Wrapper>
      ) : (
        <Wrapper isNavOpened={isNavOpened} animation={animation}>
          <Title>CKMC 크리에이티브 페어 2022</Title>
          {worksData && worksData.length ? (
            <FlexContainer>
              <CenterContainer>
                <WorkContainer animation={animation}>
                  {worksData.map((work: WorkData) => (
                    <Link to={`/author/${work.authorName}`} key={work.authorName}>
                      <WorkItem
                        title={work.title}
                        authorName={work.authorName}
                        thumbnail={work.thumbnail}
                        hashTags={work.hashTags}
                        description={work.description}
                        episodes={work.episodes}
                      />
                    </Link>
                  ))}
                </WorkContainer>
              </CenterContainer>
            </FlexContainer>
          ) : (
            <EmptyWrapper>
              앗, 도착한 편지가 없나 봐요. <br />
              다른 검색어를 입력해 주세요.
            </EmptyWrapper>
          )}
        </Wrapper>
      )}

      <WorkSearchBar
        animation={animation}
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
        toggleIsNavOpened={toggleIsNavOpened}
        isNavOpened={isNavOpened}
      />
    </>
  );
}
