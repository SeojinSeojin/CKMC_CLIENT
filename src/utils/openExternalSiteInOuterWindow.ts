const openExternalSiteInOuterWindow = (link: string) => {
  window.open(link, '', '_blank');
};

export const openReservation = () => {
  console.log('open reservation');
  openExternalSiteInOuterWindow('https://m.booking.naver.com/booking/12/bizes/631160');
};
