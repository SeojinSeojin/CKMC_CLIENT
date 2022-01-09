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
  const { isGuestSmall } = useResponsive();
  return (
    <TableItem>
      <Cover onClick={onClick}>
        <div>{index}번째 편지</div>
        <div>{title}</div>
        <div>{parseDate(createdAt)}</div>
        <div>{sender}</div>
        {!isGuestSmall && (isOpened ? <IcToggleUp /> : <IcToggleDown />)}
      </Cover>
      {isOpened && (
        <Detail>
          {file && <img src={file} alt={title} />}
          <div>{body}</div>
        </Detail>
      )}
    </TableItem>
  );
}

export default GuestItemLinear;
