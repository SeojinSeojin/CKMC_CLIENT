import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { IcToggleDownBlue, IcToggleUpBlue } from '../../../components/common/Icons';
import ModeController from '../../../components/common/MyPage/ModeController';
import NavigationBar from '../../../components/common/NavigationBar';
import { AuthorData } from '../../../types';
import { postFetcher } from '../../../utils/fetchers';
import { uploadImage as uploadImageRemote } from '../../../utils/imageUploader';
import { isAllFilled } from '../../../utils/nullOrEmptyChecker';

type imageType = { remote: string; local: string };

function Upload() {
  const [thumbnail, setThumbnail] = useState<imageType>({ remote: '', local: '' });
  const [files, setFiles] = useState<Array<imageType>>([]);
  const [mode, setMode] = useState<'scroll' | 'page' | 'link'>('scroll');
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const thumbnailRef = useRef<HTMLInputElement>(null);
  const workRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const triggerFileRefClick = (ref: React.RefObject<HTMLInputElement>) => {
    if (!ref.current) return;
    ref.current.click();
  };

  const uploadThumbnail = (image: imageType) => setThumbnail(image);
  const addFile = (image: imageType) => setFiles((prev) => [...prev, image]);
  const uploadImage = async (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (image: imageType) => void,
  ) => {
    try {
      const target = e.target as HTMLInputElement;
      if (!target.files) return;
      const file: File = (target.files as FileList)[0];
      const uploadedFileURL = await uploadImageRemote(file);
      callback({ local: file.name, remote: uploadedFileURL });
    } catch (e) {}
  };

  const uploadEpisode = async () => {
    if (mode === 'link') if (!isAllFilled(linkRef.current?.value)) return;
    if (mode !== 'link')
      if (!isAllFilled(titleRef.current?.value, descriptionRef.current?.value)) return;

    const response = await postFetcher('/api/episode', {
      viewMethod: mode,
      title: titleRef.current?.value,
      description: descriptionRef.current?.value,
      isForNineteen: false,
      thumbnail: thumbnail.remote,
      link: linkRef.current?.value,
      pages: files.map((file) => file.remote),
    });
    if (response.ok) {
      const author: AuthorData = await response.json();
      if (mode !== 'link')
        history.push(`/author/${author.nickName}/${author.work.episodes.length - 1}`);
      else history.goBack();
    }
  };

  return (
    <>
      <NavigationBar theme="blue" selected={null} />
      <Wrapper>
        <Form>
          <FormItem>
            <Label>
              <div>뷰 방식</div>
            </Label>
            <ViewModeWrapper>
              <ModeController
                mode={mode}
                setMode={(mode: 'scroll' | 'page' | 'link') => setMode(mode)}
              />
              <input
                type="text"
                placeholder="http://ckmc.co.kr"
                disabled={mode !== 'link'}
                ref={linkRef}
              />
            </ViewModeWrapper>
          </FormItem>
          <FormItem>
            <Label>
              <div>회차 제목</div>
            </Label>
            <input type="text" ref={titleRef} />
          </FormItem>
          <FormItem>
            <Label>
              <div>회차 썸네일 업로드</div>
              <div>240x320</div>
            </Label>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => uploadImage(e, uploadThumbnail)}
              ref={thumbnailRef}
              type="file"
            />
            <ThumbnailInput>
              <input type="text" value={thumbnail.local} />
              <div onClick={() => triggerFileRefClick(thumbnailRef)}>파일 찾기</div>
            </ThumbnailInput>
          </FormItem>
          <FormItem>
            <Label disabled={mode === 'link'}>
              <div>원고 업로드</div>
              <div>
                총 용량 50MB 이하 업로드 가능, <br />
                가로 사이즈 1000px 이하 권장
              </div>
            </Label>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => uploadImage(e, addFile)}
              ref={workRef}
              type="file"
            />
            <WorksInput disabled={mode === 'link'}>
              <div>
                <div>파일 목록</div>
                <div onClick={() => triggerFileRefClick(workRef)}>파일 찾기</div>
              </div>
              <div>
                {files.map((file) => (
                  <div key={file.local}>{file.local}</div>
                ))}
              </div>
              <div>
                <div>
                  <IcToggleUpBlue />
                </div>
                <div>
                  <IcToggleDownBlue />
                </div>
                <div></div>
                <div>삭제</div>
              </div>
            </WorksInput>
          </FormItem>
          <FormItem>
            <Label disabled={mode === 'link'}>
              <div>회차 소개</div>
              <div>
                업로드된 이미지 가장 하단에 <br />
                18pt로 보여집니다.
              </div>
            </Label>
            <textarea disabled={mode === 'link'} ref={descriptionRef} />
          </FormItem>
        </Form>
        <SubmitButton onClick={uploadEpisode}>변경사항 저장</SubmitButton>
      </Wrapper>
    </>
  );
}

