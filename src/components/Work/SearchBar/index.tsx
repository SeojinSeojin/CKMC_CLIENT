import React, { useEffect, useState } from 'react';
import useResponsive from '../../../hooks/useResponsive';
import { AUTHOR_FIRST_NAME, HASHTAGS } from '../../../utils/HASHTAGS';
import {
  BtnLeftArrowBig,
  BtnLeftArrowSmall,
  BtnRightArrowBig,
  BtnRightArrowSmall,
  IcSearch,
} from '../../common/Icons';
import {
  HashTag,
  Wrapper,
  HashTagContainer,
  SelectorTitle,
  SelectorWrapper,
  FirstName,
  FirstNameContainer,
  SearchTypeWrapper,
  SearchType,
  SearchInput,
  SearchInputContainer,
  SingleWrapper,
} from './style';

function WorkSearchBar({
  hashTags,
  authorFirstName,
  setHashTags,
  removeHashTag,
  setAuthorFirstName,
  setAuthorName,
  setWorkTitle,
  toggleIsNavOpened,
  animation,
  isNavOpened,
}: {
  hashTags: string[];
  authorFirstName: string;
  setHashTags: (tag: string) => void;
  removeHashTag: (tag: string) => void;
  setAuthorFirstName: (name: string) => void;
  setAuthorName: (name: string) => void;
  setWorkTitle: (title: string) => void;
  toggleIsNavOpened: () => void;
  isNavOpened: boolean;
  animation: '' | 'close' | 'initial';
}) {
  const [searchMode, setSearchMode] = useState<'title' | 'author'>('title');
  const [searchInput, setSearchInput] = useState<string>('');
  const toggleHashTag = (tag: string) => {
    hashTags.includes(tag) ? removeHashTag(tag) : setHashTags(tag);
  };

  const onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const finishSearchInput = () => {
    searchMode === 'title' ? setWorkTitle(searchInput) : setAuthorName(searchInput);
  };

  const { isSmall, isSmallMiddle } = useResponsive();

  useEffect(() => {
    setSearchInput('');
  }, [searchMode]);

  return isNavOpened ? (
    <Wrapper animation={animation}>
      {isSmall || isSmallMiddle ? (
        <BtnLeftArrowSmall onClick={toggleIsNavOpened} />
      ) : (
        <BtnLeftArrowBig onClick={toggleIsNavOpened} />
      )}
      <SelectorWrapper>
        <SearchTypeWrapper>
          <SearchType onClick={() => setSearchMode('title')} selected={searchMode === 'title'}>
            ????????????
          </SearchType>
          <SearchType onClick={() => setSearchMode('author')} selected={searchMode === 'author'}>
            ???????????????
          </SearchType>
        </SearchTypeWrapper>
        <SearchInputContainer>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              finishSearchInput();
            }}
          >
            <SearchInput
              type="text"
              placeholder="???????????? ??????????????????"
              onChange={onSearchInput}
              value={searchInput}
            />
          </form>
          <IcSearch onClick={finishSearchInput} />
        </SearchInputContainer>
      </SelectorWrapper>
      <SelectorWrapper>
        <SelectorTitle>??????/????????? ????????????</SelectorTitle>
        <HashTagContainer>
          {HASHTAGS.BY_GENRE.map((tag) => (
            <HashTag selected={hashTags.includes(tag)} key={tag} onClick={() => toggleHashTag(tag)}>
              #{tag}
            </HashTag>
          ))}
        </HashTagContainer>
      </SelectorWrapper>
      <SelectorWrapper>
        <SelectorTitle>??????????????? ????????????</SelectorTitle>
        <HashTagContainer>
          {HASHTAGS.BY_TYPE.map((tag) => (
            <HashTag selected={hashTags.includes(tag)} key={tag} onClick={() => toggleHashTag(tag)}>
              #{tag}
            </HashTag>
          ))}
        </HashTagContainer>
      </SelectorWrapper>
      <SelectorWrapper>
        <SelectorTitle>?????????</SelectorTitle>
        <FirstNameContainer>
          {AUTHOR_FIRST_NAME.map((firstName) => (
            <FirstName
              selected={authorFirstName === firstName}
              key={firstName}
              onClick={() => setAuthorFirstName(firstName)}
            >
              {firstName}
            </FirstName>
          ))}
        </FirstNameContainer>
      </SelectorWrapper>
    </Wrapper>
  ) : (
    <SingleWrapper>
      {isSmall || isSmallMiddle ? (
        <BtnRightArrowSmall onClick={toggleIsNavOpened} />
      ) : (
        <BtnRightArrowBig onClick={toggleIsNavOpened} />
      )}
    </SingleWrapper>
  );
}

export default WorkSearchBar;
