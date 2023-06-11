import React, { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { fetchTagsByParam } from '../../requests/tags';
import type { TagType } from '../../types';

import './FindTag.scss';

export const FindTag = (): JSX.Element => {
  const [query, setUserQuery] = useState('');
  const [tags, setTags] = useState<TagType[] | null>(null);
  const [isNotFound, setIsNotFound] = useState(false);

  const search = (value: string): void => {
    if (!value) {
      return;
    }

    fetchTagsByParam(value)
      .then((res) => {
        setTags(res);

        if (isNotFound) {
          setIsNotFound(false);
        }
      })
      .catch(() => {
        setIsNotFound(true);
      });
  };

  const handleChangeValue = (event: FormEvent<HTMLInputElement>): void => {
    if (!event) {
      return;
    }

    setUserQuery(event.currentTarget.value);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      search(query);
    }, 500);

    return () => { clearTimeout(delay) };
  }, [query]);

  return (
    <section className="find-tag">
      <div className="container">
        <div className="find-tag__wrapper">
          <h2 className="find-tag__title">
            Тут ти можеш знайти тег зкий тебе цікавить
          </h2>

          <div className="find-tag__content">
            <div className="find-tag__field">
              <input
                type="search"
                className="find-tag__input"
                value={ query }
                onChange={ handleChangeValue }
                placeholder="Введи тег який тебе цікавить"
              />
            </div>
          </div>

          {
            isNotFound && (
              <p className="find-tag__not-found">
                Такого тегу не існує.
              </p>
            )
          }

          {
            tags?.length && !isNotFound && (
              <div className="find-tag__content">
                <ul className="find-tag__list">
                  {
                    tags.map(tag => (
                      <li
                        key={ tag.id }
                        className="find-tag__list-item"
                      >
                        <strong>
                          { tag.name }
                        </strong>
                        { ' ' }
                        —
                        { ' ' }
                        { tag.description }
                      </li>
                    ))
                  }
                </ul>
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
};
