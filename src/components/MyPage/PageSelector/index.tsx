import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Item } from './style';
import { IcToggleDownBlue, IcToggleUpBlue } from '../../common/Icons';

function PageSelector({
  pages,
  deleteFile,
  swipeFile,
}: {
  pages: Array<PageData>;
  deleteFile: (idx: number) => void;
  swipeFile: (idx: number, isUp: boolean) => void;
}) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const swipeUp = () => {
    if (selectedIdx === null) toast.error('파일을 선택해주세요');
    else {
      if (selectedIdx === 0) return;
      swipeFile(selectedIdx, true);
      setSelectedIdx((prev) => prev! - 1);
    }
  };
  const swipeDown = () => {
    if (selectedIdx === null) toast.error('파일을 선택해주세요');
    else {
      if (selectedIdx === pages.length - 1) return;
      swipeFile(selectedIdx, false);
      setSelectedIdx((prev) => prev! + 1);
    }
  };

  useEffect(() => {
    if (selectedIdx && selectedIdx >= pages.length) setSelectedIdx(null);
  }, [selectedIdx, pages]);

  return (
    <>
      <div>
        {pages
          .sort((a, b) => a.index - b.index)
          .map((file) => (
            <Item
              key={file.index}
              onClick={() => setSelectedIdx(file.index)}
              selected={file.index === selectedIdx}
            >
              {file.localPath}
            </Item>
          ))}
      </div>
      <div>
        <div onClick={swipeUp}>
          <IcToggleUpBlue />
        </div>
        <div onClick={swipeDown}>
          <IcToggleDownBlue />
        </div>
        <div></div>
        <div
          onClick={() => {
            selectedIdx !== null ? deleteFile(selectedIdx) : toast.error('파일을 선택해주세요');
          }}
        >
          삭제
        </div>
      </div>
    </>
  );
}

export default PageSelector;
