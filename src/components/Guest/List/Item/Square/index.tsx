import React from 'react';
import { parseDate } from '../../../../../utils/parseDate';
import { SquareItem, Header, Title, Sender, Body } from './style';

interface IGuestItem extends LetterData {
  index: number;
}

function GuestItemSquare({ title, body, sender, file, createdAt, index }: IGuestItem) {
  return (
    <SquareItem>
      <Header>
        <div>{index}번째 편지</div>
        <div>{parseDate(createdAt)}</div>
      </Header>
      <Title>{title}</Title>
      {file && <img src={file} alt={title} />}
      <Body>{body}</Body>
      <Sender>{sender}</Sender>
    </SquareItem>
  );
}

export default GuestItemSquare;
