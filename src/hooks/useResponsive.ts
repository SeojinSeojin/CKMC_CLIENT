import { useMediaQuery } from 'react-responsive';

export default function useResponsive() {
  const isBig = useMediaQuery({ minWidth: 1920 });
  const isBigMiddle = useMediaQuery({ minWidth: 1200, maxWidth: 1920 });
  const isSmallMiddle = useMediaQuery({ minWidth: 500, maxWidth: 1200 });
  const isSmall = useMediaQuery({ maxWidth: 500 });

  return { isBig, isBigMiddle, isSmallMiddle, isSmall };
}
