#!/usr/bin/env node
import { getQuestionAndAnswerCorrect, description } from '../games/progression.js';
import runGame from '../src/index.js';

runGame(getQuestionAndAnswerCorrect, description);
