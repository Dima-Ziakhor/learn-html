import React, { useState } from 'react';
import type { FormEvent } from 'react';

import './FindTag.scss';

export const FindTag = React.memo((): JSX.Element => {
  const [userValue, setUserValue] = useState('');

  const handleChangeValue = (event: FormEvent<HTMLInputElement>): void => {
    if (!event) {
      return;
    }

    setUserValue(event.currentTarget.value);

    // const timer = setTimeout(() => {
    //
    // }, 1000);
  };

  return (
    <section className="find-tag">
      <div className="container">
        <div className="find-tag__wrapper">
          <h2 className="find-tag__title">
            Тут ти можеш знайти тег зкий тебе цікавить
          </h2>

          <div className="find-tag__content">
            <div className="find-field">
              <input
                type="text"
                className="find-field__input"
                value={ userValue }
                onChange={ handleChangeValue }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
