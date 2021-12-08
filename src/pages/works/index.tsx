import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/common/Loader';
import styled from 'styled-components';
import CursorContainer from '../../components/common/Cursor';
import NavigationBar from '../../components/common/NavigationBar';
import WorkItem from '../../components/Work/Item';
import WorkSearchBar from '../../components/Work/SearchBar';
import { useWorks } from '../../hooks/useWorks';
import { WorkData } from '../../types';

interface IWorkContainer {
  isNavOpened?: boolean;
  animation: '' | 'close';
}
const WorkContainer = styled.div<IWorkContainer>`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  width: min(1500px, 100vw - 400px);
  margin-top: 180px;
`;

const Wrapper = styled.div<IWorkContainer>`
  animation: 0.4s linear ${({ animation }) => (animation === '' ? 'shorten' : 'extend')};
  ${({ animation }) => (animation === '' ? 'padding-right: 400px' : '')};

  @keyframes shorten {
    from {
      padding-right: 0;
    }
    to {
      padding-right: 400px;
    }
  }
  @keyframes extend {
    from {
      padding-right: 400px;
    }
    to {
      padding-right: 0;
    }
  }
`;

const FlexContainer = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  top: 120px;
  color: #2454a6;
  font-size: 24px;
  position: sticky;
  z-index: 100;
`;

export default function WorksPage() {
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
  const [animation, setAnimation] = useState<'' | 'close'>('');

  if (isValidating) return <Loader />;
  return (
    <>
      <CursorContainer theme="blue" />
      <NavigationBar theme="blue" selected="WORKS" />

      {worksData && (
        <Wrapper isNavOpened={isNavOpened} animation={animation}>
          <Title>CKMC 크리에이티브 페어 2022</Title>
          <FlexContainer>
            <WorkContainer animation={animation}>
              {worksData.map((work: WorkData) => (
                <Link to={`/author/${work.authorName}`}>
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
          </FlexContainer>
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
