import React, { MouseEventHandler } from 'react';
import { TableItem, Detail, Cover } from './style';
import { parseDate } from '../../../../../utils/parseDate';
import { IcToggleDown, IcToggleUp } from '../../../../common/Icons';
import useResponsive from '../../../../../hooks/useResponsive';

interface IGuestItem extends LetterData {
  index: number;
  isOpened: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

function GuestItemLinear({
  title,
  body,
  sender,
  file,
  createdAt,
  index,
  isOpened,
  onClick,
}: IGuestItem) {
  const bodies = body
    .replace('\\n', '\n')
    .split('\n')
    .map((line, idx) => <p key={idx}>{line}</p>);
  const lines = bodies.length;
  [...Array(8 - lines)].forEach((_, idx) => bodies.push(<p key={8 + idx - lines}></p>));
  const { isGuestSmall } = useResponsive();
  return (
    <TableItem onClick={onClick}>
      <Cover>
        <div>{index}번째 편지</div>
        <div>{title}</div>
        <div>{parseDate(createdAt)}</div>
        <div>{sender}</div>
        {!isGuestSmall && (isOpened ? <IcToggleUp /> : <IcToggleDown />)}
      </Cover>
      {isOpened && (
        <Detail>
          {file && <img src={file} alt={title} />}
          <div>{bodies}</div>
        </Detail>
      )}
    </TableItem>
  );
}

export default GuestItemLinear;
