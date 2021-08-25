#!/usr/bin/env node
import { getQuestionAndAnswerCorrect, description } from '../games/even.js';
import runGame from '../src/index.js';

runGame(getQuestionAndAnswerCorrect, description);
