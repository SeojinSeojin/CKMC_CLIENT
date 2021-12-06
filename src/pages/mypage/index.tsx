import React, { useEffect, useRef, useState } from 'react';
import { AuthorData } from '../../types';
import NavigationBar from '../../components/common/NavigationBar';
import styled from 'styled-components';
import Input from '../../components/common/Input';
import { Link } from 'react-router-dom';
import { uploadImage as uploadImageRemote } from '../../utils/imageUploader';
import SelectedHashTags from '../../components/common/MyPage/SelectedHashTags';
import { IcToggleDownBlue, IcToggleUpBlue } from '../../components/common/Icons';
import HashTagSelector from '../../components/common/MyPage/HashTagSelector';
import { patchFetcher } from '../../utils/fetchers';
import AuthorLayout from '../../components/layout/Author';
import EpisodeContainer from '../../components/Episode/Container';

function MyPage() {
  const [author, setAuthor] = useState<AuthorData | null>(null);
  const [isLoginNeeded, setIsLoginNeeded] = useState(false);
  const [fileURL, setFileURL] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [hashTags, setHashTags] = useState<Array<string>>([]);
  const [showHashTagSelector, setShowHashTagSelector] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const workTitleRef = useRef<HTMLInputElement>(null);
  const workDetailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const getUserInfo = async () => {
      const getResponse = await fetch('/api/user/');
      if (getResponse.status === 200) {
        const responseData = await getResponse.json();
        setAuthor(responseData);
        setContact(responseData.contact);
        setFileURL(responseData.work.thumbnail);
        setHashTags(responseData.work.hashTags);
      } else setIsLoginNeeded(true);
    };
    getUserInfo();
  }, []);

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const target = e.target as HTMLInputElement;
      if (!target.files) return;
      const file: File = (target.files as FileList)[0];
      const uploadedFileURL = await uploadImageRemote(file);
      setFileURL(uploadedFileURL);
    } catch (e) {}
  };

  const editAuthor = async () => {
    await patchFetcher('/api/author/edit', {
      contact,
      title: workTitleRef.current?.value,
      thumbnail: fileURL,
      description: workDetailRef.current?.value,
      hashTags: hashTags,
    });
  };

  const triggerFormClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  };

  const toggleHashTags = (tag: string) => {
    if (hashTags.includes(tag)) setHashTags(hashTags.filter((t) => t !== tag));
    else {
      if (hashTags.length >= 5) return;
      setHashTags((prev) => [...prev, tag]);
    }
  };

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
      <AuthorLayout>
        <AuthorForm>
          <input
            type="file"
            onChange={uploadImage}
            accept=".jpg,.png,.jpeg,.webp"
            style={{ display: 'none' }}
            ref={fileInputRef}
          />
          <img
            src={
              fileURL !== ''
                ? fileURL
                : author.work.thumbnail === 'https://via.placeholder.com/250'
                ? 'https://via.placeholder.com/500'
                : author.work.thumbnail
            }
            alt=""
            style={{
              width: 500,
              height: 500,
              objectFit: 'cover',
            }}
            onClick={triggerFormClick}
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
              preValue={author.work.description === '미입력 상태' ? '' : author.work.description}
              styledInput={WorkDescription}
              counterBottom={8}
              ref={workDetailRef}
            />
          </WorkWrapper>
          <AuthorContact
            placeholder="연락처"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <HashTagWrapper>
            <SelectedHashTags hashTags={hashTags} />
            {showHashTagSelector ? (
              <IcToggleUpBlue onClick={() => setShowHashTagSelector(false)} />
            ) : (
              <IcToggleDownBlue onClick={() => setShowHashTagSelector(true)} />
            )}
          </HashTagWrapper>
          {showHashTagSelector && (
            <HashTagSelector hashTags={hashTags} onHashTagClick={toggleHashTags} />
          )}
        </AuthorForm>
        <Episodes>
          <EpisodeHeader>
            <Link to="mypage/write">회차 업로드</Link>
            <div onClick={editAuthor}>변경사항 저장</div>
          </EpisodeHeader>
          {author.work.episodes.length === 0 ? (
            <div style={{ textAlign: 'center' }}>
              회차가 없습니다. 회차 업로드를 눌러 회차를 업로드해주세요.
            </div>
          ) : (
            <EpisodeContainer episodes={author.work.episodes} isEditable={true} />
          )}
        </Episodes>
      </AuthorLayout>
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
    &:hover {
      cursor: pointer;
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

const HashTagWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 20px;
  height: 34px;
  align-items: center;
  box-sizing: border-box;
`;

export default MyPage;
