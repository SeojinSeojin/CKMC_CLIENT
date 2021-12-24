import React from 'react';
import { IcNineteen } from '../../../common/Icons';
import { Wrapper } from './style';

function WorkItem({ thumbnail, hashTags, title, authorName }: WorkData) {
  return (
    <Wrapper src={thumbnail}>
      {hashTags.includes('성인') && <IcNineteen />}
      <div>{title}</div>
      <div>{authorName}</div>
    </Wrapper>
  );
}

export default WorkItem;
