import React from 'react';
import { MainPageBackground } from '../MainPageBackground';
import './Start.scss';

export const Start = (): JSX.Element => {
  return (
    <section className="start">
      <div className="start__bg">
        <MainPageBackground />
      </div>
      <div className="start__container container">
        <div className="start__wrapper">
          <div className="start__content">
            <h1 className="start__title">Learn HTML</h1>

            <p className="start__text">
              Це невеликий навчальний курс по HTML.
              Якщо ти початківець і тебе цікавить тема WEB-розробки,
              то цей короткий курс саме те з чого тобі потрібно почати.
              Нехай щастить! 😉
            </p>

            <button className="start__btn">
              Почати!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
