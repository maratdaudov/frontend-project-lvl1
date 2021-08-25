#!/usr/bin/env node
import { getQuestionAndAnswerCorrect, description } from '../games/prime.js';
import runGame from '../src/index.js';

runGame(getQuestionAndAnswerCorrect, description);
