import React from 'react';
import {
  IcModeBox,
  IcModeBoxSelected,
  IcModeList,
  IcModeListSelected,
} from '../../../common/Icons';
import { Wrapper } from './style';

function ModeSwitcher({
  mode,
  setLinearMode,
  setSquareMode,
}: {
  mode: number;
  setLinearMode: () => void;
  setSquareMode: () => void;
}) {
  return (
    <Wrapper>
      {mode === 5 ? (
        <>
          <IcModeList onClick={setLinearMode} />
          <IcModeBoxSelected onClick={setSquareMode} />
        </>
      ) : (
        <>
          <IcModeListSelected onClick={setLinearMode} />
          <IcModeBox onClick={setSquareMode} />
        </>
      )}
    </Wrapper>
  );
}

export default ModeSwitcher;
