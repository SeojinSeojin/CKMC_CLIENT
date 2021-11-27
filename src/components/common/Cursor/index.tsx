import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import DongIcon from '../Icons/Dong';
import StarIcon from '../Icons/Star';

export default function CursorContainer() {
  const [isCursorIn, setIsCursorIn] = useState(true);
  const cursorRef = useRef({
    x: 0,
    y: 0,
  });
  const starRef = useRef<HTMLDivElement>(null);
  const dongRef = useRef<HTMLDivElement>(null);

  const hideCursor = () => setIsCursorIn(false);
  const showCursor = () => setIsCursorIn(true);
  const trackCursor = (e: MouseEvent) => {
    if (!cursorRef) return;
    const eObj = (window.event ?? e) as MouseEvent;
    cursorRef.current.x = eObj.clientX;
    cursorRef.current.y = eObj.clientY + document.documentElement.scrollTop;
  };

  const move = (obj: HTMLDivElement | null, interval: number, yDistance: number) => {
    if (!obj) return;
    const m_x = Number(obj.style.left.slice(0, -2));
    const m_y = Number(obj.style.top.slice(0, -2));
    obj.style.left = m_x + Math.round((cursorRef.current.x - m_x) / interval) + 'px';
    obj.style.top = m_y + Math.round((cursorRef.current.y - m_y) / interval) + yDistance + 'px';
  };
  const moveStar = () => move(starRef.current, 4, 6);
  const moveDong = () => move(dongRef.current, 8, 7);

  useEffect(() => {
    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('mouseenter', showCursor);
    document.addEventListener('mousemove', trackCursor);
    const moveCursor = setInterval(() => {
      moveStar();
      moveDong();
    }, 50);

    return () => {
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('mouseenter', showCursor);
      document.removeEventListener('mousemove', trackCursor);
      clearInterval(moveCursor);
    };
  }, []);
  return (
    <>
      <Wrapper visible={isCursorIn} ref={starRef}>
        <StarIcon />
      </Wrapper>
      <Wrapper visible={isCursorIn} ref={starRef}>
        <DongIcon />
      </Wrapper>
    </>
  );
}

interface IWrapper {
  visible: boolean;
}

const Wrapper = styled.div<IWrapper>`
  position: absolute;
  top: 0;
`;
