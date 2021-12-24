import React from 'react';
import Loader from 'react-spinners/PuffLoader';
import NavigationBar from '../../../components/common/NavigationBar';
import WorkItem from '../../../components/Work/Item/small';
import { useWorks } from '../../../hooks/useWorks';
import { EmptyWrapper, GridContainer, Title, Wrapper } from './style';

function WorkSmall() {
  const { worksData, isValidating } = useWorks({ hashTags: [] });
  return (
    <>
      <NavigationBar theme="blue" selected="WORKS" />
      <Wrapper>
        <Title>CKMC 크리에이티브 페어 2022</Title>
        {isValidating ? (
          <Loader />
        ) : worksData && worksData.length ? (
          <GridContainer>
            {worksData.map((work: WorkData) => (
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
    </>
  );
}

export default WorkSmall;
