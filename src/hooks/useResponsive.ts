import { useMediaQuery } from 'react-responsive';

export default function useResponsive() {
  const isBig = useMediaQuery({ minWidth: 1500 });
  const isBigMiddle = useMediaQuery({ minWidth: 1200, maxWidth: 1500 });
  const isSmallMiddle = useMediaQuery({ minWidth: 420, maxWidth: 1200 });
  const isSmall = useMediaQuery({ maxWidth: 420 });

  return { isBig, isBigMiddle, isSmallMiddle, isSmall };
}
