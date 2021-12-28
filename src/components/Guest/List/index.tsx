import React, { useState } from 'react';

import {
  IcPaginatorFirst,
  IcPaginatorLast,
  IcPaginatorNext,
  IcPaginatorPrevious,
} from '../../common/Icons';
import { Paginator, Wrapper, Letters, FlexContainer, Empty } from './style';
import useLetter from '../../../hooks/useLetters';
import Loader from '../../common/Loader';
import GuestItem from './Item';
import ModeSwitcher from './ModeSwitcher';

function GuestList() {
  const [pageIndex, setPageIndex] = useState(0);
  const [mode, setMode] = useState<10 | 5>(10);
  const [openItem, setOpenItem] = useState<Number | null>(null);

  const { data, error } = useLetter({ mode: mode, page: pageIndex });
  const setSquareMode = () => {
    setMode(5);
    setPageIndex(0);
  };
  const setLinearMode = () => {
    setMode(10);
    setPageIndex(0);
  };
  if (error) return <Wrapper>에러 발생</Wrapper>;

  if (!data)
    return (
      <Wrapper>
        <Loader />å
      </Wrapper>
    );

  const { letters, lettersCount } = data;

  return (
    <Wrapper>
      <ModeSwitcher mode={mode} setLinearMode={setLinearMode} setSquareMode={setSquareMode} />
      {letters.length ? (
        <Letters mode={mode}>
          <FlexContainer mode={mode}>
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
          </FlexContainer>
        </Letters>
      ) : (
        <Empty>
          앗, 도착한 편지가 없나 봐요. <br />첫 번째 편지를 남겨 주세요.
        </Empty>
      )}
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
              color: index === pageIndex ? 'white' : '#8eaec9',
              fontFamily:
                index === pageIndex ? 'NEXON Lv1 Gothic OTF Bold' : 'NEXON Lv1 Gothic OTF',
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
