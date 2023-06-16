import React, { useState } from 'react';
import type { QuestionType, UserAnswer } from '../../types';
import { fetchQuestions } from '../../requests/questions';
import { Loader } from '../Loader';
import { TestQuestion } from '../TestQuestion';
import { TestResult } from '../TestResult';

import './Test.scss';

export const Test = (): JSX.Element => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfQuestion, setNumberOfQuestion] = useState(0);
  const [pullOfUserAnswers, setPullOfUserAnswers] = useState<UserAnswer[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleStartTest = async (): Promise<void> => {
    setIsLoading(true);

    const questionsFromServer = await fetchQuestions();

    setQuestions(questionsFromServer);
    setIsLoading(false);
  };

  const handleNextQuestion = (userAnswers: string[]): void => {
    if (numberOfQuestion >= questions.length - 1) {
      return;
    }

    setPullOfUserAnswers([
      ...pullOfUserAnswers,
      {
        index: numberOfQuestion,
        answers: userAnswers
      }
    ]);
    setNumberOfQuestion(prev => prev + 1);
  };

  const handleFinishTest = (userAnswers: string[]): void => {
    setPullOfUserAnswers([
      ...pullOfUserAnswers,
      {
        index: numberOfQuestion,
        answers: userAnswers
      }
    ]);
    setIsFinished(true);
  };

  return (
    <section className="test">
      <div className="container">
        <div className="test__wrapper">
          {
            isLoading && (
              <div className="test__loader">
                <Loader />
              </div>
            )
          }
          {
            (!isFinished && !isLoading && !questions.length) && (
              <>
                <h3 className="test__title">
                  Тут ту можеш пройти тест по вивченому матеріалу
                </h3>

                <div className="test__content">
                  <p className="test__info">
                    Тест включає 6 питань: 3 запитання з однією правильною відповіддю, 3 - з двома.
                    Кожне питання оцінюється в 1 бал. За одни правильну відповідь в запитанні, де потрібно вибрати дві відповіді буде нараховано 0,5 бала.
                  </p>

                  <button
                    className="test__btn"
                    onClick={ handleStartTest }
                  >
                    Почати тест
                  </button>
                </div>
              </>
            )
          }
          {
            (!isFinished && !isLoading && !!questions.length) && (
              <div className="test__current">
                <TestQuestion
                  question={ questions[numberOfQuestion] }
                  handleNextQuestion={ handleNextQuestion }
                  isLast={ numberOfQuestion >= questions.length - 1 }
                  handleFinishTest={ handleFinishTest }
                />
              </div>
            )
          }
          {
            isFinished && (
              <TestResult
                questions={ questions }
                pullOfUserAnswers={ pullOfUserAnswers }
              />
            )
          }
        </div>
      </div>
    </section>
  );
};
