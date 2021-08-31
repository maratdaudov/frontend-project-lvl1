#!/usr/bin/env node
import { getQuestionAndAnswerCorrect, description } from '../src/games/prime.js';
import runGame from '../src/index.js';

runGame(getQuestionAndAnswerCorrect, description);
