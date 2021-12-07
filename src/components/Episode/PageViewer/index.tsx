import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { CustomCarousel, Item } from './style';

function PageViewer({ pages }: { pages: Array<string> }) {
  return (
    <CustomCarousel
      showArrows={true}
      swipeable={true}
      showIndicators={false}
      emulateTouch={true}
      showThumbs={false}
    >
      {pages.map((page, idx) => (
        <Item key={idx}>
          <img src={page} alt={`${idx}`} />
        </Item>
      ))}
    </CustomCarousel>
  );
}

export default PageViewer;
