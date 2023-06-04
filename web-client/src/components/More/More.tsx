import React from 'react';
import { Outlet } from 'react-router-dom';

import './More.scss';

export const More = (): JSX.Element => {
  return (
    <section className="more">
      <div className="container">
        <div className="more__wrapper">
          <h3 className="more__title">
            Більше
          </h3>

          <Outlet />
        </div>
      </div>
    </section>
  );
};
