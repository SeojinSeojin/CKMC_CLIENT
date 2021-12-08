import React, { useState } from 'react';
import { SIDE_NAV } from '../../../utils/SIDE_NAV';
import { BlueButton, Item, WhiteButton, BlueGradation, Wrapper } from './style';

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
  const [animation, setAnimation] = useState<'' | 'close'>('');
  const toggleOpen = () => {
    if (isNotFoldable) return;
    if (!isOpen) setIsOpen(true);
    else {
      setAnimation('close');
      setTimeout(() => {
        setIsOpen(false);
        setAnimation('');
      }, 800);
    }
  };

  return (
    <>
      {theme === 'white' ? (
        <>
          <WhiteButton theme={theme} isOpen={isOpen} onClick={toggleOpen} />
          <BlueGradation />
        </>
      ) : (
        <BlueButton theme={theme} isOpen={isOpen} onClick={toggleOpen} />
      )}

      {isOpen && (
        <Wrapper theme={theme} animation={animation}>
          {Object.keys(SIDE_NAV).map((key) => (
            <Item
              key={key}
              theme={theme}
              selected={key === selected}
              href={SIDE_NAV[key as sideNavKey].route!}
            >
              {SIDE_NAV[key as sideNavKey].title}
            </Item>
          ))}
        </Wrapper>
      )}
    </>
  );
}
