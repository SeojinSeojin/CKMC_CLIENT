import { useMediaQuery } from 'react-responsive';

export default function useResponsive() {
  const isBig = useMediaQuery({ minWidth: 1500 });
  const isBigMiddle = useMediaQuery({ minWidth: 780, maxWidth: 1500 });
  const isSmallMiddle = useMediaQuery({ minWidth: 420, maxWidth: 780 });
  const isSmall = useMediaQuery({ maxWidth: 420 });

  return { isBig, isBigMiddle, isSmallMiddle, isSmall };
}
