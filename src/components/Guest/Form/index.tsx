import React, { FormEvent, useRef, useState } from 'react';
import { postFetcher } from '../../../utils/fetchers';
import Input from '../../common/Input';
import { uploadImage as uploadImageRemote } from '../../../utils/imageUploader';
import { Body, Sender, Title, Wrapper, File, Submit, Bottom, UploadedImage } from './style';
import { toast } from 'react-toastify';
import { isAllFilled } from '../../../utils/nullOrEmptyChecker';

function GuestForm() {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);
  const senderRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const target = e.target as HTMLInputElement;
      if (!target.files) return;
      const file: File = (target.files as FileList)[0];
      const uploadedFileURL = await uploadImageRemote(file);
      setSelectedFile(uploadedFileURL);
    } catch (e) {}
  };

  const uploadLetter = async (e: FormEvent) => {
    e.preventDefault();
    if (!titleRef.current || !bodyRef.current || !senderRef.current) return;
    if (!isAllFilled(titleRef.current.value || bodyRef.current.value || senderRef.current.value)) {
      toast.error('칸을 모두 채워주세요!');
      return;
    }
    const uploadPromise = new Promise((resolve, reject) => {
      postFetcher('/api/letter', {
        title: titleRef.current!.value,
        body: bodyRef.current!.value,
        sender: senderRef.current!.value,
        file: selectedFile,
      }).then((res) => {
        if (res.status === 200) {
          resolve('편지 작성 성공');
          setSelectedFile(null);
          titleRef.current!.value = '';
          bodyRef.current!.value = '';
          senderRef.current!.value = '';
        } else reject('편지 작성 실패');
      });
    });
    toast.promise(uploadPromise, {
      pending: '편지를 보내고 있습니다.',
      success: '편지를 보냈습니다.',
      error: '편지 업로드에 실패했습니다. ',
    });
  };

  return (
    <Wrapper onSubmit={uploadLetter}>
      <Title placeholder="제목" ref={titleRef} />
      <Input
        maxLength={300}
        placeholder="방명록 작성 후 수정 혹은 삭제가 불가능하며,&#10;문제가 되는 내용의 경우 관리자의 권한으로&#10;무통보 삭제될 수 있습니다"
        preValue=""
        styledInput={Body}
        counterBottom={8}
        ref={bodyRef}
      />
      <Sender placeholder="이름" ref={senderRef} />
      <Bottom>
        <File htmlFor="file-input">사진 추가</File>
        {selectedFile && (
          <UploadedImage>
            <img src={selectedFile} alt="업로드된 이미지" />
            <div onClick={() => setSelectedFile(null)}>X</div>
          </UploadedImage>
        )}
        <input
          id="file-input"
          type="file"
          style={{ display: 'none' }}
          ref={fileRef}
          onChange={uploadImage}
          accept=".jpg,.png,.jpeg,.webp"
        />
        <Submit type="submit" value="보내기" />
      </Bottom>
    </Wrapper>
  );
}

export default GuestForm;
