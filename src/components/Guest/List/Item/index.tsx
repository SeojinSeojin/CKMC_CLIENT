import React, { MouseEventHandler } from 'react';
import GuestItemLinear from './Linear';
import GuestItemSquare from './Square';

interface IGuestItem extends LetterData {
  index: number;
  mode: number;
  isOpened: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

function GuestItem({
  title,
  body,
  sender,
  file,
  createdAt,
  mode,
  index,
  isOpened,
  onClick,
}: IGuestItem) {
  if (mode === 10)
    return (
      <GuestItemLinear
        title={title}
        body={body}
        sender={sender}
        file={file}
        createdAt={createdAt}
        index={index}
        isOpened={isOpened}
        onClick={onClick}
      />
    );
  return (
    <GuestItemSquare
      title={title}
      body={body}
      sender={sender}
      file={file}
      createdAt={createdAt}
      index={index}
    />
  );
}

export default GuestItem;