export default Upload;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Form = styled.form`
  min-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 32px;
  border-bottom: 1px solid #8eaec9;
  & input,
  textarea {
    border: 1px solid #2454a6;
    background-color: white;
    padding: 8px;
    min-width: 380px;
    color: #2454a6;
    &::placeholder {
      color: #8eaec9;
    }
    &:disabled {
      border: 1px solid #8eaec9;
      &::placeholder {
        color: white;
      }
    }
    &:focus {
      outline: none;
    }
  }
  & input[type='file'] {
    display: none;
  }
  & input {
    height: 30px;
  }
  & textarea {
    resize: none;
    height: 160px;
  }
`;

const FormItem = styled.div`
  display: grid;
  grid-template-columns: 180px auto;
`;

interface IDisabled {
  disabled?: boolean;
}
const Label = styled.div<IDisabled>`
  display: flex;
  flex-direction: column;

  & > div {
    color: #8eaec9;
    font-size: 12px;
    margin-top: 8px;
    &:first-child {
      font-size: 18px;
      color: ${({ disabled }) => (disabled ? '#8EAEC9' : '#2454a6')};
    }
  }
`;

const ViewModeWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const WorksInput = styled.div<IDisabled>`
  height: 230px;
  border: 1px solid ${({ disabled }) => (disabled ? '#8EAEC9' : '#2454a6')};
  color: ${({ disabled }) => (disabled ? '#8EAEC9' : '#2454a6')};
  display: flex;
  flex-direction: column;

  & > div {
    &:first-child {
      border-bottom: 1px solid ${({ disabled }) => (disabled ? '#8EAEC9' : '#2454a6')};
      display: grid;
      grid-template-columns: auto 100px;
      height: 30px;
      font-size: 14px;
      line-height: 28px;
      & > div {
        text-align: center;
        &:first-child {
          padding-left: 12px;
          text-align: left;
          border-right: 1px solid ${({ disabled }) => (disabled ? '#8EAEC9' : '#2454a6')};
        }
        &:nth-child(2) {
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    &:nth-child(2) {
      padding: 12px;
    }
    &:nth-child(3) {
      display: grid;
      grid-template-columns: 28px 28px auto 60px;
      margin-top: auto;
      & > * {
        height: 30px;
        line-height: 28px;
        font-size: 14px;
        border: 1px solid ${({ disabled }) => (disabled ? '#8EAEC9' : '#2454a6')};
        border-left: none;
        border-bottom: none;
        display: flex;
        justify-content: center;
        align-items: center;
        &:nth-child(4) {
          text-align: center;
          border-right: none;
        }
      }
    }
  }
`;

const ThumbnailInput = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: auto 100px;
  color: #2454a6;
  & div {
    border: 1px solid #2454a6;
    border-left: none;
    height: 30px;
    line-height: 28px;
    font-size: 14px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const SubmitButton = styled.div`
  border-radius: 40px;
  width: 230px;
  height: 40px;
  color: white;
  font-size: 18px;
  line-height: 40px;
  background-color: #2454a6;
  text-align: center;
  margin-top: 52px;

  &:hover {
    cursor: pointer;
  }
`;
