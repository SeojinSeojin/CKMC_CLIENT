import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { IcAllEpisodes, IcArrowNext, IcArrowPrevious } from '../../common/Icons';

function PageNavigator({
  currentPage,
  totalPage,
  authorName,
}: {
  currentPage: number;
  totalPage: number;
  authorName: string;
}) {
  const history = useHistory();
  const movePrevious = () => {
    if (currentPage === 0) return;
    history.push(`/author/${authorName}/${currentPage - 1}`);
    window.scrollTo(0, 0);
  };
  const moveNext = () => {
    if (currentPage === totalPage - 1) return;
    history.push(`/author/${authorName}/${currentPage + 1}`);
    window.scrollTo(0, 0);
  };
  const moveBack = () => {
    history.push(`/author/${authorName}`);
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper>
      <Button disabled={currentPage === 0} onClick={movePrevious}>
        <IcArrowPrevious />
      </Button>
      <Button disabled={false} onClick={moveBack}>
        <IcAllEpisodes />
      </Button>
      <Button disabled={currentPage === totalPage - 1} onClick={moveNext}>
        <IcArrowNext />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

interface IButton {
  disabled: boolean;
}
const Button = styled.div<IButton>`
  ${({ disabled }) =>
    disabled
      ? ''
      : `  & svg {
    &:hover {
      cursor: pointer;
      & path {
        stroke: #2454a6;
        stroke-width: 2.5;
      }
    }
  }`}
`;

export default PageNavigator;
