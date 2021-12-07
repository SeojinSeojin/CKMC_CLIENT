import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import icArrowNext from '../../../components/common/Icons/ic-arrow-next.svg';
import icArrowPrevious from '../../../components/common/Icons/ic-arrow-previous.svg';

export const Item = styled.div`
  display: flex;
  justify-content: center;

  & img {
    width: min(100%, 720px) !important;
  }
`;

export const CustomCarousel = styled(Carousel)`
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
