import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import ModeController from '../../../components/common/MyPage/ModeController';
import NavigationBar from '../../../components/common/NavigationBar';
import PageSelector from '../../../components/MyPage/PageSelector';
import { useUser } from '../../../hooks/useUser';
import { postFetcher, patchFetcher, getFetcher } from '../../../utils/fetchers';
import { uploadImage as uploadImageRemote } from '../../../utils/imageUploader';
import { isAllFilled } from '../../../utils/nullOrEmptyChecker';

function Upload({ isUpload }: { isUpload: boolean }) {
  const [thumbnail, setThumbnail] = useState<PageImageData>({ remotePath: '', localPath: '' });
  const [pages, setPages] = useState<Array<PageData>>([]);
  const [mode, setMode] = useState<'scroll' | 'page' | 'link'>('scroll');
  const { episodeIdx }: { episodeIdx: string } = useParams();
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const thumbnailRef = useRef<HTMLInputElement>(null);
  const workRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const { author } = useUser();

  useEffect(() => {
    if (!author) return;
    if (!isUpload) {
      const getPreviousData = async () => {
        const response = await getFetcher(`/api/episode/${author.nickName}/${episodeIdx}`);
        const { episode } = response;
        if (!episode) return history.push('/');

        setMode(episode.viewMethod);
        setThumbnail(episode.thumbnail);
        if (episode.pages) setPages(episode.pages);
        if (titleRef.current) titleRef.current.defaultValue = episode.title;
        if (linkRef.current && episode.link) linkRef.current.defaultValue = episode.link;
        if (descriptionRef.current && episode.description)
          descriptionRef.current.defaultValue = episode.description;
      };
      getPreviousData();
    }
  }, [author]);

  const triggerFileRefClick = (ref: React.RefObject<HTMLInputElement>) => {
    if (!ref.current) return;
    ref.current.click();
  };

  const uploadThumbnail = (image: PageImageData) => setThumbnail(image);
  const addFile = (image: PageData) =>
    setPages((prev) => [...prev, { ...image, index: prev.length }]);
  const deleteFile = (idx: number) =>
    setPages((prev) =>
      prev
        .filter((page) => page.index !== idx)
        .map((page) => {
          if (page.index > idx) return { ...page, index: page.index - 1 };
          else return page;
        }),
    );
  const swipeFile = (idx: number, isUp: boolean) => {
    if (idx === 0 && isUp) return;
    if (idx === pages.length - 1 && !isUp) return;
    isUp
      ? setPages((prev) =>
          prev.map((page) => {
            if (page.index === idx) return { ...page, index: page.index - 1 };
            if (page.index === idx - 1) return { ...page, index: page.index + 1 };
            else return page;
          }),
        )
      : setPages((prev) =>
          prev.map((page) => {
            if (page.index === idx) return { ...page, index: page.index + 1 };
            if (page.index === idx + 1) return { ...page, index: page.index - 1 };
            else return page;
          }),
        );
  };

  const uploadImage = async (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (image: any) => void,
  ) => {
    try {
      const target = e.target as HTMLInputElement;
      if (!target.files) return;
      const files = target.files as FileList;
      [...files].forEach(async (file) => {
        const uploadedFileURL = await uploadImageRemote(file);
        callback({ localPath: file.name, remotePath: uploadedFileURL });
      });
    } catch (e) {}
  };

  const uploadEpisode = async (handler: Function) => {
    if (mode === 'link') {
      if (!isAllFilled(linkRef.current?.value)) {
        toast.error('내용을 모두 채워 주세요');
        return;
      }
    }
    if (mode !== 'link') {
      if (!isAllFilled(titleRef.current?.value, descriptionRef.current?.value)) {
        toast.error('내용을 모두 채워 주세요');
        return;
      }
    }

    const body: any = {
      viewMethod: mode,
      title: titleRef.current?.value,
      description: descriptionRef.current?.value,
      isForNineteen: false,
      thumbnail: thumbnail,
      link: linkRef.current?.value,
      pages: pages,
    };
    if (!isUpload) body['index'] = +episodeIdx;
    const responsePromise = new Promise((resolve, reject) => {
      handler('/api/episode', body).then((response: any) => {
        if (response.ok) {
          response.json().then((author: AuthorData) => {
            history.goBack();
            resolve('업로드 성공');
          });
        } else {
          reject('업로드 실패');
        }
      });
    });
    toast.promise(responsePromise, {
      pending: '변경 사항을 저장하고 있습니다.',
      error: '변경 사항이 반영되지 않았습니다. \n다시 시도해주세요',
      success: '성공적으로 저장되었습니다.',
    });
  };

  const submitEpisode = () => {
    if (isUpload) uploadEpisode(postFetcher);
    else uploadEpisode(patchFetcher);
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
              accept=".jpg,.png,.jpeg,.webp"
            />
            <ThumbnailInput>
              <input type="text" defaultValue={thumbnail.localPath} />
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
              accept=".jpg,.png,.jpeg,.webp"
              multiple={true}
            />
            <WorksInput disabled={mode === 'link'}>
              <div>
                <div>파일 목록</div>
                <div onClick={() => triggerFileRefClick(workRef)}>파일 찾기</div>
              </div>
              <PageSelector pages={pages} deleteFile={deleteFile} swipeFile={swipeFile} />
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
        <SubmitButton onClick={submitEpisode}>변경사항 저장</SubmitButton>
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
