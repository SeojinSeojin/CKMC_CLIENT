import React from 'react';
import { AUTHOR_FIRST_NAME, HASHTAGS } from '../../../utils/HASHTAGS';
import { BtnLeftArrowBig, IcSearch } from '../../common/Icons';
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
} from './style';

function WorkSearchBar({
  hashTags,
  authorFirstName,
  setHashTags,
  removeHashTag,
  setAuthorFirstName,
  setAuthorName,
  setWorkTitle,
}: {
  hashTags: string[];
  authorFirstName: string;
  setHashTags: (tag: string) => void;
  removeHashTag: (tag: string) => void;
  setAuthorFirstName: (name: string) => void;
  setAuthorName: (name: string) => void;
  setWorkTitle: (title: string) => void;
}) {
  const toggleHashTag = (tag: string) => {
    hashTags.includes(tag) ? removeHashTag(tag) : setHashTags(tag);
  };
  return (
    <Wrapper>
      <BtnLeftArrowBig />
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
          <SearchType selected={true}>제목검색</SearchType>
          <SearchType selected={false}>작가명검색</SearchType>
        </SearchTypeWrapper>
        <SearchInputContainer>
          <SearchInput type="text" placeholder="검색어를 입력해주세요" />
          <IcSearch />
        </SearchInputContainer>
      </SelectorWrapper>
    </Wrapper>
  );
}

export default WorkSearchBar;
