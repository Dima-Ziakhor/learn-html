import React from 'react';

import './Loader.scss';

export const Loader = (): JSX.Element => (
  <div className="loader">
    <div className="loader__wrapper">
      <div className="loader__load"></div>
    </div>
  </div>
);
