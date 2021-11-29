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

function WorkSearchBar() {
  return (
    <Wrapper>
      <BtnLeftArrowBig />
      <SelectorWrapper>
        <SelectorTitle>소재/장르별 해시태그</SelectorTitle>
        <HashTagContainer>
          {HASHTAGS.BY_GENRE.map((tag) => (
            <HashTag selected={false} key={tag}>
              #{tag}
            </HashTag>
          ))}
        </HashTagContainer>
      </SelectorWrapper>
      <SelectorWrapper>
        <SelectorTitle>작품형식별 해시태그</SelectorTitle>
        <HashTagContainer>
          {HASHTAGS.BY_TYPE.map((tag) => (
            <HashTag selected={false} key={tag}>
              #{tag}
            </HashTag>
          ))}
        </HashTagContainer>
      </SelectorWrapper>
      <SelectorWrapper>
        <SelectorTitle>작가명</SelectorTitle>
        <FirstNameContainer>
          {AUTHOR_FIRST_NAME.map((firstName) => (
            <FirstName selected={false} key={firstName}>
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
