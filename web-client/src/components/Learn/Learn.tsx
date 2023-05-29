import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Pagination } from '../Pagination';
import theme from '../../store/theme';

import './Learn.scss';

export const Learn = observer((): JSX.Element => {
  const { id = '1' } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    theme.fetchTheme(+id);

    if (id !== '1') {
      navigate(`/learn/${id}`);
    }
  }, [theme.theme]);

  return (
    <section className="learn">
      <div className="container">
        <div className="learn__wrapper">
          {
            !theme.getTheme
              ? (
                <h2 className="learn__title">
                  Щось пішло не так 😔. Спробуй перезавантажити сторінку.
                </h2>)
              : (
                <>
                  <h2 className="learn__title">
                    { theme.getTheme.title }
                  </h2>
                  <div className="learn__content-wrapper">
                    <div className="learn__content">
                      <div className="learn__image-wrapper">
                        <img src={ `/images/${String(theme.getTheme.image)}` } alt="Image" className="learn__image"/>
                      </div>
                      {
                        theme.getTheme.paragraphs.map((par, index) => (
                          <div key={ index } className="learn__text" dangerouslySetInnerHTML={{ __html: par }}></div>
                        ))
                      }

                      <Pagination amountOfPages={ 5 } />
                    </div>
                  </div>
                </>)
          }
        </div>
      </div>
    </section>
  );
});
