import React, { useState } from 'react';
import useResponsive from '../../../hooks/useResponsive';
import { openReservation } from '../../../utils/openExternalSiteInOuterWindow';
import { SIDE_NAV } from '../../../utils/SIDE_NAV';
import MobileHeader from './MobileHeader';
import { BlueButton, Item, WhiteButton, Wrapper } from './style';

interface INavigationBar {
  theme: 'white' | 'blue';
  selected: keyof typeof SIDE_NAV | null;
  isOpened?: boolean;
  isNotFoldable?: boolean;
}

type sideNavKey = keyof typeof SIDE_NAV;

export default function NavigationBar({
  theme,
  selected,
  isOpened,
  isNotFoldable,
}: INavigationBar) {
  const [isOpen, setIsOpen] = useState(isOpened ?? false);
  const [animation, setAnimation] = useState<'slideIn' | 'slideOut'>('slideIn');
  const toggleOpen = () => {
    if (isNotFoldable) return;
    if (!isOpen) setIsOpen(true);
    else {
      setAnimation('slideOut');
      setTimeout(() => {
        setIsOpen(false);
        setAnimation('slideIn');
      }, 800);
    }
  };
  const { isBig, isBigMiddle, isSmall, isSmallMiddle } = useResponsive();

  return (
    <>
      {theme === 'white' ? (
        <WhiteButton
          theme={theme}
          isOpen={isOpen}
          onClick={toggleOpen}
          isBig={isBig}
          isBigMiddle={isBigMiddle}
          isSmallMiddle={isSmallMiddle}
          isSmall={isSmall}
        />
      ) : (
        <BlueButton
          theme={theme}
          isOpen={isOpen}
          onClick={toggleOpen}
          isBig={isBig}
          isBigMiddle={isBigMiddle}
          isSmallMiddle={isSmallMiddle}
          isSmall={isSmall}
        />
      )}
      {(isSmall || isSmallMiddle) && <MobileHeader />}
      {isOpen && (
        <Wrapper theme={theme} animation={animation}>
          {Object.keys(SIDE_NAV).map((key) => (
            <Item
              key={key}
              theme={theme}
              isSmall={isSmall}
              selected={key === selected}
              href={SIDE_NAV[key as sideNavKey].route!}
              onClick={key === 'BOOK' ? openReservation : () => {}}
            >
              {SIDE_NAV[key as sideNavKey].title}
            </Item>
          ))}
        </Wrapper>
      )}
    </>
  );
}
