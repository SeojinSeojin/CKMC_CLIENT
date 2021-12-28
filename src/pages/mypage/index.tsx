import React, { useEffect, useRef, useState } from 'react';
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
import { useUser } from '../../hooks/useUser';
import Loader from '../../components/common/Loader';
import { toast } from 'react-toastify';
import emptyBox500 from '../../components/common/Icons/ic-empty-box-500.svg';
import VerticalCenterLayout from '../../components/layout/VerticalCenter';

function MyPage() {
  const [fileURL, setFileURL] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [hashTags, setHashTags] = useState<Array<string>>([]);
  const [showHashTagSelector, setShowHashTagSelector] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const workTitleRef = useRef<HTMLInputElement>(null);
  const workDetailRef = useRef<HTMLInputElement>(null);
  const { author, isValidating, error } = useUser();

  useEffect(() => {
    if (author) {
      setContact(author.contact);
      setFileURL(author.work.thumbnail);
      setHashTags(author.work.hashTags);
    }
  }, [author, error]);

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
    const patchPromise = new Promise((resolve, reject) => {
      patchFetcher('/api/author/edit', {
        contact,
        title: workTitleRef.current?.value,
        thumbnail: fileURL,
        description: workDetailRef.current?.value,
        hashTags: hashTags,
      }).then((res) => {
        if (res.ok) resolve('정보 수정 성공');
        else reject('정보 수정 실패');
      });
    });
    toast.promise(patchPromise, {
      pending: '정보를 수정하고 있습니다',
      error: '정보 수정에 실패했습니다. 다시 시도해 주세요',
      success: '정보가 성공적으로 수정되었습니다.',
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

  if (error)
    return (
      <div>
        <NavigationBar theme="blue" selected={null} />
        <>로그인 이후 사용해주세요</>
        <Link to="/login">로그인 바로가기</Link>
      </div>
    );
  if (isValidating || !author)
    return (
      <VerticalCenterLayout>
        <Loader />
      </VerticalCenterLayout>
    );
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
              fileURL !== 'https://via.placeholder.com/250'
                ? fileURL
                : author.work.thumbnail === 'https://via.placeholder.com/250'
                ? emptyBox500
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
            {hashTags && <SelectedHashTags hashTags={hashTags} />}
            {showHashTagSelector ? (
              <IcToggleUpBlue onClick={() => setShowHashTagSelector(false)} />
            ) : (
              <IcToggleDownBlue onClick={() => setShowHashTagSelector(true)} />
            )}
          </HashTagWrapper>
          {showHashTagSelector && (
            <HashTagSelector hashTags={hashTags ?? []} onHashTagClick={toggleHashTags} />
          )}
        </AuthorForm>
        <Episodes>
          <EpisodeHeader>
            <Link to="/mypage/write">회차 업로드</Link>
            <div onClick={editAuthor}>변경사항 저장</div>
          </EpisodeHeader>
          {author.work.episodes.length === 0 ? (
            <div style={{ textAlign: 'center' }}>등록된 회차가 없습니다.</div>
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
