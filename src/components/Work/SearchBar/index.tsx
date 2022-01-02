import React, { useEffect, useState } from 'react';
import { AUTHOR_FIRST_NAME, HASHTAGS } from '../../../utils/HASHTAGS';
import { BtnLeftArrowBig, BtnRightArrowBig, IcSearch } from '../../common/Icons';
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

  useEffect(() => {
    setSearchInput('');
  }, [searchMode]);

  return isNavOpened ? (
    <Wrapper animation={animation}>
      <BtnLeftArrowBig onClick={toggleIsNavOpened} />
      <SelectorWrapper>
        <SelectorTitle>소재/장르별 해시태그</SelectorTitle>
        <HashTagContainer>
          {HASHTAGS.BY_GENRE.map((tag) => (
            <HashTag selected={hashTags.includes(tag)} key={tag} onClick={() => toggleHashTag(tag)}>
              #{tag}
            </HashTag>
          ))}
        </HashTagContainer>
      </SelectorWrapper>
      <SelectorWrapper>
        <SelectorTitle>작품형식별 해시태그</SelectorTitle>
        <HashTagContainer>
          {HASHTAGS.BY_TYPE.map((tag) => (
            <HashTag selected={hashTags.includes(tag)} key={tag} onClick={() => toggleHashTag(tag)}>
              #{tag}
            </HashTag>
          ))}
        </HashTagContainer>
      </SelectorWrapper>
      <SelectorWrapper>
        <SelectorTitle>작가명</SelectorTitle>
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
      <SelectorWrapper>
        <SearchTypeWrapper>
          <SearchType onClick={() => setSearchMode('title')} selected={searchMode === 'title'}>
            제목검색
          </SearchType>
          <SearchType onClick={() => setSearchMode('author')} selected={searchMode === 'author'}>
            작가명검색
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
              placeholder="검색어를 입력해주세요"
              onChange={onSearchInput}
              value={searchInput}
            />
          </form>
          <IcSearch onClick={finishSearchInput} />
        </SearchInputContainer>
      </SelectorWrapper>
    </Wrapper>
  ) : (
    <SingleWrapper>
      <BtnRightArrowBig onClick={toggleIsNavOpened} />
    </SingleWrapper>
  );
}

export default WorkSearchBar;
