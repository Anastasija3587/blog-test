import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Loader = (): JSX.Element => {
  return <Skeleton count={25} />;
};

export default Loader;
