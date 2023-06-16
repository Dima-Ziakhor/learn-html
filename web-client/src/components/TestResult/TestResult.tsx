import React, { useEffect, useState } from 'react';
import type { QuestionType, UserAnswer } from '../../types';

import './TestResult.scss';

interface Props {
  questions: QuestionType[]
  pullOfUserAnswers: UserAnswer[]
}

export const TestResult = ({ questions, pullOfUserAnswers }: Props): JSX.Element => {
  const [userMark, setUserMark] = useState(0);
  const cef = 1;
  const cefForMulti = 0.5;

  useEffect(() => {
    const correctAnswers = questions.map(q => q.correct);
    const usersAnswers = pullOfUserAnswers.map(answer => answer.answers);
    let tempMark = 0;

    for (let i = 0; i < correctAnswers.length; i++) {
      const correctAnswer = correctAnswers[i];
      const userAnswer = usersAnswers[i];

      if (correctAnswer.length < 2) {
        tempMark += correctAnswer[0] === userAnswer[0] ? cef : 0;
      } else {
        for (let j = 0; j < correctAnswer.length; j++) {
          tempMark += correctAnswer.includes(userAnswer[j]) ? cefForMulti : 0;
        }

        if (correctAnswer.length !== userAnswer.length) {
          for (let i = 1; i <= correctAnswers.length - userAnswer.length; i++) {
            tempMark -= cefForMulti;
          }
        }
      }
    }

    setUserMark(tempMark);
  }, []);

  return (
    <div className="result">
      <div className="container">
        <div className="result__wrapper">
          <div className="result__content">
            <p className="result__text">
              Тест завершено!
              <br/>
              Ти набрав: { userMark }
            </p>

            <p className="result__text">

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
