const openExternalSiteInOuterWindow = (link: string) => {
  window.open(link, '', '_blank');
};

export const openReservation = () => {
  openExternalSiteInOuterWindow('https://m.booking.naver.com/booking/12/bizes/631160');
};

export const openInstagram = () => {
  openExternalSiteInOuterWindow('https://instagram.com/ckmc2022?utm_medium=copy_link');
};

export const openTwitter = () => {
  openExternalSiteInOuterWindow('https://twitter.com/CKMC2022?s=20');
};
