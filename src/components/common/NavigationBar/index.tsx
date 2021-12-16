import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useUser } from '../../../hooks/useUser';
import { postFetcher } from '../../../utils/fetchers';
import { SIDE_NAV } from '../../../utils/SIDE_NAV';
import { BlueButton, Item, WhiteButton, BlueGradation, Wrapper, UserItem } from './style';

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
  const { author, mutate } = useUser();
  const logOut = () => {
    const logoutPromise = new Promise((resolve, reject) => {
      postFetcher('/api/user/logout', {}).then((res) => {
        if (res.status === 200) {
          resolve('로그아웃 성공');
          mutate();
        } else reject('로그아웃 실패');
      });
    });
    toast.promise(logoutPromise, {
      pending: '로그아웃 중입니다',
      success: '로그아웃에 성공했습니다',
      error: '로그아웃에 실패했습니다. 다시 시도해주세요',
    });
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
          {author ? (
            <UserItem selected={false}>
              <div onClick={logOut}>로그아웃</div>
            </UserItem>
          ) : (
            <UserItem href="/login" selected={false}>
              로그인
            </UserItem>
          )}
        </Wrapper>
      )}
    </>
  );
}
