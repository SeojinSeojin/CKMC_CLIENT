import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  IcPageViewer1,
  IcPageViewer1Selected,
  IcPageViewer2,
  IcPageViewer2Selected,
} from '../../common/Icons';

import { CustomCarousel, Item, ItemDouble, ViewModeSwitcher } from './style';

function PageViewer({ pages }: { pages: Array<string> }) {
  const [selectedPage, setSelectedPage] = useState(0);
  const [viewMode, setViewMode] = useState<1 | 2>(1);
  useEffect(() => {
    setSelectedPage(0);
  }, [pages, viewMode]);

  return (
    <>
      <ViewModeSwitcher>
        <div onClick={() => setViewMode(1)}>
          {viewMode === 1 ? <IcPageViewer1Selected /> : <IcPageViewer1 />}
        </div>
        <div onClick={() => setViewMode(2)}>
          {viewMode === 2 ? <IcPageViewer2Selected /> : <IcPageViewer2 />}
        </div>
      </ViewModeSwitcher>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CustomCarousel
          showArrows={true}
          swipeable={true}
          showIndicators={false}
          emulateTouch={true}
          showThumbs={false}
          selectedItem={selectedPage}
          onChange={(e) => setSelectedPage(e)}
          viewMode={viewMode}
        >
          {viewMode === 1
            ? pages.map((page, idx) => (
                <Item key={idx}>
                  <img src={page} alt={`${idx}`} />
                </Item>
              ))
            : [...Array(Math.ceil(pages.length / 2)).keys()]
                .map((idx) => [pages[2 * idx], pages[2 * idx + 1]])
                .map((page, idx) => (
                  <ItemDouble key={idx}>
                    <img src={page[0]} alt={page[0]} />
                    <img src={page[1]} alt={page[1]} />
                  </ItemDouble>
                ))}
        </CustomCarousel>
      </div>
    </>
  );
}

export default PageViewer;
