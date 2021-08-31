#!/usr/bin/env node
import { getQuestionAndAnswerCorrect, description } from '../src/games/calc.js';
import runGame from '../src/index.js';

runGame(getQuestionAndAnswerCorrect, description);
