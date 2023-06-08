import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.scss';

export const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/" className="header__logo-wrapper">
            <img src={ `${process.env.PUBLIC_URL}/images/logo.png` } alt="Learn HTML logo" className="header__logo"/>
          </Link>

          <nav className="header__menu">
            <ul className="header__list">
              <li className="header__list-item">
                <NavLink to="/learn" className="header__menu-link">
                  Навчатися
                </NavLink>
              </li>

              <li className="header__list-item">
                <NavLink to="/about" className="header__menu-link">
                  Про курс
                </NavLink>
              </li>

              <li className="header__list-item">
                <NavLink to="/author-and-support" className="header__menu-link">
                  Автор та підтрика
                </NavLink>
              </li>

              <li className="header__list-item">
                <NavLink to="/more/all-tags" className="header__menu-link">
                  Більше
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
