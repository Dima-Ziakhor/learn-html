import React from 'react';

import './AuthorAndSupport.scss';

export const AuthorAndSupport = (): JSX.Element => (
  <section className="support">
    <div className="container support__container">
      <div className="support__wrapper">
        <div className="support__content">
          <h2 className="support__title">
            Авторство і підтримка
          </h2>

          <p className="support__text">
            Автором даного курсу є Зяхор Дмитро.
            <br/>
            Тому якщо в тебе якісь запитання або пропозиції звертайся в
            &nbsp;
            <a
              href="https://t.me/dmitriy_zhr"
              target="_blank"
              rel="noreferrer"
              className="support__link"
            >telegram</a>.
          </p>

          <p className="support__text">
            Знайшов баг, пиши
            &nbsp;
            <a
              href="mailto:dmziakhor@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="support__link"
            >сюди</a>
            &nbsp;😉
          </p>
        </div>
      </div>
    </div>
  </section>
);
