import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import FlexCenterLayout from '../../layout/FlexCenter';

function Loader() {
  return (
    <FlexCenterLayout>
      <PuffLoader color="#2454a6" />
    </FlexCenterLayout>
  );
}

export default Loader;
