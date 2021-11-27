import React from 'react';
import { ReactComponent as HomeWhite } from './home-white.svg';
import { ReactComponent as HomeBlue } from './home-blue.svg';

interface ITitle {
  theme: 'white' | 'blue';
}
function Title({ theme }: ITitle) {
  switch (theme) {
    case 'white':
      return <HomeWhite />;
    case 'blue':
      return <HomeBlue />;
  }
}

export default Title;
