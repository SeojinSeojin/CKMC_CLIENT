import React from 'react';
import { WorkData } from '../../../types';
import { IcNineteen } from '../../common/Icons';
import { Wrapper } from './style';

function WorkItem(props: WorkData) {
  return (
    <Wrapper src={props.thumbnail}>
      {props.hashTags.includes('성인') ?? <IcNineteen />}
      <div>{props.title}</div>
      <div>{props.authorName}</div>
    </Wrapper>
  );
}

export default WorkItem;
