import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Pagination } from '../Pagination';
import theme from '../../store/theme';

import './Learn.scss';

export const Learn = observer((): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contentFontSize, setContentFontSize] = useState(1.8);

  useEffect(() => {
    if (!id) {
      theme.fetchTheme(+1);
      navigate('/learn/1');
    } else {
      theme.fetchTheme(+id);
    }
  }, [id]);

  const handleChangeFontSize = (decrease: boolean): void => {
    if (decrease) {
      setContentFontSize(prev => prev - 0.1);

      return;
    }

    setContentFontSize(prev => prev + 0.1);
  };

  const handleChangePage = useCallback((event: React.MouseEvent<HTMLButtonElement>): void => {
    let currentPageId = parseInt(id ?? '1');

    if (!currentPageId) {
      return;
    }

    switch (event.currentTarget.getAttribute('data-name')) {
      case 'next': {
        currentPageId++;
        navigate(`/learn/${currentPageId}`);

        break;
      }

      case 'prev': {
        currentPageId--;
        navigate(`/learn/${currentPageId}`);

        break;
      }
    }
  }, [id]);

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
                    <div className="learn__content" style={ { fontSize: `${contentFontSize}rem`, lineHeight: `${contentFontSize + 0.2}rem` } }>
                      <div className="learn__font-buttons">
                        <button
                          className="learn__font-btn learn__font-btn--increase"
                          onClick={ () => { handleChangeFontSize(false) } }
                          title="Збільшити шрифт"
                        >
                          A+
                        </button>

                        <button
                          className="learn__font-btn learn__font-btn--decrease"
                          onClick={ () => { handleChangeFontSize(true) } }
                          title="Зменшити шрифт"
                        >
                          A-
                        </button>
                      </div>

                      <div className="learn__image-wrapper">
                        <img src={ `${process.env.PUBLIC_URL}/images/${String(theme.getTheme.image)}` } alt="Image" className="learn__image"/>
                      </div>
                      {
                        theme.getTheme.paragraphs.map((par, index) => (
                          <div key={ index } className="learn__text" dangerouslySetInnerHTML={{ __html: par }}></div>
                        ))
                      }

                      <Pagination
                        currentPageId={ parseInt(id ?? '1') }
                        amountOfPages={ 5 }
                        handleChangePage={ handleChangePage }
                      />
                    </div>
                  </div>
                </>)
          }
        </div>
      </div>
    </section>
  );
});
