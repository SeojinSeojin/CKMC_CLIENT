import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CursorContainer from '../../components/common/Cursor';
import NavigationBar from '../../components/common/NavigationBar';
import WorkItem from '../../components/Work/Item';
import WorkSearchBar from '../../components/Work/SearchBar';
import { useWorks } from '../../hooks/useWorks';
import { WorkData } from '../../types';

interface IWorkContainer {
  isNavOpened: boolean;
}
const WorkContainer = styled.div<IWorkContainer>`
  display: flex;
  flex-wrap: wrap;
  padding-right: 40px;
  padding-left: 40px;
  gap: 12px;
  justify-content: center;
  width: 100%;
  margin-top: 180px;
  ${({ isNavOpened }) => (isNavOpened ? 'padding-right: 400px' : '')}
`;

const Title = styled.div<IWorkContainer>`
  width: 100%;
  text-align: center;
  top: 120px;
  color: #2454a6;
  font-size: 24px;
  position: sticky;
  z-index: 100;
  ${({ isNavOpened }) => (isNavOpened ? 'padding-right: 400px' : '')}
`;

export default function WorksPage() {
  const [hashTags, setHashTags] = useState<string[]>([]);
  const [authorFirstName, setAuthorFirstName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [workTitle, setWorkTitle] = useState('');
  const [isNavOpened, setIsNavOpened] = useState(true);
  const { worksData } = useWorks({ hashTags, authorFirstName, authorName, workTitle });

  return (
    <>
      <CursorContainer theme="blue" />
      <NavigationBar theme="blue" selected="WORKS" />

      {worksData && (
        <>
          <Title isNavOpened={isNavOpened}>CKMC 크리에이티브 페어 2022</Title>
          <WorkContainer isNavOpened={isNavOpened}>
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
        </>
      )}
      {isNavOpened && (
        <WorkSearchBar
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
        />
      )}
    </>
  );
}
