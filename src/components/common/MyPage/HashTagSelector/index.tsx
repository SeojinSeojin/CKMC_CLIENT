import React from 'react';
import { HASHTAGS } from '../../../../utils/HASHTAGS';
import { Tag, Container, Wrapper, Warning } from './style';

function HashTagSelector({
  onHashTagClick,
  hashTags,
}: {
  onHashTagClick: (tag: string) => void;
  hashTags: Array<string>;
}) {
  return (
    <Wrapper>
      <Container>
        <div>소재/장르별 해시태그</div>
        <div>
          {HASHTAGS.BY_GENRE.map((tag) => (
            <Tag key={tag} isSelected={hashTags.includes(tag)} onClick={() => onHashTagClick(tag)}>
              #{tag}
            </Tag>
          ))}
        </div>
      </Container>
      <Container>
        <div>작품형식별 해시태그</div>
        <div>
          {HASHTAGS.BY_TYPE.map((tag) => (
            <Tag key={tag} isSelected={hashTags.includes(tag)} onClick={() => onHashTagClick(tag)}>
              #{tag}
            </Tag>
          ))}
        </div>
        <Warning>최대 5개까지 선택 가능</Warning>
      </Container>
    </Wrapper>
  );
}

export default HashTagSelector;
