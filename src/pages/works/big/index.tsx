import React, { useEffect, useState } from 'react';
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
import { shuffle } from '../../../utils/array';

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

  const [displayWorksData, setDisplayWorksData] = useState<Array<WorkData>>([]);
  useEffect(() => {
    if (worksData) setDisplayWorksData(shuffle(worksData));
  }, [worksData]);

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
          <Title>CKMC ?????????????????? ?????? 2022</Title>
          {worksData && worksData.length ? (
            <FlexContainer>
              <CenterContainer>
                <WorkContainer animation={animation}>
                  {displayWorksData.map((work: WorkData) => (
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
              ???, ????????? ????????? ?????? ??????. <br />
              ?????? ???????????? ????????? ?????????.
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
