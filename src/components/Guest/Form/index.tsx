import React, { useRef, useState } from 'react';
import useLetter from '../../../hooks/useLetters';

import { Body, Sender, Title, Wrapper, File, Submit, Bottom } from './style';

const writeLetter = async ({
  title,
  body,
  sender,
  file,
}: {
  title: string;
  body: string;
  sender: string;
  file?: string | null;
}) => {
  const postResponse = await fetch('/api/letter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, body, sender, file }),
  });
  return postResponse.ok;
};

function GuestForm() {
  const { mutate } = useLetter({});
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const senderRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  return (
    <Wrapper
      onSubmit={async (e) => {
        e.preventDefault();
        if (!titleRef.current || !bodyRef.current || !senderRef.current) return;
        const writeResponse = await writeLetter({
          title: titleRef.current.value,
          body: bodyRef.current.value,
          sender: senderRef.current.value,
          file: selectedFile,
        });
        if (writeResponse) {
          setSelectedFile(null);
          mutate();
          titleRef.current.value = '';
          bodyRef.current.value = '';
          senderRef.current.value = '';
        }
      }}
    >
      <Title placeholder="제목" ref={titleRef} />
      <Body
        ref={bodyRef}
        placeholder="방명록 작성 후 수정 혹은 삭제가 불가능하며,&#10;문제가 되는 내용의 경우 관리자의 권한으로&#10;무통보 삭제될 수 있습니다"
      />
      <Sender placeholder="이름" ref={senderRef} />
      <Bottom>
        <File htmlFor="file-input">사진 추가</File>
        <input id="file-input" type="file" style={{ display: 'none' }} ref={fileRef} />
        <Submit type="submit" value="보내기" />
      </Bottom>
    </Wrapper>
  );
}

export default GuestForm;
