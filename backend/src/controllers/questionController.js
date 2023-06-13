import { Question } from '../models/Question.js';
import { randomInt } from '../helpers/randomInt.js';

async function getQuestion(req, res) {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(422);
    return;
  }

  const question = await Question.findOne({
    where: {
      id
    }
  });

  if (!question) {
    res.sendStatus(404);
    return;
  }

  res.send(question);
}

async function getQuestionsArrayForTest (req, res) {
  const questions = await Question.findAll({
    attributes: ['id', 'title', 'answers', 'correct']
  });
  const oneAnswerQuestions = questions.filter(q => q.correct.length < 2);
  const twoAnswerQuestions = questions.filter(q => q.correct.length > 1);
  let questionsForTest = [];

  for (let i = 0; i < 3; i ++) {
    const oneAnswerIndex = randomInt(0, oneAnswerQuestions.length - 1);
    const twoAnswerIndex = randomInt(0, twoAnswerQuestions.length - 1);

    questionsForTest.push(
      oneAnswerQuestions[oneAnswerIndex],
      twoAnswerQuestions[twoAnswerIndex]
    );

    oneAnswerQuestions.splice(oneAnswerIndex, 1);
    twoAnswerQuestions.splice(twoAnswerIndex, 1);
  }

  res.send(questionsForTest);
}

async function postQuestion(req, res) {
  const { title, answers, correct } = req.body;

  if (!title || !answers || !correct) {
    res.sendStatus(422);
    return;
  }

  const question = await Question.create({
    title,
    answers,
    correct
  });

  res.send(question);
}

export const questionController = {
  getQuestion,
  postQuestion,
  getQuestionsArrayForTest
};
