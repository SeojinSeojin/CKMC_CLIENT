import React from 'react';
import { openReservation } from '../../../utils/openExternalSiteInOuterWindow';
import { IcArrowRight } from '../../common/Icons';
import { ReservButton } from './style';

function ReservationButton() {
  return (
    <ReservButton onClick={openReservation}>
      <div>전시 예약 바로가기</div> <IcArrowRight />
    </ReservButton>
  );
}

export default ReservationButton;
