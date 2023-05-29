import React from 'react';

import './About.scss';

export const About = (): JSX.Element => (
  <section className="about">
    <div className="container about__container">
      <div className="about__wrapper">
        <div className="about__content">
          <h2 className="about__title">
            <strong>Learn HTML</strong> - це невеликий ознайомчий курс по HTML, що надасть тобі ознайомчу інформацію що до цієї технології
          </h2>

          <div className="about__text-wrapper">
            <p className="about__text">
              З цього курсу ти дізнаєшся що таке HTML, для чого його використовують,
              історію його створення, де код написаний на ньому відтворюється і дещо ще цікаве.
            </p>

            <p className="about__text">
              В першу чергу курс розрахований на початківців, тому якщо ти нічого не знаєш про HTML, то ти потрапив за вірним адресом 😁
            </p>

            <p className="about__text">
              Щож, досить марнувати дорогоцінний час та приступай до освоєння нових знань! 🤩
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
