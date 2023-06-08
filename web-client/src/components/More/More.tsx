import React, { useState } from 'react';
import { Outlet, useMatch, useNavigate } from 'react-router-dom';

import './More.scss';

export const More = (): JSX.Element => {
  const match = useMatch('/more/:page');
  const navigate = useNavigate();
  const [pages] = useState(['all-tags', 'chart', 'find']);

  const handleChangePage = (type: string): void => {
    if (!match?.params.page) {
      return;
    }

    const toPageIndex = pages.findIndex(item => item === match.params.page);

    if (toPageIndex >= 0 && toPageIndex < pages.length && toPageIndex !== -1 && type === 'next') {
      navigate(`/more/${pages[toPageIndex + 1]}`);
      return;
    }

    if (toPageIndex >= 0 && toPageIndex < pages.length && toPageIndex !== -1 && type === 'prev') {
      navigate(`/more/${pages[toPageIndex - 1]}`);
    }
  };

  return (
    <section className="more">
      <div className="container">
        <div className="more__wrapper">
          <button
            className="more__nav-btn more__nav-btn--prev"
            disabled={ match?.params.page === pages[0] }
            onClick={ () => { handleChangePage('prev') } }
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg>
          </button>

          <button
            className="more__nav-btn more__nav-btn--next"
            disabled={ match?.params.page === pages[pages.length - 1] }
            onClick={ () => { handleChangePage('next') } }
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg>
          </button>
          <div className="more__content">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};
