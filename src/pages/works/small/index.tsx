import React from 'react';
import Loader from '../../../components/common/Loader';
import NavigationBar from '../../../components/common/NavigationBar';
import VerticalCenterLayout from '../../../components/layout/VerticalCenter';
import WorkItem from '../../../components/Work/Item/small';
import { useWorks } from '../../../hooks/useWorks';
import { shuffle } from '../../../utils/array';
import { EmptyWrapper, GridContainer, Wrapper } from './style';

function WorkSmall() {
  const { worksData, isValidating } = useWorks({ hashTags: [] });
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
            {shuffle(worksData).map((work: WorkData) => (
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
