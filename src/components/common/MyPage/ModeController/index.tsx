import React from 'react';
import { IcRadioSelected, IcRadioUnselected } from '../../Icons';
import { Wrapper } from './style';

type modeItem = { mode: 'scroll' | 'page' | 'link'; text: string };

function ModeController({
  mode,
  setMode,
}: {
  mode: 'scroll' | 'page' | 'link';
  setMode: (mode: 'scroll' | 'page' | 'link') => void;
}) {
  const modeItems: Array<modeItem> = [
    { mode: 'scroll', text: '스크롤 뷰' },
    { mode: 'page', text: '페이지 뷰' },
    { mode: 'link', text: '링크 연결' },
  ];
  return (
    <>
      {modeItems.map((item) => (
        <Wrapper onClick={() => setMode(item.mode)} isSelected={mode === item.mode} key={item.mode}>
          {mode === item.mode ? <IcRadioSelected /> : <IcRadioUnselected />}
          <div>{item.text}</div>
        </Wrapper>
      ))}
    </>
  );
}

export default ModeController;
