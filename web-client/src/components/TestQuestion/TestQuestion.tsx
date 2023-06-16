import React, { useState } from 'react';
import type { FormEvent } from 'react';
import type { QuestionType } from '../../types';

import './TestQuestion.scss';

interface Props {
  question: QuestionType
  handleNextQuestion: (userAnswers: string[]) => void
  isLast: boolean
  handleFinishTest: (userAnswers: string[]) => void
}
export const TestQuestion = ({ question, handleNextQuestion, isLast, handleFinishTest }: Props): JSX.Element => {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const handleSelectAnswer = (event: FormEvent<HTMLInputElement>): void => {
    const { value, checked } = event.currentTarget;

    setUserAnswers(
      checked
        ? [...userAnswers, value]
        : userAnswers.filter(item => item !== value)
    );
  };

  return (
    <div className="question">
      <p className="question__text">
        { question.title }
      </p>

      <div className="question__answers">
        <ul className="question__list">
          {
            question.answers.map((answer, i) => (
              <li
                key={ answer }
                className="question__list-item"
              >
                <div className="question__list-content">
                  {
                    question.correct.length > 1
                      ? (
                        <input
                          id={ answer }
                          className="question__checkbox"
                          type="checkbox"
                          name={ 'answer' }
                          value={ answer }
                          onChange={ handleSelectAnswer }
                          checked={ userAnswers.includes(answer) }
                        />)
                      : (
                        <input
                          id={ answer }
                          className="question__radio"
                          type="radio"
                          name={ 'answer' }
                          value={ answer }
                          onChange={ handleSelectAnswer }
                          checked={ userAnswers.includes(answer) }
                        />)
                  }
                  <label
                    className="question__label"
                    htmlFor={ answer }
                  >
                    { answer }
                  </label>
                </div>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="question__next">
        {
          !isLast
            ? (
              <button
                className="question__next-btn"
                onClick={ () => {
                  handleNextQuestion(userAnswers);
                  setUserAnswers([]);
                } }
              >
                Далі
              </button>)
            : (
              <button
                className="question__next-btn"
                onClick={ () => { handleFinishTest(userAnswers) } }
              >
                Завершити тест
              </button>)
        }
      </div>
    </div>
  );
};
