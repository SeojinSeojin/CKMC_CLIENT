import React from 'react';
import { parseDate } from '../../../../../utils/parseDate';
import { SquareItem, Header, Title, Sender, Body } from './style';

interface IGuestItem extends LetterData {
  index: number;
}

function GuestItemSquare({ title, body, sender, file, createdAt, index }: IGuestItem) {
  const bodies = body
    .replace('\\n', '\n')
    .split('\n')
    .map((line, idx) => <p key={idx}>{line}</p>);
  return (
    <SquareItem>
      <Header>
        <div>{index}번째 편지</div>
        <div>{parseDate(createdAt)}</div>
      </Header>
      <Title>{title}</Title>
      {file && <img src={file} alt={title} />}
      <Body>{bodies}</Body>
      <Sender>{sender}</Sender>
    </SquareItem>
  );
}

export default GuestItemSquare;
