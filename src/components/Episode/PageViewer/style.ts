import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import icArrowNext from '../../../components/common/Icons/ic-arrow-next.svg';
import icArrowPrevious from '../../../components/common/Icons/ic-arrow-previous.svg';

export const Item = styled.div`
  display: flex;
  justify-content: center;
  & img {
    width: 100%;
    max-width: 820px;
  }
`;

export const ItemDouble = styled.div`
  display: flex;
  justify-content: center;
  & img {
    width: 50% !important;
    max-width: 510px;
  }
`;

export const ViewModeSwitcher = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-bottom: 32px;
  & > svg {
    width: 20px;
    height: 24px;
  }
  @media (max-width: 1200px) {
    margin-right: 20px;
    margin-top: -100px;
    & > svg {
      width: 15px;
      height: 18px;
    }
  }
  @media (max-width: 500px) {
    margin-top: -32px;
  }
`;

interface ICustomCarousel {
  viewMode: 1 | 2;
}
export const CustomCarousel = styled(Carousel)<ICustomCarousel>`
  max-width: ${({ viewMode }) => (viewMode === 1 ? 820 : 1020)}px;
  & p.carousel-status {
    font-size: 10px;
    color: #8eaec9;
    text-shadow: none;
  }
  & button.control-arrow {
    background-repeat: no-repeat !important;
    background-position: center !important;
  }
  & button.control-arrow::before {
    content: none !important;
  }
  & button.control-arrow.control-next {
    background-image: url(${icArrowNext});
    transition: all 0.4s;
    &:hover {
      background: none;
      background-image: url(${icArrowNext});

      & svg {
        backdrop-filter: brightness(90%);
      }
    }
  }
  & button.control-arrow.control-prev {
    background-image: url(${icArrowPrevious});
    transition: all 0.4s;
    &:hover {
      background: none;
      background-image: url(${icArrowPrevious});
      & svg {
        backdrop-filter: brightness(90%);
      }
    }
  }
`;
