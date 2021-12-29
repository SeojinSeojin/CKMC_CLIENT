import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { CustomCarousel, Item } from './style';

function PageViewer({ pages }: { pages: Array<string> }) {
  const [selectedPage, setSelectedPage] = useState(0);
  useEffect(() => {
    setSelectedPage(0);
  }, [pages]);

  return (
    <CustomCarousel
      showArrows={true}
      swipeable={true}
      showIndicators={false}
      emulateTouch={true}
      showThumbs={false}
      selectedItem={selectedPage}
      onChange={(e) => setSelectedPage(e)}
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
