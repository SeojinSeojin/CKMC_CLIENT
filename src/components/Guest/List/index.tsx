import React, { useState } from 'react';

import GuestItem from './Item';
import {
  IcPaginatorFirst,
  IcPaginatorLast,
  IcPaginatorNext,
  IcPaginatorPrevious,
} from '../../common/Icons';
import { Paginator, Wrapper, Letters } from './style';
import useLetter from '../../../hooks/useLetters';
import Loader from '../../common/Loader';

function GuestList() {
  const [pageIndex, setPageIndex] = useState(0);
  const [mode, setMode] = useState<10 | 5>(10);
  const [openItem, setOpenItem] = useState<Number | null>(null);

  const { data, error } = useLetter({ mode: mode, page: pageIndex });
  if (error) return <Wrapper>에러 발생</Wrapper>;
  if (!data)
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );

  const { letters, lettersCount } = data;
  return (
    <Wrapper>
      <Letters>
        {letters.map((letter: LetterData, index: number) => (
          <GuestItem
            onClick={() => {
              if (openItem === index) setOpenItem(null);
              else setOpenItem(index);
            }}
            key={index}
            index={
              (Math.floor(lettersCount / mode) - pageIndex + 1) * mode -
              index -
              mode +
              (lettersCount % mode)
            }
            mode={mode}
            body={letter.body}
            title={letter.title}
            sender={letter.sender}
            file={letter.file}
            createdAt={letter.createdAt}
            isOpened={openItem !== null ? index === openItem : false}
          />
        ))}
      </Letters>
      <Paginator>
        <IcPaginatorFirst
          onClick={() => {
            setPageIndex(0);
          }}
        />
        <IcPaginatorPrevious
          onClick={() => {
            setPageIndex((prev) => (prev - 1 < 0 ? prev : prev - 1));
          }}
        />
        {[...Array(Math.ceil(lettersCount / mode))].map((page, index) => (
          <div
            key={index}
            onClick={() => {
              setPageIndex(index);
            }}
            style={{
              color: 'white',
              fontWeight: index === pageIndex ? 'bold' : 'inherit',
            }}
          >
            {Math.ceil(lettersCount / mode) - index}
          </div>
        ))}
        <IcPaginatorNext
          onClick={() => {
            setPageIndex((prev) => (prev + 1 > Math.floor(lettersCount / mode) ? prev : prev + 1));
          }}
        />
        <IcPaginatorLast
          onClick={() => {
            setPageIndex(Math.floor(lettersCount / mode));
          }}
        />
      </Paginator>
    </Wrapper>
  );
}

export default GuestList;
