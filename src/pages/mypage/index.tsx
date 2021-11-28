import React, { useEffect, useRef, useState } from 'react';
import { AuthorData } from '../../types';
import NavigationBar from '../../components/common/NavigationBar';
import styled from 'styled-components';
import Input from '../../components/common/Input';
import { Link } from 'react-router-dom';

function MyPage() {
  const [author, setAuthor] = useState<AuthorData | null>(null);
  const [isLoginNeeded, setIsLoginNeeded] = useState(false);
  const workTitleRef = useRef<HTMLInputElement>(null);
  const workDetailRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const getUserInfo = async () => {
      const getResponse = await fetch('/api/user/');
      if (getResponse.status === 200) {
        const responseData = await getResponse.json();
        console.log(responseData);
        setAuthor(responseData);
      } else setIsLoginNeeded(true);
    };
    getUserInfo();
  }, []);

  if (isLoginNeeded)
    return (
      <div>
        <NavigationBar theme="blue" selected={null} />
        <>로그인 이후 사용해주세요</>
        <Link to="/login">로그인 바로가기</Link>
      </div>
    );
  if (!author) return <div>로딩중</div>;
  return (
    <>
      <NavigationBar theme="blue" selected={null} />
      <FlexWrapper>
        <GridWrapper>
          <AuthorForm>
            <img
              src={
                author.work.thumbnail === 'https://via.placeholder.com/250'
                  ? 'https://via.placeholder.com/500'
                  : author.work.thumbnail
              }
              alt=""
            />
            <WorkWrapper>
              <Input
                maxLength={30}
                placeholder="작품 제목"
                preValue={author.work.title === '미입력 상태' ? '' : author.work.title}
                styledInput={WorkTitle}
                counterBottom={8}
                ref={workTitleRef}
              />
              <Input
                maxLength={200}
                placeholder="작품 소개 내용"
                preValue={author.work.title === '미입력 상태' ? '' : author.work.title}
                styledInput={WorkDescription}
                counterBottom={8}
                ref={workDetailRef}
              />
            </WorkWrapper>
            <AuthorContact placeholder="연락처" />
            {/*해시태그*/}
          </AuthorForm>
          <Episodes>
            <EpisodeHeader>
              <Link to="mypage/write">회차 업로드</Link>
              <div>변경사항 저장</div>
            </EpisodeHeader>
            {author.work.episodes.length === 0 ? (
              <div style={{ textAlign: 'center' }}>
                회차가 없습니다. 회차 업로드를 눌러 회차를 업로드해주세요.
              </div>
            ) : (
              <div>에피소드 목록</div>
            )}
          </Episodes>
        </GridWrapper>
      </FlexWrapper>
    </>
  );
}

const Episodes = styled.div``;

const EpisodeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  & > * {
    border-radius: 50px;
    border: 1px solid #2454a6;
    width: 220px;
    text-align: center;
    padding: 12px 0;

    &:first-child {
      color: #2454a6;
    }
    &:nth-child(2) {
      color: white;
      background-color: #2454a6;
    }
  }
`;

const AuthorForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  & input {
    border: none;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #8eaec9;
    }
  }
`;

const WorkWrapper = styled.div`
  border: 1px solid #2454a6;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const WorkTitle = styled.input`
  border-bottom: 1px solid #8eaec9 !important;
  padding-bottom: 8px;
  color: #2454a6;
`;

const WorkDescription = styled.textarea`
  padding-top: 8px;
  border: none;
  resize: none;
  height: 100px;
  width: 100%;
  color: #2454a6;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #8eaec9;
  }
`;

const AuthorContact = styled.input`
  border: 1px solid #2454a6 !important;
  padding: 10px;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 500px auto;
  width: 80%;
  gap: 80px;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export default MyPage;
