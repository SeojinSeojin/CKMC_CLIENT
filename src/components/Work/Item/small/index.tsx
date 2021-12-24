import React from 'react';
import { IcNineteen } from '../../../common/Icons';
import { Wrapper } from './style';

function WorkItem({ thumbnail, hashTags, title, authorName }: WorkData) {
  return (
    <Wrapper to={`/author/${authorName}`}>
      <img src={thumbnail} alt={title} />
      <div>{title}</div>
      <div>{authorName}</div>
      {hashTags.includes('성인') && <IcNineteen />}
    </Wrapper>
  );
}

export default WorkItem;
