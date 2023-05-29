import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Pagination.scss';

interface Props {
  amountOfPages: number
}

export const Pagination = ({ amountOfPages }: Props): JSX.Element => {
  const [numberOfPages, setNumberOfPages] = useState<number[]>([]);

  useEffect(() => {
    const arrOfPageIndexes = [];

    for (let i = 1; i <= amountOfPages; i++) {
      arrOfPageIndexes.push(i);
    }

    setNumberOfPages(arrOfPageIndexes);
  }, [amountOfPages]);

  console.log('render');

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__list-item">
          <button
            className="pagination__btn pagination__btn--prev"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#000" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
          </button>
        </li>

        {
          numberOfPages.map(item => (
            <li
              key={ item }
              className="pagination__list-item"
            >
              <NavLink to={ `/learn/${item}`} className="pagination__link">
                { item }
              </NavLink>
            </li>
          ))
        }

        <li className="pagination__list-item">
          <button
            className="pagination__btn pagination__btn--next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#000" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
          </button>
        </li>
      </ul>
    </div>
  );
};
